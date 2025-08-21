import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-dark shadow-button hover:shadow-card animate-smooth",
        primary: "bg-gradient-primary text-white hover:scale-105 shadow-button hover:shadow-card animate-smooth",
        accent: "bg-accent text-accent-foreground hover:bg-accent-light shadow-button hover:shadow-card animate-smooth",
        success: "bg-success text-success-foreground hover:bg-success/90 shadow-button hover:shadow-card animate-smooth",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-button animate-smooth",
        outline: "border border-input bg-background hover:bg-gradient-hero hover:text-primary animate-smooth",
        secondary: "bg-secondary text-secondary-foreground hover:bg-muted shadow-sm animate-smooth",
        ghost: "hover:bg-gradient-hero hover:text-primary animate-smooth",
        link: "text-primary underline-offset-4 hover:underline",
        glass: "glass hover:bg-white/90 text-foreground shadow-card hover:shadow-card-hover animate-smooth",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-12 rounded-lg px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
