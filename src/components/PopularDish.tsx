import { cn } from '@/utils/cn'
import { PopularDishType } from '@/utils/types'
import { VariantProps, cva } from 'class-variance-authority'
import React from 'react'

const popularDishVariants = cva(
    'h-14 w-14 overflow-hidden rounded-full relative after:absolute after:left-0 after:top-0 after:block after:h-full after:w-full  after:rounded-full after:bg-foreground/60',
    {
        variants: {
            variant: {
                default: '',
                ring: 'ring-1 ring-primary-foreground ring-offset-2',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    }
)

const PopularDish = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & {
        dish: PopularDishType
    } & VariantProps<typeof popularDishVariants> & {
            imgClassName?: string
            spanClassName?: string
        }
>((props, ref) => {
    const { className, imgClassName, spanClassName, dish, variant, ...etc } =
        props
    return (
        <div
            className={cn(popularDishVariants({ variant, className }))}
            ref={ref}
            {...etc}
        >
            <img
                src={dish.image}
                alt={dish.name}
                className={cn(imgClassName)}
            />
            <span
                className={cn(
                    'absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center rounded-full text-center text-xs text-background',
                    spanClassName
                )}
            >
                {dish.name}
            </span>
        </div>
    )
})
export default PopularDish
