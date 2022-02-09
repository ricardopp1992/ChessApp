import { INewWatch } from "./components/StartWatch.interface";

export type SetTimeAction = {
  payload: ITime,
  type: string
}

export interface ITime {
  hours: number,
  minutes: number,
  seconds: number,
}

export interface ITimeLabel extends ITime {
  label: string
}

export interface TimeState {
  whitesName: string
  blacksName: string
  whitesTime: ITime
  blacksTime: ITime
  hasGameEnd: boolean
  initialTime: ITime
  lastTimes: INewWatch[]
}