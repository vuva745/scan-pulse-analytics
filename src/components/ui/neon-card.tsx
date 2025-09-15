import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const neonCardVariants = cva(
  "rounded-2xl border transition-all duration-300",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground border-border/20 backdrop-blur-sm",
        elevated: "bg-card-elevated text-card-foreground border-primary/20 shadow-glow-small",
        glow: "bg-card-elevated text-card-foreground border-primary/40 shadow-glow-medium hover:shadow-glow-large",
        contest: "bg-gradient-card text-card-foreground border-primary/60 shadow-glow-large backdrop-blur-md",
      },
      size: {
        default: "p-6",
        sm: "p-4",
        lg: "p-8",
        xl: "p-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface NeonCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof neonCardVariants> {}

const NeonCard = React.forwardRef<HTMLDivElement, NeonCardProps>(
  ({ className, variant, size, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(neonCardVariants({ variant, size, className }))}
      {...props}
    />
  )
);
NeonCard.displayName = "NeonCard";

const NeonCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 pb-6", className)}
    {...props}
  />
));
NeonCardHeader.displayName = "NeonCardHeader";

const NeonCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-2xl font-bold leading-none tracking-tight text-primary animate-neon-flicker", className)}
    {...props}
  />
));
NeonCardTitle.displayName = "NeonCardTitle";

const NeonCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
NeonCardDescription.displayName = "NeonCardDescription";

const NeonCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("", className)} {...props} />
));
NeonCardContent.displayName = "NeonCardContent";

const NeonCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center pt-6", className)}
    {...props}
  />
));
NeonCardFooter.displayName = "NeonCardFooter";

export { NeonCard, NeonCardHeader, NeonCardFooter, NeonCardTitle, NeonCardDescription, NeonCardContent };