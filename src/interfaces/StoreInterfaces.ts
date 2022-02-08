export type SetTimeAction = {
  payload: ITime,
  type: string
}

export interface ITime {
  hours: number,
  minutes: number,
  seconds: number,
}

export interface TimeState {
  whitesName: string
  blacksName: string
  whitesTime: ITime
  blacksTime: ITime
}