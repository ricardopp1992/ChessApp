import React, { FC } from 'react'
import { StatusBar, View } from 'react-native'

import { themes } from '@assets/Themes'

const ScreenWrapper: FC = ({ children }) => {

  return (
    <View style={{ flex: 1, maxHeight: '100%' }}>
      <StatusBar backgroundColor={themes.primaryColor} />
      {children}
    </View>
  )
}

export default ScreenWrapper
