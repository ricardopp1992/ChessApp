import { INewWatch } from '@interfaces/components/StartWatch.interface'
import { configureStore } from '@reduxjs/toolkit'

import timeReduce from '@store/timeSlice'

export interface RootChessAppState {
  time: INewWatch
}

export default configureStore<RootChessAppState>({
  reducer: {
    time: timeReduce
  }
})