"use client";
import { useState } from "react";
import { DashboardHeader } from "@/components/dashboard/header";
import { PerformanceChart } from "@/components/dashboard/performance-chart";
import { ProgressMetrics } from "@/components/dashboard/progress-metrics";
import { QuickActions } from "@/components/dashboard/quick-actions";
import { StudyTimeAnalysis } from "@/components/dashboard/study-time-analysis";
const coinSound = "/sounds/coin.mp3";
const clickSound = "/sounds/drop-coin.mp3";
const powerSound = "/sounds/power.mp3";
// import { ActiveCourses } from '@/components/dashboard/active-courses';
// import { RecentAchievements } from '@/components/dashboard/recent-achievements';
// import { TodoList } from '@/components/dashboard/todo-list';

export default function Home() {
  const [progressMetrics, setProgressMetrics] = useState([
    { title: "Monedas Acumuladas", value: 0, change: "+1 este mes" },
    { title: "Cantidad de Clicks", value: 0, change: "+3%" },
    { title: "Horas de Juego", value: 0, change: "+20 horas" },
    { title: "Logros Desbloq.", value: 0, change: "+5" },
  ]);
  const [power, setPower] = useState(false);

  const addCoin = () => {
    new Audio(coinSound).play();
    const newMetrics = [...progressMetrics];
    if (newMetrics[1].value == 5) {
      newMetrics[0].value = newMetrics[0].value + 10;
    } else if (newMetrics[1].value == 20) {
      newMetrics[0].value = newMetrics[0].value + 25;
    } else if (newMetrics[1].value == 50) {
      newMetrics[0].value = newMetrics[0].value + 75;
    } else if (newMetrics[1].value == 100) {
      newMetrics[0].value = newMetrics[0].value + 150;
    } else {
      newMetrics[0].value = newMetrics[0].value + 1;
    }
    setProgressMetrics(newMetrics);
  };

  const restCoin = () => {
    const newMetrics = [...progressMetrics];
    if (newMetrics[0].value <= 250)
      return alert(
        "No tienes suficientes monedas para activar el potenciador."
      );
    new Audio(powerSound).play();
    newMetrics[0].value = Math.max(0, newMetrics[0].value - 250);
    setProgressMetrics(newMetrics);
  };

  const addAchievement = () => {
    const newMetrics = [...progressMetrics];
    newMetrics[3].value = newMetrics[3].value + 1;
    setProgressMetrics(newMetrics);
  };

  const handlePlayGame = () => {
    new Audio(clickSound).play();
    const newMetrics = [...progressMetrics];
    if (power) {
      newMetrics[1].value = newMetrics[1].value + 2;
    } else {
      newMetrics[1].value = newMetrics[1].value + 1;
    }
    setProgressMetrics(newMetrics);

    if (newMetrics[1].value == 5) {
      addAchievement();
      addCoin();
      alert("¡Has desbloqueado un logro secreto por jugar 5 veces!");
    }
    if (newMetrics[1].value == 20) {
      addAchievement();
      addCoin();
      alert("¡Has desbloqueado un logro secreto por jugar 20 veces!");
    }
    if (newMetrics[1].value == 50) {
      addAchievement();
      addCoin();
      alert("¡Has desbloqueado un logro secreto por jugar 50 veces!");
    }
    if (newMetrics[1].value == 100) {
      addAchievement();
      addCoin();
      alert("¡Has desbloqueado un logro secreto por jugar 100 veces!");
    }
  };

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

          {/* <div className="col-span-12 md:col-span-6 xl:col-span-4">
            <ActiveCourses />
          </div> */}

          {/* <div className="col-span-12 md:col-span-6 xl:col-span-4">
            <TodoList />
          </div> */}

          {/* <div className="col-span-12 md:col-span-6 xl:col-span-4">
            <RecentAchievements />
          </div> */}

          <div className="col-span-12 md:col-span-6 xl:col-span-4">
            <StudyTimeAnalysis />
          </div>
        </main>
      </div>
    </div>
  );
}
