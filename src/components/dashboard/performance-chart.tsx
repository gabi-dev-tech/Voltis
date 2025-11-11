'use client';
import {
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Line,
  LineChart,
  CartesianGrid,
  XAxis,
  ResponsiveContainer,
  YAxis,
} from 'recharts';
import {
  performanceData,
  performanceChartConfig,
} from '@/lib/mock-data';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { CyberCard } from './cyber-card';

export function PerformanceChart() {
  return (
    <CyberCard>
      <CardHeader>
        <CardTitle className="font-headline text-xl text-primary">
          Rendimiento
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="weekly">
          <TabsList className="grid w-full grid-cols-2 mb-4 bg-card-foreground/5">
            <TabsTrigger value="weekly">Semanal</TabsTrigger>
            <TabsTrigger value="monthly">Mensual</TabsTrigger>
          </TabsList>
          <TabsContent value="weekly">
            <ChartContainer
              config={performanceChartConfig}
              className="h-[300px] w-full"
            >
              <ResponsiveContainer>
                <LineChart
                  data={performanceData.weekly}
                  margin={{ top: 5, right: 20, left: -10, bottom: 5 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="hsl(var(--border) / 0.5)"
                  />
                  <XAxis
                    dataKey="day"
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="dot" />}
                  />
                  <Line
                    dataKey="score"
                    type="monotone"
                    stroke="hsl(var(--primary))"
                    strokeWidth={2}
                    dot={false}
                    activeDot={{
                      r: 6,
                      className: 'shadow-neon-primary fill-primary',
                    }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </TabsContent>
          <TabsContent value="monthly">
            <ChartContainer
              config={performanceChartConfig}
              className="h-[300px] w-full"
            >
              <ResponsiveContainer>
                <LineChart
                  data={performanceData.monthly}
                  margin={{ top: 5, right: 20, left: -10, bottom: 5 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="hsl(var(--border) / 0.5)"
                  />
                  <XAxis
                    dataKey="month"
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="dot" />}
                  />
                  <Line
                    dataKey="score"
                    type="monotone"
                    stroke="hsl(var(--secondary))"
                    strokeWidth={2}
                    dot={false}
                    activeDot={{
                      r: 6,
                      className: 'shadow-neon-secondary fill-secondary',
                    }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </TabsContent>
        </Tabs>
      </CardContent>
    </CyberCard>
  );
}
