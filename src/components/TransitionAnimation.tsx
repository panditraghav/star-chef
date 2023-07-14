import { cn } from '@/utils/cn'
import { HTMLMotionProps, motion } from 'framer-motion'
import React from 'react'

const TransitionAnimation = React.forwardRef<
    HTMLDivElement,
    HTMLMotionProps<'div'>
>(({ className, children, ...props }, ref) => (
    <motion.div
        ref={ref}
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 30, opacity: 0 }}
        className={cn('', className)}
        {...props}
    >
        {children}
    </motion.div>
))
TransitionAnimation.displayName = 'TransitionAnimation'
export default TransitionAnimation
