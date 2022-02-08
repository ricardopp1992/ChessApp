import React, { FC, useEffect } from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'

import { ClockScreenProps } from '@interfaces/ScreenInterfaces'
import ClockHardware from '@components/ClockHardware'
import Footer from '@components/Footer'
import { StackNavigatorScreens } from '../config'
import { endGame } from '@store/timeSlice'
import { useDispatch } from 'react-redux'

const ClockScreen: FC<ClockScreenProps> = ({ navigation }) => {
  const dispatch = useDispatch()

  const goBackToHome = () => {
    navigation.navigate(StackNavigatorScreens.HOME_SCREEN)
  }

  useEffect(() => {
    return () => {
      dispatch(endGame(false))
    }
  }, [])

  return (
    <View style={styles.clockScreen}>
      <ClockHardware goBackToHome={goBackToHome} />
      <Footer />
    </View>
  )
}

const styles = StyleSheet.create({
  clockScreen: {
    backgroundColor: '#fff',
    height: Dimensions.get('window').height,
  }
})

export default ClockScreen
