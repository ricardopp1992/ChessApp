import React, { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { ClockScreenProps } from '@interfaces/ScreenInterfaces'
import ClockHardware from '@components/ClockHardware'
import { StackNavigatorScreens } from '../config'
import { endGame } from '@store/timeSlice'
import ScreenWrapper from '@components/Shared/ScreenWrapper'
import useOrientation from '@components/hooks/useOrientation'
import { OrientationEnum } from '@interfaces/Hooks.interfaces'

const ClockScreen: FC<ClockScreenProps> = ({ navigation }) => {
  const dispatch = useDispatch()
  const orientation = useOrientation()
  const isLandscape = orientation === OrientationEnum.LANDSCAPE

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
      <ClockHardware isLandscape={isLandscape} goBackToHome={goBackToHome} />
    </ScreenWrapper>
  )
}

export default ClockScreen
