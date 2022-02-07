import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

import { RootChessAppState } from '@store/store'
import { INewWatch } from '@interfaces/components/StartWatch.interface'

const TimerScreen = () => {
  const { blackName, whiteName, minutes, seconds } = useSelector<RootChessAppState, INewWatch>(
    (state) => state.time
  )

  return (
    <View style={styles.styleName}>
      <Text>{`${blackName}, ${whiteName}, ${minutes}, ${seconds}`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  styleName: {
    
  }
})

export default TimerScreen
