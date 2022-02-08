export const parseTime = (digits: number) => {
  if (`${digits}`.length === 1) return `0${digits}`
  return digits
}