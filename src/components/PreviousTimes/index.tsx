import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'

import { PreviousTimesProps } from '@interfaces/components/StartWatch.interface'
import { TimeState } from '@interfaces/StoreInterfaces'
import { buttonPrimaryStyle } from '@assets/Themes'
import { RootChessAppState } from '@store/store'
import styles from './previousTimes.styles'
import { parseTime } from '@utils/helpers'

const PreviousTimes: FC<PreviousTimesProps> = ({ handleOpenModal, isLandscape }) => {
  const { lastTimes } = useSelector<RootChessAppState, TimeState>(state => state.time)

  return (
    <View style={styles.timeContainer}>
      <ScrollView style={[styles.times, isLandscape && styles.landScapeTime]}>
        {lastTimes.map((time) =>
          <TouchableOpacity
            key={`${time.hours}:${time.minutes}:${time.seconds}`}
            onPress={() => handleOpenModal(time)} style={styles.timeTouchable}>
            <Text style={styles.touchableText}>
              {`${parseTime(time.hours)}:${parseTime(time.minutes)}:${parseTime(time.seconds)}`}
            </Text>
          </TouchableOpacity>
        )}
      </ScrollView>

      <TouchableOpacity
        onPress={() => handleOpenModal()}
        style={[ buttonPrimaryStyle.button, styles.newTimeButton, isLandscape && styles.timeButtonLandscape]}
      >
        <Text style={buttonPrimaryStyle.text}>New Time</Text>
      </TouchableOpacity>
    </View>
  )
}

export default PreviousTimes