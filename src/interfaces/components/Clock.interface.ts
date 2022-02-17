export interface ClockHardwareProps {
  isLandscape: boolean
  goBackToHome: () => void
}

export interface GameOverModalProps {
  goToHome: Function
  isWhiteTurn: boolean,
  closeModal: Function,
}