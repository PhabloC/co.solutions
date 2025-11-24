import { VariantProps } from "class-variance-authority";
import { buttonVariants } from ".";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "glass"
  | "default"
  | "destructive"
  | "ghost"
  | "link";

export type ButtonSize = "sm" | "md" | "lg" | "icon";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}
