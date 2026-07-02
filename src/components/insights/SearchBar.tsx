import { useState } from 'react'

export default function SearchBar({ query, onChange }: { query: string; onChange: (q: string) => void }) {
  const [value, setValue] = useState(query)

  return (
    <div className="w-full max-w-md">
      <input
        value={value}
        onChange={e => { setValue(e.target.value); onChange(e.target.value) }}
        placeholder="Search articles, tags, categories..."
        className="w-full px-4 py-3 rounded-lg bg-surface border border-white/8 text-white placeholder-muted/60"
      />
    </div>
  )
}
