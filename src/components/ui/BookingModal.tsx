import { PopupModal } from 'react-calendly'

interface Props {
  open: boolean
  onClose: () => void
}

export default function BookingModal({ open, onClose }: Props) {
  if (!open) return null

  return (
    <PopupModal
      url="https://calendly.com/antonypeter-dev/project-consultation"
      onModalClose={onClose}
      open={open}
      rootElement={document.getElementById('root') as HTMLElement}
      pageSettings={{
        backgroundColor: '050505',
        textColor: 'ffffff',
        primaryColor: 'd4af37',
        hideLandingPageDetails: false,
        hideEventTypeDetails: false,
      }}
    />
  )
}
