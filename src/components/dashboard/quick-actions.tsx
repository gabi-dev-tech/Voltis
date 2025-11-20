"use client";
import { Button } from "@/components/ui/button";
import { BatteryCharging, GraduationCap, Zap } from "lucide-react";
import { CardContent, CardHeader, CardTitle } from "../ui/card";
import { CyberCard } from "./cyber-card";

export function QuickActions(props: {
  handlePlayGame: () => void;
  restCoin: () => void;
  power: boolean;
  setPower: React.Dispatch<React.SetStateAction<boolean>>;
  progressMetrics: { title: string; value: number; change: string }[];
}) {
  const lightningEffect = "/images/efecto-rayo.gif";
  const newMetrics = [...props.progressMetrics];
  const handlePower = () => {
    props.setPower(true);
    props.restCoin();
    setTimeout(() => props.setPower(false), 10000);
  };

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
            variant={"ghost"}
            disabled={props.power}
            onClick={handlePower}
            className="relative flex items-center justify-center h-20 px-4 text-lg border border-primary/50 text-primary transition-all duration-300 rounded-md"
          >
            {newMetrics[0].value >= 100 || props.power && (
              <>
                <span className="absolute w-full h-full bg-secondary/50 rounded-md animate-lightning-flash delay-100 -z-10"></span>
                <img
                  alt="lightning effect"
                  className="absolute inset-0 w-full h-full object-cover opacity-70 z-0 pointer-events-none rounded-md"
                  src={lightningEffect}
                />
              </>
            )}
            <span
              className={`absolute top-0 left-0 h-full bg-primary/10 transition-[width] duration-1000 ease-in-out rounded-md ${
                newMetrics[0].value <= 100 || props.power
                  ? "w-full rounded-r-md"
                  : "w-0 rounded-l-md"
              }`}
            ></span>

            <div className="relative flex items-center justify-center gap-3 z-10">
              <BatteryCharging className="h-10 w-10" />
              Potenciador
            </div>
          </Button>
          <Button
            size="lg"
            className="h-20 text-lg transition-all duration-300 hover:shadow-neon-primary active:scale-95 active:shadow-neon-primary/80"
            onClick={props.handlePlayGame}
          >
            <Zap className="h-6 w-6" /> Jugar
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-20 text-lg border-secondary/50 text-secondary hover:bg-secondary/10 hover:shadow-neon-secondary transition-all duration-300"
          >
            <GraduationCap className="mr-3 h-6 w-6" /> Calificaciones Globales
          </Button>
        </div>
      </CardContent>
    </CyberCard>
  );
}
