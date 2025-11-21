"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { user } from "@/lib/mock-data";
import { Bell } from "lucide-react";
import { Button } from "../ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { signIn, signOut, useSession } from "next-auth/react";

export function DashboardHeader() {
  const { data: session } = useSession();
  const userAvatar = PlaceHolderImages.find((p) => p.id === user.avatarId);

  return (
    <header className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-3xl font-headline tracking-wider text-primary animate-glow">
          Voltis
        </h1>
        {session?.user && (
          <p className="text-muted-foreground">
            Bienvenido de nuevo, {session?.user.name}.
          </p>
        )}
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
          </span>
        </Button>

        {session?.user ? (
          <>
            <Button onClick={() => signOut()}>Logout</Button>
            <Avatar className="border-2 border-primary/50">
              <AvatarImage
                src={session?.user?.image || userAvatar?.imageUrl}
                alt={session?.user?.name || user.name}
                data-ai-hint={session?.user?.name || userAvatar?.imageHint}
              />
              <AvatarFallback>
                {session.user.name || user.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
          </>
        ) : (
          <Button onClick={() => signIn()}>Login</Button>
        )}
      </div>
    </header>
  );
}
