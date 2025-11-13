import type { ChartConfig } from '@/components/ui/chart';

export const user = {
  name: 'Gabi S.',
  avatarId: 'user-avatar',
};

export const progressMetrics = [
  { title: 'Monedas Acumuladas', value: '30', change: '+1 este mes' },
  { title: 'Cantidad de Clicks', value: '120', change: '+3%' },
  { title: 'Horas de Juego', value: '128', change: '+20 horas' },
  { title: 'Logros Desbloq.', value: '24', change: '+5' },
];

export const activeCourses = [
  {
    title: 'Computación Cuántica',
    progress: 75,
    instructor: 'Dr. Evelyn Reed',
  },
  {
    title: 'Diseño de IA Ética',
    progress: 45,
    instructor: 'Prof. Kenji Tanaka',
  },
  {
    title: 'Redes Neuronales Avanzadas',
    progress: 60,
    instructor: 'Dra. Anya Sharma',
  },
  {
    title: 'Ciberseguridad Ofensiva',
    progress: 90,
    instructor: "Cmdr. Jaxon 'Hex' Cole",
  },
];

export const performanceData = {
  weekly: [
    { day: 'Lun', score: 80 },
    { day: 'Mar', score: 85 },
    { day: 'Mié', score: 92 },
    { day: 'Jue', score: 88 },
    { day: 'Vie', score: 95 },
    { day: 'Sáb', score: 91 },
    { day: 'Dom', score: 89 },
  ],
  monthly: [
    { month: 'Ene', score: 78 },
    { month: 'Feb', score: 82 },
    { month: 'Mar', score: 80 },
    { month: 'Abr', score: 88 },
    { month: 'May', score: 85 },
    { month: 'Jun', score: 92 },
  ],
};

export const performanceChartConfig = {
  score: {
    label: 'Puntaje',
    color: 'hsl(var(--primary))',
  },
} satisfies ChartConfig;

export const todoList = [
  {
    id: 1,
    task: 'Entregar proyecto de Redes Neuronales',
    dueDate: 'Mañana',
    completed: false,
  },
  {
    id: 2,
    task: 'Leer Capítulo 4 de Computación Cuántica',
    dueDate: '3 días',
    completed: false,
  },
  {
    id: 3,
    task: 'Prueba de Ciberseguridad',
    dueDate: '1 semana',
    completed: true,
  },
  {
    id: 4,
    task: 'Revisar feedback de IA Ética',
    dueDate: '2 semanas',
    completed: false,
  },
];

export const recentAchievements = [
  {
    icon: 'Rocket',
    title: 'Maestro de la Sintaxis',
    description: 'Completa 50 ejercicios de código.',
    date: 'hace 2 días',
  },
  {
    icon: 'Crown',
    title: 'Rey del Debate',
    description: 'Gana 3 debates en clase de ética.',
    date: 'hace 1 semana',
  },
  {
    icon: 'ShieldCheck',
    title: 'Fortaleza Digital',
    description: 'Reporta una vulnerabilidad de seguridad.',
    date: 'hace 3 semanas',
  },
];

export const studyTimeData = [
  { name: 'Sesión promedio', hours: 40, fill: 'var(--color-chart-1)' },
  { name: 'Días consecutivos', hours: 25, fill: 'var(--color-chart-2)' },
  { name: 'CPS', hours: 35, fill: 'var(--color-chart-3)' },
  { name: 'Puntos Pico', hours: 28, fill: 'var(--color-chart-4)' },
];

export const studyTimeChartConfig = {
  hours: {
    label: 'Horas',
  },
  'Sesión promedio': {
    label: 'Sesión promedio',
    color: 'hsl(var(--chart-1))',
  },
  'Días consecutivos': {
    label: 'Días consecutivos',
    color: 'hsl(var(--chart-2))',
  },
  'CPS': {
    label: 'Clicks por segundo (CPS)',
    color: 'hsl(var(--chart-3))',
  },
  'Puntos Pico': {
    label: 'Puntos Pico',
    color: 'hsl(var(--chart-4))',
  },
} satisfies ChartConfig;
