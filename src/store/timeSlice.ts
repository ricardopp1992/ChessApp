import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit'

import { INewWatch } from '@interfaces/components/StartWatch.interface'

const initialState: INewWatch = {
  whiteName: '',
  blackName: '',
  minutes: '',
  seconds: '',
}

const timeSlice = createSlice<INewWatch, SliceCaseReducers<INewWatch>, string>({
  name: 'time',
  initialState,
  reducers: {
    setNames(state, action) {
      state.blackName = action.payload.blackName
      state.whiteName = action.payload.whiteName
    },
    setTime(state, action) {
      state.minutes = action.payload.minutes
      state.seconds = action.payload.seconds
    }
  }
})

export const { setNames, setTime } = timeSlice.actions

export default timeSlice.reducer