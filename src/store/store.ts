import { configureStore } from '@reduxjs/toolkit'

import timeReduce from '@store/timeSlice'

export default configureStore({
  reducer: {
    time: timeReduce
  }
})