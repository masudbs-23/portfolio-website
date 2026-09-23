'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  className?: string
  target?: string
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  href, 
  onClick,
  className = '',
  target = '_blank'
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background rounded-lg'
  
  const variants = {
    primary: 'bg-accent text-white hover:bg-accent/90 focus:ring-accent shadow-sm hover:shadow-md',
    secondary: 'bg-card text-foreground border border-border hover:border-accent/50 hover:bg-card/80 focus:ring-accent shadow-sm',
    outline: 'text-foreground border border-border hover:border-accent hover:text-accent hover:bg-accent/5 focus:ring-accent',
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const MotionComponent = href ? motion.a : motion.button

  return (
    <MotionComponent
      href={href}
      onClick={onClick}
      target={href ? target : undefined}
      rel={href ? 'noopener noreferrer' : undefined}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
    >
      {children}
    </MotionComponent>
  )
}
