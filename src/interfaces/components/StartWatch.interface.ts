export interface PreviousTimesProps {
  isLandscape: boolean,
  handleOpenModal: (newTime: INewWatch | void) => void
}

export interface NewTimeModalProps {
  time: INewWatch | undefined
  closeModal: Function
  onHandleSubmit: (values: INewWatch) => void | Promise<void>
}

export interface INewWatch {
  whiteName: string,
  blackName: string,
  hours: number,
  minutes: number,
  seconds: number,
}