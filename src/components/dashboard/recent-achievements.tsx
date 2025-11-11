import { recentAchievements } from '@/lib/mock-data';
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Rocket, Crown, ShieldCheck } from 'lucide-react';
import { Badge } from '../ui/badge';
import { CyberCard } from './cyber-card';

const iconMap: { [key: string]: React.ElementType } = {
  Rocket: Rocket,
  Crown: Crown,
  ShieldCheck: ShieldCheck,
};

export function RecentAchievements() {
  return (
    <CyberCard className="h-full">
      <CardHeader>
        <CardTitle className="font-headline text-xl text-primary">
          Logros Recientes
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {recentAchievements.map((achievement, index) => {
            const Icon = iconMap[achievement.icon];
            return (
              <li key={index} className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg mt-1">
                  {Icon && <Icon className="h-6 w-6 text-primary" />}
                </div>
                <div className="flex-1">
                  <p className="font-medium">{achievement.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </div>
                <Badge
                  variant="outline"
                  className="text-xs font-mono border-primary/20 text-muted-foreground whitespace-nowrap"
                >
                  {achievement.date}
                </Badge>
              </li>
            );
          })}
        </ul>
      </CardContent>
    </CyberCard>
  );
}
