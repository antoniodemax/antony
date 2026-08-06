interface BadgeProps {
  children: string
  variant?: 'default' | 'accent' | 'muted'
}

export default function Badge({ children, variant = 'default' }: BadgeProps) {
  const variants = {
    default: 'bg-white/5 text-white border border-white/10',
    accent: 'bg-accent/10 text-accent border border-accent/20',
    muted: 'bg-white/5/20 text-muted border border-white/10',
  }

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-2 text-xs font-medium tracking-[0.02em] transition-colors duration-200 ${variants[variant]}`}
    >
      {children}
    </span>
  )
}
