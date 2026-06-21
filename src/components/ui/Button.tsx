import { type ReactNode, type ButtonHTMLAttributes } from 'react'
import { motion } from 'framer-motion'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  as?: 'button' | 'a'
  href?: string
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  as: Tag = 'button',
  href,
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 font-medium tracking-tight transition-all duration-200 rounded-full whitespace-nowrap cursor-pointer select-none'

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }

  const variants = {
    primary:
      'bg-accent text-black hover:bg-accent-light active:bg-accent-dark shadow-gold hover:shadow-glow',
    secondary:
      'border border-white/10 text-white hover:border-white/25 hover:bg-white/5 bg-transparent',
    ghost: 'text-muted hover:text-white hover:bg-white/5',
  }

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`

  if (Tag === 'a') {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...(props as object)}
    >
      {children}
    </motion.button>
  )
}
