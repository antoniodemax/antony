import { useRef, useState, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface CollapsibleCardProps {
  /** Used for the panel and label ids, so it must be unique on the page. */
  id: string
  label: string
  /** Short line under the label that stays visible while the card is closed. */
  summary?: ReactNode
  children: ReactNode
}

/**
 * Glass card with a dropdown arrow. It starts closed and opens itself once,
 * the first time it is scrolled well into view, so the content is not missed
 * on the way down the page. After that the visitor is in control.
 */
export default function CollapsibleCard({ id, label, summary, children }: CollapsibleCardProps) {
  const [open, setOpen] = useState(false)
  // The viewport callback fires on every re-entry, so remember that the one
  // automatic open has happened and leave the card alone afterwards.
  const autoOpened = useRef(false)
  const panelId = `${id}-panel`
  const labelId = `${id}-label`

  return (
    <motion.div
      className="rounded-3xl glass-surface transition-shadow duration-300"
      style={{
        borderColor: 'rgba(143,203,155,0.30)',
        boxShadow: open
          ? '0 24px 80px rgba(0,0,0,0.22), 0 0 48px rgba(143,203,155,0.14)'
          : '0 24px 80px rgba(0,0,0,0.22), 0 0 28px rgba(143,203,155,0.08)',
      }}
      // Entered when the card's top edge is about a third of the way up the screen.
      viewport={{ margin: '0px 0px -30% 0px' }}
      onViewportEnter={() => {
        if (autoOpened.current) return
        autoOpened.current = true
        setOpen(true)
      }}
    >
      <h3>
        <button
          type="button"
          onClick={() => {
            // A manual toggle also counts, so a card closed by hand stays closed.
            autoOpened.current = true
            setOpen(current => !current)
          }}
          aria-expanded={open}
          aria-controls={panelId}
          className="group flex w-full items-center gap-4 rounded-3xl px-5 py-5 text-left outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent/70 sm:px-7"
        >
          <span className="min-w-0 flex-1">
            <span
              id={labelId}
              className="block text-sm font-semibold uppercase tracking-[0.3em] text-accent"
            >
              {label}
            </span>
            {summary && (
              <span className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-normal text-muted">
                {summary}
              </span>
            )}
          </span>
          <span className="hidden text-[10px] font-semibold uppercase tracking-[0.18em] text-accent/80 sm:block">
            {open ? 'Hide' : 'View'}
          </span>
          <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center border border-accentBorder text-accent transition-colors duration-200 group-hover:border-accentBorderHover group-hover:bg-accent/10">
            <ChevronDown
              size={18}
              className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
            />
          </span>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={labelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
