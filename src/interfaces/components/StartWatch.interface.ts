import { GestureResponderEvent } from 'react-native'

export interface PreviousTimesProps {
  handleOpenModal: (event: GestureResponderEvent) => void
}

export interface NewTimeModalProps {
  closeModal: Function
}