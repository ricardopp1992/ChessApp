import React, { FC } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import Modal from '@components/Shared/Modal'
import { GameOverModalProps } from '@interfaces/components/Clock.interface'
import { buttonPrimaryStyle, themes } from '@assets/Themes'
import { restoreTime } from '@store/timeSlice'
import { useDispatch } from 'react-redux'

const whitesWin = require('../../assets/whitesWin.png')
const blacksWin = require('../../assets/blacksWin.png')

const GameOverModal: FC<GameOverModalProps> = ({ goToHome, isWhiteTurn, closeModal, isLandscape }) => {
  const dispatch = useDispatch()

  const onHandleResetGame = () => {
    dispatch(restoreTime({}))
    closeModal()
  }

  return (
    <Modal>
      <View style={styles.gameOverContainer}>
        <Text style={styles.titleModal}>
          Game Over 
          <Text style={styles.titleWin}>{isWhiteTurn ? ' blacks ' : ' whites '}</Text>
          wins
        </Text>
        <Image
          style={[styles.gameOverImage, isLandscape && styles.imageLandscape ]}
          source={!isWhiteTurn ? whitesWin: blacksWin} />
        <TouchableOpacity onPress={onHandleResetGame} style={[buttonPrimaryStyle.button]}>
          <Text style={[buttonPrimaryStyle.text]}>Play again</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[buttonPrimaryStyle.button, styles.marginTopLandscape]} onPress={() => goToHome()}>
          <Text style={[buttonPrimaryStyle.text]}>Go Back to Home</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  gameOverContainer: {
    height: '100%',
    justifyContent: 'space-between'
  },
  titleModal: {
    color: themes.modalColorText,
    fontWeight: '800',
    fontSize: 15,
    alignSelf: 'center'
  },
  titleWin: {
    color: themes.primaryColor
  },
  gameOverImage: {
    alignSelf: 'center'
  },
  imageLandscape: {
    marginVertical: '2%',
    height: 60,
    width: 60
  },
  marginTopLandscape: {
    marginTop: '2%'
  },
})

export default GameOverModal