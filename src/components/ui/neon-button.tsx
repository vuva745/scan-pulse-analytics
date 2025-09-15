import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const neonButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-glow-medium hover:shadow-glow-large hover:scale-105 active:scale-95",
        glow: "bg-gradient-neon text-primary-foreground shadow-glow-large hover:shadow-glow-intense animate-glow-pulse hover:scale-105 active:scale-95",
        outline: "border-2 border-primary text-primary hover:bg-primary/10 hover:shadow-glow-medium hover:scale-105 active:scale-95",
        ghost: "text-primary hover:bg-primary/10 hover:text-primary-glow hover:shadow-glow-small hover:scale-105 active:scale-95",
        claim: "bg-gradient-neon text-primary-foreground shadow-glow-intense font-bold text-lg hover:shadow-glow-large hover:bg-primary-glow/20 hover:scale-110 active:scale-95 animate-glow-pulse",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-full px-3",
        lg: "h-14 rounded-full px-8 text-base",
        xl: "h-16 rounded-full px-12 text-lg font-bold",
        claim: "h-16 rounded-full px-8 py-4 text-xl font-bold min-w-[280px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface NeonButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof neonButtonVariants> {
  asChild?: boolean;
}

const NeonButton = React.forwardRef<HTMLButtonElement, NeonButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(neonButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
NeonButton.displayName = "NeonButton";

export { NeonButton, neonButtonVariants };