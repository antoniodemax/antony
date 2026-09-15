import { type ReactNode, type ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  as?: 'button' | 'a'
  href?: string
  target?: string
  rel?: string
}

/**
 * Cut-corner button. Visual styles live in src/index.css under `.btn`
 * so the clip-path, outline, hover and focus states stay in one place.
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  as: Tag = 'button',
  href,
  type,
  ...props
}: ButtonProps) {
  // Literal class names so Tailwind's content scanner keeps the @layer rules.
  const variantClass = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    ghost: 'btn-ghost',
  }[variant]
  const sizeClass = { sm: 'btn-sm', md: 'btn-md', lg: 'btn-lg' }[size]
  const classes = `btn ${variantClass} ${sizeClass} ${className}`.trim()

  if (Tag === 'a') {
    return (
      <a href={href} className={classes} {...(props as object)}>
        {children}
      </a>
    )
  }

  return (
    <button type={type ?? 'button'} className={classes} {...props}>
      {children}
    </button>
  )
}
