import React, { FC, useCallback, useEffect, useState } from 'react'
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'

import { TimeState } from '@interfaces/StoreInterfaces'
import { ClockHardwareProps } from '@interfaces/components/Clock.interface'
import GameOverModal from '@components/GameOverModal'
import { RootChessAppState } from '@store/store'
import { buttonPrimaryStyle } from '@assets/Themes'
import { parseTime } from '@utils/helpers'
import useClock from './useClock'
import styles from './clockHardware.style'

const clockBackground = require('../../assets/queenVector.png')

const ClockHardware: FC<ClockHardwareProps> = ({ goBackToHome, isLandscape }) => {
  const {
    whitesTime,
    blacksTime,
    toggleTurn,
    isWhiteTurn,
    resumeTime,
    pauseTime,
    isPaused,
  } = useClock()
  const { blacksName, whitesName, hasGameEnd } = useSelector<RootChessAppState, TimeState>(
    (state) => state.time
  )
  const [showModal, setShowModal] = useState(false)

  const allowPressTime = (turn: string) => {
    if (turn === 'white' && isWhiteTurn) toggleTurn()
    if (turn === 'black' && !isWhiteTurn) toggleTurn()
  }

  const onHandlePauseTime = () => isPaused ? resumeTime() : pauseTime()

  const handlePlayAgain = useCallback(() => {
    !isWhiteTurn && toggleTurn()
    setShowModal(false)
    resumeTime()
  }, [isWhiteTurn])

  useEffect(() => {
    hasGameEnd && setShowModal(true)
  }, [hasGameEnd])

  return (
    <View style={[styles.clockHardwareContainer, isLandscape && styles.clockHardwareContainerLandscape]}>
      {
        isLandscape ? (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity
              onPress={() => allowPressTime('white')}
              style={[
                buttonPrimaryStyle.button,
                styles.buttons,
                isLandscape && styles.buttonsLandscape,
                isWhiteTurn && styles.pressedButton,
                { width: '49%', height: '90%' }
              ]}
            >
              <Text style={[
                buttonPrimaryStyle.text,
                isWhiteTurn && styles.pressedText,
                isLandscape && styles.pressedTextLandscape
              ]}>
                {`${whitesTime.hours} : ${parseTime(whitesTime.minutes)} : ${parseTime(whitesTime.seconds)}`}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => allowPressTime('black')}
              style={[
                buttonPrimaryStyle.button,
                styles.buttons,
                isLandscape && styles.buttonsLandscape,
                !isWhiteTurn && styles.pressedButton,
                { width: '49%', height: '90%' }
              ]}
            >
              <Text style={[
                buttonPrimaryStyle.text,
                !isWhiteTurn && styles.pressedText,
                isLandscape && styles.pressedTextLandscape
              ]}>
                {`${blacksTime.hours} : ${parseTime(blacksTime.minutes)} : ${parseTime(blacksTime.seconds)}`}
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.timerContainer}>
            <TouchableOpacity
              onPress={() => allowPressTime('white')}
              style={[buttonPrimaryStyle.button, styles.buttons, styles.whitesButton, isWhiteTurn && styles.pressedButton]}
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
        )
      }

      {/** Keep these */}
      <View style={styles.actionButtonsContainer}>
        <TouchableOpacity onPress={onHandlePauseTime} style={[buttonPrimaryStyle.button, styles.actionButton]}>
          <Text style={[buttonPrimaryStyle.text]}>{isPaused ? 'Resume' : 'Pause'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setShowModal(true)}
          disabled={!isPaused}
          style={[buttonPrimaryStyle.button, styles.actionButton, !isPaused && styles.disableButton]}>
          <Text style={[buttonPrimaryStyle.text]}>Finish</Text>
        </TouchableOpacity>
      </View>
      {showModal && <GameOverModal closeModal={handlePlayAgain} goToHome={goBackToHome} isWhiteTurn={isWhiteTurn} />}
    </View>
  )
}

export default ClockHardware
