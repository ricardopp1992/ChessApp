import React, { FC, useEffect, useState } from 'react'
import { Dimensions, Keyboard, KeyboardEvent, StyleSheet, useWindowDimensions, View } from 'react-native'

import { themes } from '@assets/Themes'

const Modal: FC = ({ children }) => {
  const [heightWithKeyboard, setHeightWithKeyboard] = useState<{ height?: string, marginTop?: string }>()
  const { height: windowHeight } = useWindowDimensions()

  const onShowKeyboard = (event: KeyboardEvent) => {
    const keyboardHeightPlusHeader = event.endCoordinates.height + themes.headerHeight
    const keyboardHeightPercentage = (keyboardHeightPlusHeader * 100) / windowHeight
    const resizedModalHeight = themes.tallHeightDevice ? 15 : 5

    const heightStyle = StyleSheet.create({
      keyboardHeight: {
        height: `${100 - (resizedModalHeight + keyboardHeightPercentage)}%`,
        marginTop: themes.tallHeightDevice ? '5%' : '1%',
        paddingVertical: themes.tallHeightDevice ? '5%' : '2%',
      }
    })
    setHeightWithKeyboard(heightStyle.keyboardHeight)
  }

  const onHideKeyboard = () => {
    setHeightWithKeyboard({})
  }

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', onShowKeyboard)
    Keyboard.addListener('keyboardDidHide', onHideKeyboard)

    return () => {
      Keyboard.removeAllListeners('keyboardDidShow')
      Keyboard.removeAllListeners('keyboardDidHide')
    }
  }, []);
  return (
    <View style={styles.overlayModal}>
      <View style={{ ...styles.newTimeModalContainer, ...heightWithKeyboard }}>
        {children}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  overlayModal: {
    position: 'absolute',
    top: 0,
    flex: 1,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: themes.overlayColor,
  },
  newTimeModalContainer: {
    position: 'absolute',
    paddingVertical: '5%',
    paddingHorizontal: '10%',
    alignSelf: 'center',
    marginTop: '15%',
    backgroundColor: '#F1F1F1',
    borderRadius: 25,
    borderWidth: 2,
    borderColor: themes.grayColor,
    justifyContent: 'space-between',
    width: '80%',
    height: '50%'
  },
})

export default Modal
