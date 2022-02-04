import React, { FC } from 'react'
import { Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'

import { buttonPrimaryStyle } from '@assets/Themes'
import { PreviousTimesProps } from '@interfaces/components/StartWatch.interface'
import styles from './previousTimes.styles'

const PreviousTimes: FC<PreviousTimesProps> = ({ handleOpenModal }) => {

  return (
    <View style={styles.timeContainer}>
      <TouchableOpacity style={styles.timeTouchable}>
        <Text style={styles.touchableText}>5:00</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.timeTouchable}>
        <Text style={styles.touchableText}>10:00</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.timeTouchable}>
        <Text style={styles.touchableText}>15:00</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.timeTouchable}>
        <Text style={styles.touchableText}>20:00</Text>
      </TouchableOpacity>

      <TouchableHighlight onPress={handleOpenModal} style={{ ...buttonPrimaryStyle.button, ...styles.newTimeButton }} >
        <Text style={buttonPrimaryStyle.text}>New Time</Text>
      </TouchableHighlight>
    </View>
  )
}

export default PreviousTimes