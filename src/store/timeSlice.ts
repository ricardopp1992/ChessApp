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
  }
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
    },
    setWhitesTime(state: TimeState, action: SetTimeAction) {
      state.whitesTime = {...action.payload}
    },
    setBlacksTime(state: TimeState, action: SetTimeAction) {
      state.blacksTime = {...action.payload}
    }
  }
})

export const { setNames, setTime, setWhitesTime, setBlacksTime } = timeSlice.actions

export default timeSlice.reducer