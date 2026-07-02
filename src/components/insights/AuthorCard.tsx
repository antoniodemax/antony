import { FaLinkedinIn, FaTwitter, FaGithub } from 'react-icons/fa'

export default function AuthorCard() {
  return (
    <aside className="mt-12 rounded-3xl border border-white/10 bg-card p-6">
      <div className="flex items-center gap-4">
        <img src="/antony.jpg" alt="Antony Peter" className="h-16 w-16 rounded-full object-cover" />
        <div>
          <p className="text-base font-semibold text-white">Antony Peter</p>
          <p className="text-sm text-muted">Senior Full-Stack Software Engineer</p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-7 text-muted">I write about building products, architecture, AI systems and developer-led growth. My writing is focused on practical decisions, engineering strategy and real-world delivery at scale.</p>
      <div className="mt-4 flex items-center gap-3">
        <a
          href="https://www.linkedin.com/in/antony-peter-96318a338"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:border-accent hover:bg-white/10"
        >
          <FaLinkedinIn size={16} />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="X"
          className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:border-accent hover:bg-white/10"
        >
          <FaTwitter size={16} />
        </a>
        <a
          href="https://github.com/antoniodemax"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:border-accent hover:bg-white/10"
        >
          <FaGithub size={16} />
        </a>
      </div>
    </aside>
  )
}
