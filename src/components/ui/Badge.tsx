interface BadgeProps {
  children: string
  variant?: 'default' | 'accent' | 'muted'
}

export default function Badge({ children, variant = 'default' }: BadgeProps) {
  const variants = {
    default: 'bg-white/5 text-muted border border-white/8',
    accent: 'bg-accent/10 text-accent border border-accent/20',
    muted: 'bg-surface text-muted border border-border',
  }

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium tracking-wide ${variants[variant]}`}
    >
      {children}
    </span>
  )
}
