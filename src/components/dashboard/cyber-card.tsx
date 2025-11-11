import * as React from 'react';

import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';

const CyberCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <Card
    ref={ref}
    className={cn(
      'bg-card/60 backdrop-blur-xl border-primary/10 rounded-2xl shadow-lg',
      'transition-all duration-300 hover:border-primary/30 hover:shadow-neon-primary',
      className
    )}
    {...props}
  />
));
CyberCard.displayName = 'CyberCard';

export { CyberCard };
