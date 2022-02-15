import React from 'react'

import ClockScreen from '@screens/ClockScreen'
import { render, fireEvent, RenderAPI, act } from '../src/utils/utils-test'
import { ITime } from '@interfaces/StoreInterfaces'
import * as useClock from '@components/ClockHardware/useClock'

let screen: RenderAPI
const time: ITime = { hours: 15, minutes: 5, seconds: 14 }
const mockReturn = {
  whitesTime: time,
  blacksTime: time,
  isWhiteTurn: true,
  toggleTurn: jest.fn(),
  isPaused: true,
  pauseTime: jest.fn(),
  resumeTime: jest.fn(),
}
const route = {} as any
const navigation = {} as any

describe(`ClockScreen`, () => {
  beforeEach(() => {
    screen = render(<ClockScreen route={route} navigation={navigation} />)
  })

  it(`ClockScreen is rendered`, () => {
    expect(screen)
  })

  it(`should appear two buttons to toggle turn`, async () => {
    const whiteButton = screen.getByText('Whites')
    const blackButton = screen.getByText('Black')

    expect(whiteButton).toBeTruthy()
    expect(blackButton).toBeTruthy()
  })

  it(`should has a pause and finish button`, () => {
    const pauseButton = screen.getByText('Pause', { exact: false })
    expect(pauseButton).toBeTruthy()
  })

  it(`has a pause button which change to 'Resume' when is clicked`, () => {
    const pauseButton = screen.getByText('Pause', { exact: false })
    fireEvent(pauseButton, 'press')

    const notPauseButton = screen.queryByText('Pause', { exact: false })
    const resumeButton = screen.findByText('Resume', { exact: false })

    expect(notPauseButton).toBeNull()
    expect(resumeButton).toBeTruthy()
  })
  
  it(`resume is immediately displayed when is paused the game`, async () => {
    const useClockMock = jest.spyOn(useClock, 'default')
    useClockMock.mockReturnValue(mockReturn)
    screen = render(<ClockScreen route={route} navigation={navigation} />)

    const resumeButton = screen.queryByText('Resume', { exact: false })
    expect(resumeButton).toBeTruthy()
  })

  it(`The time should be reflected on the screen twice`, () => {
    const useClockMock = jest.spyOn(useClock, 'default')
    useClockMock.mockReturnValue(mockReturn)
    const times = screen.queryAllByText('15 : 05 : 14')

    expect(times.length).toBe(2)
  })
})