import RefrigeratorIcon from '@/assets/icons/Refrigerator'
import StarIcon from '@/assets/icons/Star'
import VegIcon from '@/assets/icons/Veg'
import { Button } from '@/components/ui/Button'
import { cn } from '@/utils/cn'
import { Dish } from '@/utils/types'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Root = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
    const { className, children, ...etc } = props
    return (
        <div
            ref={ref}
            {...etc}
            className={cn('flex justify-between', className)}
        >
            {children}
        </div>
    )
})

export const Name = React.forwardRef<
    HTMLHeadingElement,
    React.HTMLAttributes<HTMLHeadingElement>
>((props, ref) => {
    const { className, children, ...etc } = props
    return (
        <h2
            ref={ref}
            {...etc}
            className={cn('text-[12px] font-semibold', className)}
        >
            {children}
        </h2>
    )
})

export const Rating = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
    const { className, children, ...etc } = props
    return (
        <div
            className={cn(
                'inline-flex items-center justify-center rounded bg-rating px-1 py-0.5 font-semibold text-rating-foreground',
                className
            )}
            ref={ref}
            {...etc}
        >
            <span className="text-[6px]">{children}</span>
            <StarIcon className="ml-0.5" />
        </div>
    )
})

export const Equipment = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & {
        name: string
        icon?: React.ReactNode
        nameClassName?: string
    }
>((props, ref) => {
    const { className, name, nameClassName, icon, ...etc } = props
    return (
        <div
            className={cn('flex flex-col items-center', className)}
            ref={ref}
            {...etc}
        >
            {icon || <RefrigeratorIcon />}
            <div className={cn('text-[4px]', nameClassName)}>{name}</div>
        </div>
    )
})

export const DishCard = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof Root> & { dish: Dish }
>((props, ref) => {
    const navigate = useNavigate()
    const { dish, ...etc } = props
    return (
        <Root ref={ref} {...etc}>
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <Name>{dish.name}</Name>
                    <VegIcon />
                    <Rating>{dish.rating}</Rating>
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                        {dish.equipments.map((equipment) => {
                            return (
                                <Equipment name={equipment} key={equipment} />
                            )
                        })}
                    </div>
                    <div className="h-4 w-[0.5px] bg-muted-foreground"></div>
                    <div className="flex flex-col">
                        <div className="text-[6px] font-bold">Ingredients</div>
                        <Button
                            variant="link"
                            className="px-0 py-0 text-[5px]"
                            onClick={() => navigate(`/ingredients/${dish.id}`)}
                        >
                            View list
                        </Button>
                    </div>
                </div>
                <p className="text-[8px] text-muted-foreground">
                    {dish.description}
                </p>
            </div>
            <div className="relative">
                <img
                    src={dish.image}
                    alt={dish.name}
                    className="h-[68px] w-[92px] rounded-md object-cover"
                />
                <Button
                    variant="default"
                    icon="add"
                    className="absolute -bottom-3 left-1/2 -translate-x-1/2"
                >
                    Add
                </Button>
            </div>
        </Root>
    )
})
