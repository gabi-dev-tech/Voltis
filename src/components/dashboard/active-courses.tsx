import { activeCourses } from '@/lib/mock-data';
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CyberCard } from './cyber-card';

export function ActiveCourses() {
  return (
    <CyberCard className="h-full">
      <CardHeader>
        <CardTitle className="font-headline text-xl text-primary">
          Cursos Activos
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {activeCourses.map((course, index) => (
            <div key={index}>
              <div className="flex justify-between items-baseline mb-1">
                <p className="font-medium">{course.title}</p>
                <p className="text-sm font-mono text-primary">
                  {course.progress}%
                </p>
              </div>
              <p className="text-xs text-muted-foreground mb-2">
                {course.instructor}
              </p>
              <Progress
                value={course.progress}
                className="h-2 [&>div]:bg-gradient-to-r [&>div]:from-secondary [&>div]:to-primary"
              />
            </div>
          ))}
        </div>
      </CardContent>
    </CyberCard>
  );
}
