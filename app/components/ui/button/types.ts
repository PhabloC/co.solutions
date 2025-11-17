import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "glass";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}
