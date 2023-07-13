import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/utils/cn'

const tagVariants = cva(
    'inline-flex items-center justify-center rounded-2xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
    {
        variants: {
            variant: {
                selected:
                    'bg-tag text-tag-foreground border border-border font-bold',
                muted: 'bg-background text-muted-foreground border border-border-muted',
            },
            size: {
                default: 'px-6 py-1',
            },
        },
        defaultVariants: {
            variant: 'selected',
            size: 'default',
        },
    }
)

export interface TagProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof tagVariants> {
    asChild?: boolean
}

const Tag = React.forwardRef<HTMLButtonElement, TagProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button'
        return (
            <Comp
                className={cn(tagVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Tag.displayName = 'Button'

export { Tag, tagVariants }
