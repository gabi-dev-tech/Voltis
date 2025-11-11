import { Button } from '@/components/ui/button';
import { BookOpenCheck, GraduationCap, UploadCloud } from 'lucide-react';
import { CardContent, CardHeader, CardTitle } from '../ui/card';
import { CyberCard } from './cyber-card';

export function QuickActions() {
  return (
    <CyberCard>
      <CardHeader>
        <CardTitle className="font-headline text-xl text-primary">
          Acceso Rápido
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Button
            variant="outline"
            size="lg"
            className="h-20 text-lg border-primary/50 hover:bg-primary/10 hover:text-primary transition-all duration-300"
          >
            <BookOpenCheck className="mr-3 h-6 w-6" /> Acceder a Clases
          </Button>
          <Button
            size="lg"
            className="h-20 text-lg transition-all duration-300 hover:shadow-neon-primary"
          >
            <UploadCloud className="mr-3 h-6 w-6" /> Entregar Tareas
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-20 text-lg border-secondary/50 text-secondary hover:bg-secondary/10 hover:shadow-neon-secondary transition-all duration-300"
          >
            <GraduationCap className="mr-3 h-6 w-6" /> Ver Calificaciones
          </Button>
        </div>
      </CardContent>
    </CyberCard>
  );
}
