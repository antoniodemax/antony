import { useState } from 'react'
import { Copy } from 'lucide-react'
import { FaLinkedinIn, FaTwitter, FaWhatsapp } from 'react-icons/fa'

interface Props {
  url: string
  title: string
}

const shareUrls = {
  linkedin: (url: string, title: string) =>
    `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
  x: (url: string, title: string) =>
    `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
  whatsapp: (url: string, title: string) =>
    `https://api.whatsapp.com/send?text=${encodeURIComponent(`${title} ${url}`)}`,
}

export default function ShareActions({ url, title }: Props) {
  const [copied, setCopied] = useState(false)

  const copyLink = async () => {
    if (typeof navigator === 'undefined') return
    await navigator.clipboard.writeText(url)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      <a
        href={shareUrls.linkedin(url, title)}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition hover:border-accent hover:bg-white/10"
      >
        <FaLinkedinIn size={16} />
        <span>LinkedIn</span>
      </a>
      <a
        href={shareUrls.x(url, title)}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition hover:border-accent hover:bg-white/10"
      >
        <FaTwitter size={16} />
        <span>X</span>
      </a>
      <a
        href={shareUrls.whatsapp(url, title)}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition hover:border-accent hover:bg-white/10"
      >
        <FaWhatsapp size={16} />
        <span>WhatsApp</span>
      </a>
      <button
        type="button"
        onClick={copyLink}
        className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition hover:border-accent hover:bg-white/10"
      >
        <Copy size={16} />
        <span>{copied ? 'Copied' : 'Copy link'}</span>
      </button>
    </div>
  )
}
