import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/utils/cn'

const buttonVariants = cva(
    'inline-flex items-center justify-center rounded-md text-[11px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
    {
        variants: {
            variant: {
                default:
                    'bg-primary text-primary-foreground border border-border hover:bg-primary/90 font-semibold shadow-button',
                secondary:
                    'bg-secondary text-secondary-foreground hover:bg-secondary/80 font-bold shadow-button',
                link: 'text-primary-foreground',
            },
            size: {
                default: 'px-5 py-1',
            },
            icon: {
                none: '',
                add: "relative after:absolute after:-top-[.5px] after:right-1 after:content-['+']",
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
            icon: 'none',
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, icon, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button'
        return (
            <Comp
                className={cn(
                    buttonVariants({ variant, size, icon, className })
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
