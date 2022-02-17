import React, { FC } from 'react'
import { Provider } from 'react-redux'
import { renderHook, act } from '@testing-library/react-hooks'

import useClock from '@components/ClockHardware/useClock'
import store from '@store/store'

const wrapper: FC = ({ children }) => <Provider store={store} >{ children }</Provider>

describe(`useClock`, () => {
  it(`set isPaused as false when renders at first`, () => {
    const { result } = renderHook(() => useClock(), { wrapper })

    expect(result.current.isPaused).toBe(false)
  })

  it(`should return isWhiteTurn to true when renders for first time`, () => {
    const { result } = renderHook(() => useClock(), { wrapper })

    expect(result.current.isWhiteTurn).toBe(true)
  })

  it(`should return false when toggle`, async () => {
    const { result } = renderHook(
      () => useClock(), { wrapper }
    )

    act(() => { result.current.toggleTurn() })

    expect(result.current.isWhiteTurn).toBe(false)
  })
})