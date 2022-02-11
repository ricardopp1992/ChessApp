import React, { FC, useEffect } from 'react'
import { Dimensions, StatusBar, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'

import { ClockScreenProps } from '@interfaces/ScreenInterfaces'
import ClockHardware from '@components/ClockHardware'
import Footer from '@components/Footer'
import { StackNavigatorScreens } from '../config'
import { endGame } from '@store/timeSlice'
import { themes } from '@assets/Themes'
import ScreenWrapper from '@components/Shared/ScreenWrapper'

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
    <ScreenWrapper>
      <ClockHardware goBackToHome={goBackToHome} />
      <Footer />
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
  clockScreen: {
    height: Dimensions.get('screen').height - themes.headerHeight - (themes.tallHeightDevice ? (StatusBar.currentHeight || 0) : 0),
  }
})

export default ClockScreen
