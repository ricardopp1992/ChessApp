import { configureStore } from '@reduxjs/toolkit'

import { TimeState } from '@interfaces/StoreInterfaces'
import timeReduce from '@store/timeSlice'

export interface RootChessAppState {
  time: TimeState
}

export default configureStore<RootChessAppState>({
  reducer: {
    time: timeReduce
  }
})