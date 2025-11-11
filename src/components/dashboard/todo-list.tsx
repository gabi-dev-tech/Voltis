import { todoList } from '@/lib/mock-data';
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Bell } from 'lucide-react';
import { CyberCard } from './cyber-card';

export function TodoList() {
  return (
    <CyberCard className="h-full">
      <CardHeader>
        <CardTitle className="font-headline text-xl text-primary">
          Tareas Pendientes
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {todoList.map((item) => (
            <div key={item.id} className="flex items-center space-x-4">
              <Checkbox
                id={`task-${item.id}`}
                checked={item.completed}
                className="border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
              />
              <div className="flex-1">
                <label
                  htmlFor={`task-${item.id}`}
                  className={`font-medium transition-colors ${
                    item.completed ? 'line-through text-muted-foreground' : ''
                  }`}
                >
                  {item.task}
                </label>
                <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                  <Bell className="h-3 w-3" />
                  {item.dueDate}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </CyberCard>
  );
}
