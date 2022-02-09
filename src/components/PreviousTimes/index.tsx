import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'

import { PreviousTimesProps } from '@interfaces/components/StartWatch.interface'
import { TimeState } from '@interfaces/StoreInterfaces'
import { buttonPrimaryStyle } from '@assets/Themes'
import { RootChessAppState } from '@store/store'
import styles from './previousTimes.styles'
import { parseTime } from '@utils/helpers'

const PreviousTimes: FC<PreviousTimesProps> = ({ handleOpenModal }) => {
  const { lastTimes } = useSelector<RootChessAppState, TimeState>(state => state.time)

  return (
    <View style={styles.timeContainer}>
      <View style={styles.times}>
        {lastTimes.map((time) =>
          <TouchableOpacity onPress={() => handleOpenModal(time)} style={styles.timeTouchable}>
            <Text style={styles.touchableText}>
              {`${parseTime(time.hours)}:${parseTime(time.minutes)}:${parseTime(time.seconds)}`}
            </Text>
          </TouchableOpacity>
        )}
      </View>

      <TouchableHighlight onPress={() => handleOpenModal()} style={{ ...buttonPrimaryStyle.button, ...styles.newTimeButton }} >
        <Text style={buttonPrimaryStyle.text}>New Time</Text>
      </TouchableHighlight>
    </View>
  )
}

export default PreviousTimes