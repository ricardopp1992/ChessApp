import React, { FC } from 'react'
import { StatusBar, useWindowDimensions, View } from 'react-native'

import { themes } from '@assets/Themes'

const ScreenWrapper: FC = ({ children }) => {
  const { height } = useWindowDimensions()
  const additionalHeight = themes.APIgt27 ? 0 : themes.headerHeight

  return (
    <View style={{ height: height - additionalHeight }}>
      <StatusBar backgroundColor={themes.primaryColor} />
      {children}
    </View>
  )
}

export default ScreenWrapper
