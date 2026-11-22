import { projects } from './projects'

interface AwardEntry {
  projectId: string
  host: string
  position: string
}

export interface Award {
  id: string
  project: string
  host: string
  position: string
  certificateUrl?: string
}

// Best result first. The project name and certificate come from projects.ts.
const entries: AwardEntry[] = [
  { projectId: 'elimu-mtaani', host: 'Claude Hackathon', position: '1st Place' },
  { projectId: 'venture-route', host: 'SingularityNET × Omega × BASIX', position: '4th Overall · 2nd, MeTTa Track' },
  { projectId: 'kada-ya-moko', host: 'Claude Hackathon, Nairobi', position: '4th Overall · 2nd, Everyday Track' },
  { projectId: 'smart-fundis', host: 'GOMYCODE × NVIDIA', position: 'Participant' },
]

export const awards: Award[] = entries.flatMap(({ projectId, host, position }) => {
  const project = projects.find(p => p.id === projectId)
  if (!project) return []
  return [{ id: projectId, project: project.title, host, position, certificateUrl: project.certificateUrl }]
})
