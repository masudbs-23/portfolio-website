'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface SocialIconProps {
  icon: LucideIcon
  href: string
  label: string
}

export default function SocialIcon({ icon: Icon, href, label }: SocialIconProps) {
  if (!Icon) {
    return null
  }

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-muted-foreground hover:text-accent transition-colors duration-300"
      whileHover={{ scale: 1.15, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
    >
      <Icon size={24} strokeWidth={1.5} />
    </motion.a>
  )
}
