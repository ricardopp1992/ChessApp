import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ITime, TimeState } from '@interfaces/StoreInterfaces'
import { RootChessAppState } from '@store/store'
import { endGame, setBlacksTime, setWhitesTime } from '@store/timeSlice'

const useClock = () => {
  const { whitesTime, blacksTime } = useSelector<RootChessAppState, TimeState>(
    (state) => state.time
  )
  const [isWhiteTurn, setIsWhiteTurn] = useState(true)
  const [isPaused, setIsPaused] = useState(false)
  const timerId = useRef<NodeJS.Timer>(setInterval(() => {}, 0))
  const dispatch = useDispatch()

  const toggleTurn = () => !isPaused && setIsWhiteTurn(prev => !prev)

  const pauseTime = () => {
    clearInterval(timerId.current)
    setIsPaused(true)
  }

  const resumeTime = () => {
    setIsPaused(false)
  }

  const subtractTime = (setTime: ActionCreatorWithPayload<any, string>, time: ITime) => {
    let newTime
    const reset = 59
    const { hours, minutes, seconds } = time

    if (seconds === 0 && minutes === 0) {
      newTime = { hours: hours - 1, minutes: reset, seconds: reset }
    } else if (seconds === 0) {
      newTime = { ...time, minutes: minutes - 1, seconds: reset }
    } else {
      newTime = {...time, seconds: seconds - 1}
    }

    const isGameOver = newTime && Object.values(newTime).every(time => time === 0)
    if (isGameOver) {
      pauseTime()
      dispatch(endGame(true))
    } else {
      dispatch(setTime(newTime))
    }
  }

  useEffect(() => {
    const intervalTimeId = setInterval(() => {
      if (!isPaused && isWhiteTurn) subtractTime(setWhitesTime, whitesTime)
      if (!isPaused && !isWhiteTurn) subtractTime(setBlacksTime, blacksTime)
    }, 1000)
    timerId.current = intervalTimeId

    return () => clearInterval(intervalTimeId)
  }, [isWhiteTurn, whitesTime, blacksTime, isPaused])

  return {
    whitesTime,
    blacksTime,
    isWhiteTurn,
    toggleTurn,
    isPaused,
    pauseTime,
    resumeTime,
  }
}

export default useClock