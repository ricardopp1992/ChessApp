export interface ClockHardwareProps {
  isLandscape: boolean
  goBackToHome: () => void
}

export interface GameOverModalProps {
  isLandscape: boolean
  goToHome: Function
  isWhiteTurn: boolean
  closeModal: Function
}