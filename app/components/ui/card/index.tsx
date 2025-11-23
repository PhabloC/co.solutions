import { cn } from "@/lib/utils";
import { CardProps } from "./types";

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-border bg-card/70 backdrop-blur-sm",
        "transition-all duration-500 hover:scale-[1.02] hover:border-primary/40 hover:shadow-2xl hover:bg-card/90",
        className
      )}
    >
      {children}

      {/* Gradiente sutil no hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 bg-linear-to-t from-primary/5 to-transparent" />
      </div>
    </div>
  );
}

export function CardHeader({ children, className }: CardProps) {
  return <div className={cn("p-8 pb-4", className)}>{children}</div>;
}

export function CardTitle({ children, className }: CardProps) {
  return (
    <h3
      className={cn(
        "text-2xl font-bold tracking-tight text-foreground",
        className
      )}
    >
      {children}
    </h3>
  );
}

export function CardContent({ children, className }: CardProps) {
  return <div className={cn("px-8 pb-8", className)}>{children}</div>;
}
