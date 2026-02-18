import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
    {
        variants: {
            variant: {
                default:
                    "bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-wide border border-transparent hover:border-primary shadow-sm hover:shadow-md",
                destructive:
                    "bg-destructive text-destructive-foreground hover:bg-destructive/90 uppercase",
                outline:
                    "border border-input bg-background hover:bg-accent hover:text-accent-foreground uppercase tracking-wide",
                secondary:
                    "bg-secondary text-secondary-foreground hover:bg-secondary/80 uppercase",
                ghost: "hover:bg-accent hover:text-accent-foreground uppercase",
                link: "text-primary underline-offset-4 hover:underline",
                whatsapp: "bg-[#25D366] text-white hover:bg-[#128C7E] uppercase font-bold tracking-wide shadow-sm hover:shadow-md",
            },
            size: {
                default: "h-11 px-8 py-2",
                sm: "h-9 px-4",
                lg: "h-14 px-10 text-base",
                icon: "h-10 w-10",
            },
            shape: {
                default: "rounded-md", // Professional/Sharp
                full: "rounded-full",
                square: "rounded-none",
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default",
            shape: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, shape, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, shape, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
