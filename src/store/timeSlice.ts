import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit'

import { SetTimeAction, TimeState } from '@interfaces/StoreInterfaces'

const initialState: TimeState = {
  whitesName: '',
  blacksName: '',
  whitesTime: {
    hours: 0,
    minutes: 0,
    seconds: 0
  },
  blacksTime: {
    hours: 0,
    minutes: 0,
    seconds: 0
  },
  initialTime: {
    hours: 0,
    minutes: 0,
    seconds: 0
  },
  hasGameEnd: false,
}

const timeSlice = createSlice<TimeState, SliceCaseReducers<TimeState>, string>({
  name: 'time',
  initialState,
  reducers: {
    setNames(state, action) {
      state.whitesName = action.payload.whitesName
      state.blacksName = action.payload.blacksName
    },
    setTime(state: TimeState, action: SetTimeAction) {
      const hours = Number(action.payload.hours) || 0
      const minutes = Number(action.payload.minutes) || 0
      const seconds = Number(action.payload.seconds) || 0

      state.whitesTime = {
        hours,
        minutes,
        seconds
      }
      state.blacksTime = {
        hours,
        minutes,
        seconds
      }
      state.initialTime = {
        hours,
        minutes,
        seconds
      }
    },
    setWhitesTime(state: TimeState, action: SetTimeAction) {
      state.whitesTime = {...action.payload}
    },
    setBlacksTime(state: TimeState, action: SetTimeAction) {
      state.blacksTime = {...action.payload}
    },
    endGame(state: TimeState, action) {
      state.hasGameEnd = action.payload
    },
    restoreTime(state: TimeState) {
      state.whitesTime = state.initialTime
      state.blacksTime = state.initialTime
      state.hasGameEnd = false
    }
  }
})

export const { setNames, setTime, setWhitesTime, setBlacksTime, endGame, restoreTime } = timeSlice.actions

export default timeSlice.reducer