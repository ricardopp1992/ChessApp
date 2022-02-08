import React, { FC } from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'

import { ClockScreenProps } from '@interfaces/ScreenInterfaces'
import ClockHardware from '@components/ClockHardware'
import Footer from '@components/Footer'

const ClockScreen: FC<ClockScreenProps> = () => {

  return (
    <View style={styles.clockScreen}>
      <ClockHardware />
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
