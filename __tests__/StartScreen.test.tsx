import React from 'react'
import { render, fireEvent, RenderAPI } from '../src/utils/utils-test'

import StartWatchScreen from '@screens/StartWatchScreen'

let screen: RenderAPI
const navigation = {} as any
const route = {} as any

describe(`StartWatch Screen`, () => {
  beforeEach(() => {
    screen = render(<StartWatchScreen route={route} navigation={navigation} />)
  })

  it(`StartWatch screen is properly rendered`, () => {
    expect(screen).toBeTruthy()
  })

  it(`StartWatch should not display any time when opened for first time`, () => {
    const newTimeButton = screen.getByText('New Time')

    expect(newTimeButton).toBeTruthy()
  })

  it(`When user click on 'New Time' button opens a modal`, async () => {
    const newTimeButton = screen.getByText('New Time')
    fireEvent(newTimeButton, 'press')

    const whiteNameLabel = screen.getByText('White Names', { exact: false })
    const blacksNameLabel = screen.getByText('Blacks Names:', { exact: false })

    expect(whiteNameLabel).toBeTruthy()
    expect(blacksNameLabel).toBeTruthy()
  })
})