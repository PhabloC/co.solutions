import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg font-semibold transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-md",
        secondary: "bg-white text-black hover:bg-gray-200 shadow-md ",
        outline:
          "border-2 border-blue-600 text-blue-600 bg-transparent hover:bg-blue-50 dark:hover:bg-blue-900/20",
        glass:
          "relative overflow-hidden border border-white/30 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm text-white hover:border-white/50 hover:bg-white/20 hover:shadow-lg hover:shadow-white/10 before:absolute before:inset-0 before:-z-10 before:bg-white/10 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100",

        // Variantes extras (shadcn style)
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md",
        destructive: "bg-red-600 text-white hover:bg-red-700 shadow-md",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-blue-600 underline-offset-4 hover:underline font-medium",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-10 px-6 text-base",
        lg: "h-12 px-8 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, loading, children, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8z"
              />
            </svg>
            Carregando...
          </span>
        ) : (
          children
        )}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export default Button;

export { buttonVariants };
