import { ActiveCourses } from '@/components/dashboard/active-courses';
import { DashboardHeader } from '@/components/dashboard/header';
import { PerformanceChart } from '@/components/dashboard/performance-chart';
import { ProgressMetrics } from '@/components/dashboard/progress-metrics';
import { QuickActions } from '@/components/dashboard/quick-actions';
import { RecentAchievements } from '@/components/dashboard/recent-achievements';
import { StudyTimeAnalysis } from '@/components/dashboard/study-time-analysis';
import { TodoList } from '@/components/dashboard/todo-list';

export default function Home() {
  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-screen-2xl mx-auto">
        <DashboardHeader />

        <main className="grid grid-cols-12 gap-6">
          <div className="col-span-12">
            <ProgressMetrics />
          </div>

          <div className="col-span-12">
            <QuickActions />
          </div>

          <div className="col-span-12 xl:col-span-8">
            <PerformanceChart />
          </div>

          <div className="col-span-12 md:col-span-6 xl:col-span-4">
            <ActiveCourses />
          </div>

          <div className="col-span-12 md:col-span-6 xl:col-span-4">
            <TodoList />
          </div>

          <div className="col-span-12 md:col-span-6 xl:col-span-4">
            <RecentAchievements />
          </div>

          <div className="col-span-12 md:col-span-6 xl:col-span-4">
            <StudyTimeAnalysis />
          </div>
        </main>
      </div>
    </div>
  );
}
