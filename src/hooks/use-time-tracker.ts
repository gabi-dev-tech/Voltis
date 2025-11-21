import { useState, useEffect, useRef } from "react";

function useActiveTimeTracker(isLoggedIn: boolean) {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    function startCounting() {
      if (typeof window === "undefined") return; // SSR safety
      if (intervalRef.current === null) {
        intervalRef.current = window.setInterval(() => {
          setSeconds((prev) => prev + 1);
        }, 1000);
      } else {
        console.error(
          "startCounting: ya hay un intervalo activo",
          intervalRef.current
        );
      }
    }

    function stopCounting() {
      if (typeof window === "undefined") return;
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    function handleVisibilityChange() {
      if (typeof document === "undefined") return;
      if (document.hidden) {
        stopCounting();
      } else if (isLoggedIn) {
        startCounting();
      }
    }

    if (isLoggedIn) {
      startCounting();
      if (typeof document !== "undefined") {
        document.addEventListener("visibilitychange", handleVisibilityChange);
      }
    }

    return () => {
      stopCounting();
      if (typeof document !== "undefined") {
        document.removeEventListener(
          "visibilitychange",
          handleVisibilityChange
        );
      }
    };
  }, [isLoggedIn]);

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  return {hours, minutes, seconds};
}
export default useActiveTimeTracker;
