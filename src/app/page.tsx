"use client";
import { useEffect, useState } from "react";
import { DashboardHeader } from "@/components/dashboard/header";
import { PerformanceChart } from "@/components/dashboard/performance-chart";
import { ProgressMetrics } from "@/components/dashboard/progress-metrics";
import { QuickActions } from "@/components/dashboard/quick-actions";
import { StudyTimeAnalysis } from "@/components/dashboard/study-time-analysis";
import { useSession } from "next-auth/react";
import useActiveTimeTracker from "@/hooks/use-time-tracker";
import useDebouncedMetrics, { Metric } from "@/hooks/use-debounced-metrics";
const coinSound = "/sounds/coin.mp3";
const clickSound = "/sounds/drop-coin.mp3";
const powerSound = "/sounds/power.mp3";
// import { ActiveCourses } from '@/components/dashboard/active-courses';
// import { RecentAchievements } from '@/components/dashboard/recent-achievements';
// import { TodoList } from '@/components/dashboard/todo-list';

export default function Home() {
  const { data: session } = useSession();
  const [power, setPower] = useState(false);

  const [progressMetrics, setProgressMetrics] = useDebouncedMetrics(session);

  let isLoggedIn = session?.user ? true : false;
  const { hours, minutes, seconds } = useActiveTimeTracker(isLoggedIn);

  // Use setProgressMetrics updater to change values synchronously and trigger debounced sync.
  const setTimme = () => {
    setProgressMetrics((prev) => {
      const newMetrics = [...prev];
      newMetrics[2] = { ...newMetrics[2], value: minutes };
      return newMetrics;
    });
  };

  const addCoin = () => {
    new Audio(coinSound).play();
    setProgressMetrics((prev) => {
      const newMetrics = [...prev];
      const count = newMetrics[1].value;
      let bonus = 1;
      if (count == 5) bonus = 10;
      else if (count == 20) bonus = 25;
      else if (count == 50) bonus = 75;
      else if (count == 100) bonus = 150;
      newMetrics[0] = { ...newMetrics[0], value: newMetrics[0].value + bonus };
      return newMetrics;
    });
  };

  const restCoin = () => {
    setProgressMetrics((prev) => {
      const newMetrics = [...prev];
      if (newMetrics[0].value <= 100) {
        alert("No tienes suficientes monedas para activar el potenciador.");
        return prev;
      }
      new Audio(powerSound).play();
      newMetrics[0] = { ...newMetrics[0], value: Math.max(0, newMetrics[0].value - 100) };
      return newMetrics;
    });
  };

  const addAchievement = () => {
    setProgressMetrics((prev) => {
      const newMetrics = [...prev];
      newMetrics[3] = { ...newMetrics[3], value: newMetrics[3].value + 1 };
      return newMetrics;
    });
  };

  const handlePlayGame = () => {
    new Audio(clickSound).play();
    // single state update: update clicks and add rewards if milestone reached
    setProgressMetrics((prev) => {
      const newMetrics = [...prev];
      const prevClicks = newMetrics[1].value;
      const delta = power ? 2 : 1;
      const newCount = prevClicks + delta;
      newMetrics[1] = { ...newMetrics[1], value: newCount };

      if (newCount === 5 || newCount === 20 || newCount === 50 || newCount === 100) {
        // award achievement and coins in same state update (no need to call separate helpers)
        newMetrics[3] = { ...newMetrics[3], value: newMetrics[3].value + 1 };

        // coin bonuses (same logic as addCoin)
        if (newCount === 5) newMetrics[0] = { ...newMetrics[0], value: newMetrics[0].value + 10 };
        if (newCount === 20) newMetrics[0] = { ...newMetrics[0], value: newMetrics[0].value + 25 };
        if (newCount === 50) newMetrics[0] = { ...newMetrics[0], value: newMetrics[0].value + 75 };
        if (newCount === 100) newMetrics[0] = { ...newMetrics[0], value: newMetrics[0].value + 150 };
        // small UX alert (still immediate)
        setTimeout(() => alert(`¡Has desbloqueado un logro secreto por jugar ${newCount} veces!`), 0);
      }

      return newMetrics;
    });
  };

  useEffect(() => {
    setTimme();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [minutes]);

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-screen-2xl mx-auto">
        <DashboardHeader />
        <main className="grid grid-cols-12 gap-6">
          <div className="col-span-12">
            <ProgressMetrics progressMetrics={progressMetrics} />
          </div>
          <div className="col-span-12">
            <QuickActions
              progressMetrics={progressMetrics}
              handlePlayGame={handlePlayGame}
              restCoin={restCoin}
              power={power}
              setPower={setPower}
            />
          </div>
          <div className="col-span-12 xl:col-span-8">
            <PerformanceChart />
          </div>
          <div className="col-span-12 md:col-span-6 xl:col-span-4">
            <StudyTimeAnalysis />
          </div>
        </main>
      </div>
    </div>
  );
}
