import React, { useState } from 'react'
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'

import { TimeState } from '@interfaces/StoreInterfaces'
import { RootChessAppState } from '@store/store'
import { buttonPrimaryStyle } from '@assets/Themes'
import { parseTime } from '@utils/helpers'
import useClock from './useClock'
import styles from './clockHardware.style'

const clockBackground = require('../../assets/queenVector.png')

const ClockHardware = () => {
  const {
    whitesTime,
    blacksTime,
    toggleTurn,
    isWhiteTurn,
    resumeTime,
    pauseTime,
    isPaused,
  } = useClock()
  const { blacksName, whitesName } = useSelector<RootChessAppState, TimeState>(
    (state) => state.time
  )

  const allowPressTime = (turn: string) => {
    if (turn === 'white' && isWhiteTurn) toggleTurn()
    if (turn === 'black' && !isWhiteTurn) toggleTurn()
  }

  const onHandlePauseTime = () => isPaused ? resumeTime() : pauseTime()

  return (
    <View style={styles.clockHardwareContainer}>
      <View style={styles.timerContainer}>
        <TouchableOpacity
          onPress={() => allowPressTime('white')}
          style={[buttonPrimaryStyle.button, styles.buttons, isWhiteTurn && styles.pressedButton]}
        >
          <Text style={[buttonPrimaryStyle.text, isWhiteTurn && styles.pressedText]}>{whitesName || 'Whites'}</Text>
        </TouchableOpacity>
        <View style={styles.timesBox}>
          <ImageBackground style={styles.clockBackground} source={clockBackground} resizeMode="contain" />
          <Text style={[styles.whitesTime, styles.timer]}>
            {`${whitesTime.hours} : ${parseTime(whitesTime.minutes)} : ${parseTime(whitesTime.seconds)}`}
          </Text>
          <View style={styles.timeDivider} />
          <Text style={[styles.blacksTime, styles.timer]}>
            {`${blacksTime.hours} : ${parseTime(blacksTime.minutes)} : ${parseTime(blacksTime.seconds)}`}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => allowPressTime('black')}
          style={[buttonPrimaryStyle.button, styles.buttons, !isWhiteTurn && styles.pressedButton]}
        >
          <Text style={[buttonPrimaryStyle.text, !isWhiteTurn && styles.pressedText]}>{blacksName || 'Black'}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.actionButtonsContainer}>
        <TouchableOpacity onPress={onHandlePauseTime} style={[buttonPrimaryStyle.button, styles.actionButton]}>
          <Text style={[buttonPrimaryStyle.text]}>{isPaused ? 'Resume' : 'Pause'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[buttonPrimaryStyle.button, styles.actionButton]}>
          <Text style={[buttonPrimaryStyle.text]}>Finish</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ClockHardware