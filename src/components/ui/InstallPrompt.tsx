import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Share, X } from 'lucide-react'
import Button from './Button'

// Chrome/Edge/Samsung Internet fire this when the site can be installed.
interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

const DISMISSED_KEY = 'install-prompt-dismissed'

const isStandalone = () =>
  window.matchMedia('(display-mode: standalone)').matches ||
  (navigator as Navigator & { standalone?: boolean }).standalone === true

// iOS never fires beforeinstallprompt; installing is a manual Share-menu step.
const isIos = () =>
  /iphone|ipad|ipod/i.test(navigator.userAgent) ||
  (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)

const wasDismissed = () => {
  try {
    return localStorage.getItem(DISMISSED_KEY) === '1'
  } catch {
    return false
  }
}

/**
 * Small "Install the app" card pinned to the bottom of the screen.
 * Shows a one-tap Install button where the browser supports it, and
 * Add-to-Home-Screen instructions on iPhone and iPad.
 */
export default function InstallPrompt() {
  const [installEvent, setInstallEvent] = useState<BeforeInstallPromptEvent | null>(null)
  const [showIosHint, setShowIosHint] = useState(false)

  useEffect(() => {
    if (isStandalone() || wasDismissed()) return

    const onBeforeInstall = (event: Event) => {
      event.preventDefault() // keep the browser's own mini-bar from showing
      setInstallEvent(event as BeforeInstallPromptEvent)
    }
    const onInstalled = () => {
      setInstallEvent(null)
      setShowIosHint(false)
    }
    window.addEventListener('beforeinstallprompt', onBeforeInstall)
    window.addEventListener('appinstalled', onInstalled)

    // Let the page settle before nudging iOS visitors.
    const timer = isIos() ? window.setTimeout(() => setShowIosHint(true), 3000) : undefined

    return () => {
      window.removeEventListener('beforeinstallprompt', onBeforeInstall)
      window.removeEventListener('appinstalled', onInstalled)
      window.clearTimeout(timer)
    }
  }, [])

  const dismiss = () => {
    try {
      localStorage.setItem(DISMISSED_KEY, '1')
    } catch {
      // Private mode: it will simply show again next visit.
    }
    setInstallEvent(null)
    setShowIosHint(false)
  }

  const install = async () => {
    if (!installEvent) return
    await installEvent.prompt()
    const { outcome } = await installEvent.userChoice
    // The event can only be used once either way.
    if (outcome === 'dismissed') dismiss()
    else setInstallEvent(null)
  }

  const visible = installEvent !== null || showIosHint

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-label="Install the Antony Peter app"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed inset-x-4 z-40 sm:inset-x-auto sm:right-6 sm:w-[22rem]"
          style={{ bottom: 'calc(1rem + env(safe-area-inset-bottom))' }}
        >
          <div className="flex items-center gap-3 rounded-xl border border-accentBorder bg-surface/95 p-3 pr-2 shadow-2xl shadow-black/60 backdrop-blur-xl">
            <img
              src="/icon-192.png"
              width={44}
              height={44}
              alt=""
              className="h-11 w-11 flex-shrink-0 rounded-[10px] border border-white/10"
            />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-white">Install the app</p>
              {installEvent ? (
                <p className="text-xs text-muted">Add my portfolio to your home screen.</p>
              ) : (
                <p className="text-xs text-muted">
                  Tap <Share className="inline h-3.5 w-3.5 -translate-y-px text-accent" aria-label="Share" /> then
                  “Add to Home Screen”.
                </p>
              )}
            </div>
            {installEvent && (
              <Button size="sm" onClick={install} className="flex-shrink-0">
                Install
              </Button>
            )}
            <button
              type="button"
              onClick={dismiss}
              aria-label="Dismiss install prompt"
              className="flex-shrink-0 rounded-md p-2 text-muted transition-colors hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
