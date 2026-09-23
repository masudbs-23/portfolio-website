'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'outline' | 'accent'
  className?: string
}

export default function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const variants = {
    default: 'bg-muted text-foreground',
    outline: 'border border-border text-foreground',
    accent: 'bg-accent/10 text-accent border border-accent/20',
  }

  return (
    <motion.span
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      role="presentation"
    >
      {children}
    </motion.span>
  )
}
