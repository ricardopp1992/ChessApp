import { GestureResponderEvent } from 'react-native'

export interface PreviousTimesProps {
  handleOpenModal: (event: GestureResponderEvent) => void
}

export interface NewTimeModalProps {
  onHandleSubmit: (values: INewWatch) => void | Promise<void>
}

export interface INewWatch {
  whiteName: string,
  blackName: string,
  minutes: string,
  seconds: string,
}