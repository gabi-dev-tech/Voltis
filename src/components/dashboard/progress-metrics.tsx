import { ArrowUpRight } from "lucide-react";
import { CardContent, CardHeader, CardTitle } from "../ui/card";
import { CyberCard } from "./cyber-card";

export function ProgressMetrics({
  progressMetrics,
}: {
  progressMetrics: { title: string; value: number; change: string }[];
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {progressMetrics.map((metric, index) => (
        <CyberCard key={index} className="flex flex-col justify-between p-0">
          <CardHeader>
            <CardTitle className="text-muted-foreground font-body font-normal text-sm">
              {metric.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-headline text-primary">
              {metric.value}
            </div>
            <div className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
              <ArrowUpRight className="h-3 w-3 text-green-400" />
              <span className="text-green-400">{metric.change}</span>
            </div>
          </CardContent>
        </CyberCard>
      ))}
    </div>
  );
}
