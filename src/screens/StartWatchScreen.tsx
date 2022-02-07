import React, { FC, useState } from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'

import { StartWatchScreenProps } from '@interfaces/ScreenInterfaces'
import PreviousTimes from '@components/PreviousTimes'
import Footer from '@components/Footer/index'
import NewTimeModal from '@components/PreviousTimes/NewTimeModal'
import { INewWatch } from '@interfaces/components/StartWatch.interface'
import { StackNavigatorScreens } from '../config'
import { useDispatch } from 'react-redux'
import { setNames, setTime } from '@store/timeSlice'

const StartWatchScreen: FC<StartWatchScreenProps> = ({ navigation }) => {
  const [showModal, setShowModal] = useState(false)
  const dispatch = useDispatch()

  const openNewModal = () => {
    setShowModal(true)
  }

  const closeModal = () => setShowModal(false)

  const onHandleSubmit = (values: INewWatch) => {
    const { whiteName, blackName, minutes, seconds } = values
    dispatch(setNames({ whiteName, blackName }))
    dispatch(setTime({ minutes, seconds }))
    closeModal()
    navigation.navigate(StackNavigatorScreens.TIMER_SCREEN)
  }

  return (
    <View style={styles.startWatchContainer}>
      <PreviousTimes handleOpenModal={openNewModal} />
      {showModal && <NewTimeModal onHandleSubmit={onHandleSubmit} />}
      <Footer />
    </View>
  )
}

const styles = StyleSheet.create({
  startWatchContainer: {
    height: Dimensions.get('window').height
  }
})

export default StartWatchScreen
