import React, { FC, useState } from 'react'
import { useDispatch } from 'react-redux'

import { StartWatchScreenProps } from '@interfaces/ScreenInterfaces'
import PreviousTimes from '@components/PreviousTimes'
import Footer from '@components/Footer/index'
import NewTimeModal from '@components/PreviousTimes/NewTimeModal'
import { INewWatch } from '@interfaces/components/StartWatch.interface'
import { StackNavigatorScreens } from '../config'
import { setNames, setNewTime, setTime } from '@store/timeSlice'
import ScreenWrapper from '@components/Shared/ScreenWrapper'

const StartWatchScreen: FC<StartWatchScreenProps> = ({ navigation }) => {
  const [showModal, setShowModal] = useState(false)
  const [prevTime, setPrevTime] = useState<INewWatch>();
  const dispatch = useDispatch()

  const openNewModal = (newTime: INewWatch | void) => {
    newTime && setPrevTime(newTime)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setPrevTime(undefined)
  }

  const onHandleSubmit = (values: INewWatch) => {
    const { whiteName, blackName, minutes, seconds, hours } = values
    dispatch(setNames({ whiteName, blackName }))
    dispatch(setTime({ hours, minutes, seconds }))
    dispatch(setNewTime(values))
    closeModal()
    navigation.navigate(StackNavigatorScreens.TIMER_SCREEN)
  }

  return (
    <ScreenWrapper>
      <PreviousTimes handleOpenModal={openNewModal} />
      {showModal && <NewTimeModal closeModal={closeModal} onHandleSubmit={onHandleSubmit} time={prevTime} />}
      <Footer />
    </ScreenWrapper>
  )
}

export default StartWatchScreen
