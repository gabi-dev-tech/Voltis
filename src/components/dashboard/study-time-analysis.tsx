'use client';
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { studyTimeData, studyTimeChartConfig } from '@/lib/mock-data';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { CyberCard } from './cyber-card';

export function StudyTimeAnalysis() {
  return (
    <CyberCard className="h-full">
      <CardHeader>
        <CardTitle className="font-headline text-xl text-primary">
          Análisis de Tiempo
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={studyTimeChartConfig}
          className="h-[250px] w-full"
        >
          <ResponsiveContainer>
            <BarChart
              data={studyTimeData}
              layout="vertical"
              margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
            >
              <XAxis type="number" hide />
              <YAxis
                type="category"
                dataKey="name"
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                width={80}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dot" />}
              />
              <Bar dataKey="hours" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </CyberCard>
  );
}
