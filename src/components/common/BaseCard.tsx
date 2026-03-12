import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface BaseCardProps {
  children: ReactNode;
  className?: string;
}
//experience, certification, contact section card에서 공통적으로 사용되는 base card component
export function BaseCard({ children, className }: BaseCardProps) {
  return (
    <div
      className={cn(
        "bg-bg-card rounded-lg p-6 shadow-card",
        "border-[1.5px] border-transparent",
        "transition-[background-color,border-color,box-shadow,transform] duration-300 ease-[var(--ease-standard)]",
        "hover:scale-hover-card hover:bg-bg-card-hover hover:border-netflix-primary hover:shadow-card-glow",
        className,
      )}
    >
      {children}
    </div>
  );
}
