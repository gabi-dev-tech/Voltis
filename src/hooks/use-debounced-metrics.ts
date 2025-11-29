"use client";
import { useEffect, useRef, useState, type Dispatch, type SetStateAction } from "react";
import type { Session } from "next-auth";

export interface Metric {
  title: string;
  value: number;
  change: string;
}

// Add base URL
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE!;
const METRICS_PATH = "/metrics";
const METRICS_URL = API_BASE_URL ? `${API_BASE_URL}${METRICS_PATH}` : "/api/metrics";
console.log('debug METRICS_URL -->', METRICS_URL);
// Debounce time increased to 30 seconds
const STORAGE_KEY = process.env.NEXT_PUBLIC_STORAGE_KEY!;
const DEBOUNCE_MS = 30000;

const defaultMetrics: Metric[] = [
  { title: "Monedas Acumuladas", value: 0, change: "+1 este mes" },
  { title: "Cantidad de Clicks", value: 0, change: "+3%" },
  { title: "Minutos de Juego", value: 0, change: "+20 horas" },
  { title: "Logros Desbloq.", value: 0, change: "+5" },
];

export default function useDebouncedMetrics(
  sessionObj: Session | null | undefined
): readonly [Metric[], Dispatch<SetStateAction<Metric[]>>] {
  const [metrics, setMetrics] = useState<Metric[]>(() => defaultMetrics);
  const timerRef = useRef<number | null>(null);
  const pendingRef = useRef(false);
  const loadedRef = useRef(false);

  // Local Storage
  useEffect(() => {
    if (sessionObj === undefined) return;

    if (sessionObj) {
      if (!loadedRef.current) {
        try {
          const raw = localStorage.getItem(STORAGE_KEY);
          if (raw) {
            const parsed = JSON.parse(raw);
            if (Array.isArray(parsed) && parsed.length === defaultMetrics.length) {
              setMetrics(parsed as Metric[]);
            }
          }
        } catch {
          new Error("Failed to load progress metrics from localStorage");
        }
        loadedRef.current = true;
      }
    } else {
      setMetrics(defaultMetrics);
      loadedRef.current = false;
    }
  }, [sessionObj]);

  // Debounced Sync to Server
  useEffect(() => {
    if (!sessionObj?.user) return;

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(metrics));
    } catch {}

    pendingRef.current = true;

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = window.setTimeout(async () => {
      if (!sessionObj?.user) {
        pendingRef.current = false;
        timerRef.current = null;
        return;
      }

      try {
        await fetch(METRICS_URL, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ metrics }),
          keepalive: true,
        });
        pendingRef.current = false;
      } catch (err) {
        console.error("Failed to sync progress metrics", err);
        pendingRef.current = true;
      } finally {
        timerRef.current = null;
      }
    }, DEBOUNCE_MS);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [metrics, sessionObj]);

  // Flush on Unload
  useEffect(() => {
    const flush = () => {
      if (!pendingRef.current || !sessionObj?.user) return;
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (navigator.sendBeacon && raw) {
          navigator.sendBeacon(METRICS_URL, raw);
          pendingRef.current = false;
          return;
        }
      } catch {}
      try {
        const metricsNow = JSON.parse(localStorage.getItem(STORAGE_KEY) || JSON.stringify(defaultMetrics));
        fetch("/api/user/progress-metrics", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ metrics: metricsNow }),
          keepalive: true,
        });
        pendingRef.current = false;
      } catch {
        new Error("Failed to flush progress metrics on unload");
      }
    };

    window.addEventListener("beforeunload", flush);
    return () => window.removeEventListener("beforeunload", flush);
  }, [sessionObj]);

  return [metrics, setMetrics] as const;
}