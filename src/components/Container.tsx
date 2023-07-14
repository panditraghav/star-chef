import { cn } from '@/utils/cn'
import React from 'react'

const Container = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
    const { className, children, ...etc } = props
    return (
        <div className={cn('mx-auto w-[85%]', className)} {...etc} ref={ref}>
            {children}
        </div>
    )
})

export default Container
