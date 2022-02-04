import { createSlice } from '@reduxjs/toolkit'

import { TimeState } from '@interfaces/StoreInterfaces'

const initialState: TimeState = {
  selectedTime: 0
}

const timeSlice = createSlice({
  name: 'time',
  initialState,
  reducers: {
    setSelectedTime(state, action) {
      state.selectedTime = action.payload
    }
  }
})

export const { setSelectedTime } = timeSlice.actions

export default timeSlice.reducer