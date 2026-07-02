export interface TechItem {
  name: string
  level: 'expert' | 'proficient' | 'familiar'
}

export interface TechCategory {
  id: string
  label: string
  items: TechItem[]
}

export const techStack: TechCategory[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    items: [
      { name: 'React', level: 'expert' },
      { name: 'TypeScript', level: 'expert' },
      { name: 'Next.js', level: 'expert' },
      { name: 'Tailwind CSS', level: 'expert' },
      { name: 'Framer Motion', level: 'proficient' },
      { name: 'Vite', level: 'expert' },
      { name: 'Redux / Zustand', level: 'proficient' },
      { name: 'React Query', level: 'proficient' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    items: [
      { name: 'Node.js', level: 'expert' },
      { name: 'Python', level: 'proficient' },
      { name: 'Express.js', level: 'expert' },
      { name: 'FastAPI', level: 'proficient' },
      { name: 'REST APIs', level: 'expert' },
      { name: 'WebSockets', level: 'proficient' },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    items: [
      { name: 'PostgreSQL', level: 'expert' },
      { name: 'Supabase', level: 'expert' },
      { name: 'Prisma ORM', level: 'expert' },
      { name: 'SQLite', level: 'proficient' },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud & Infra',
    items: [
      { name: 'Vercel', level: 'expert' },
      { name: 'AWS (EC2, S3, RDS)', level: 'proficient' },
      { name: 'Cloudflare', level: 'proficient' },
      { name: 'Render', level: 'proficient' },
      { name: 'Linux / VPS', level: 'proficient' },
    ],
  },
  {
    id: 'ai',
    label: 'AI & ML',
    items: [
      { name: 'OpenAI API', level: 'expert' },
      { name: 'Anthropic Claude', level: 'expert' },
      { name: 'LangChain', level: 'proficient' },
      { name: 'RAG Systems', level: 'proficient' },
      { name: 'Hugging Face', level: 'familiar' },
      { name: 'Vector DBs', level: 'proficient' },
    ],
  },
  {
    id: 'devops',
    label: 'DevOps',
    items: [
      { name: 'Docker', level: 'proficient' },
      { name: 'GitHub Actions', level: 'expert' },
      { name: 'Git', level: 'expert' },
      { name: 'CI/CD Pipelines', level: 'proficient' },
      { name: 'PM2', level: 'familiar' },
    ],
  },
]
