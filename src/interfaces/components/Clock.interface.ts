export interface ClockHardwareProps {
  goBackToHome: () => void
}

export interface GameOverModalProps {
  goToHome: Function
  isWhiteTurn: boolean,
  closeModal: Function,
}