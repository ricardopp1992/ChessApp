import { INewWatch } from '@interfaces/components/StartWatch.interface'

export const parseTime = (digits: number) => {
  if (`${digits}`.length === 1) return `0${digits}`
  return digits
}

export const getTimeLabel = (time: INewWatch): INewWatch => {
  const timeKeys: any = { hours: 'hr', minutes: 'min', seconds: 'sec' }
  const parsedHours = time.hours || 0
  const parsedMinutes = time.minutes || 0
  const parsedSeconds = time.seconds || 0

  const label = Object.entries(time)
    .map(([key, value]) => value ? `${value}${timeKeys[key]}` : '')
    .join(' ')

  return {
    ...time,
    hours: parsedHours,
    minutes: parsedMinutes,
    seconds: parsedSeconds,
  }
}