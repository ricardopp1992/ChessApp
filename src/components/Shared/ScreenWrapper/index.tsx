import React, { FC } from 'react'
import { Dimensions, StatusBar, StyleSheet, View } from 'react-native'

import { themes } from '@assets/Themes'

const ScreenWrapper: FC = ({ children }) => {
  return (
    <View style={styles.startWatchContainer}>
      <StatusBar backgroundColor={themes.primaryColor} />
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  startWatchContainer: {
    height: Dimensions.get('screen').height - themes.headerHeight - (themes.tallHeightDevice ? (StatusBar.currentHeight || 0) : 0),
  }
})

export default ScreenWrapper
