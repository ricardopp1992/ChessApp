import { INewWatch } from '@interfaces/components/StartWatch.interface'

export const newTimeValidator = (values: INewWatch) => {
  let errors: { hours?: string, minutes?: string, seconds?: string } = {}

  if (values.hours > 24) {
    errors.hours = 'Hours must not be greater than 24'
  }
  if (values.minutes > 60) {
    errors.minutes = 'Minutes must not be greater than 60'
  }
  if (values.seconds > 60) {
    errors.seconds = 'Seconds must not be greater than 60'
  }

  return errors
}