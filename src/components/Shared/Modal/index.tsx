import React, { FC, useEffect, useState } from 'react'
import { Keyboard, KeyboardEvent, StyleSheet, useWindowDimensions, View } from 'react-native'

import { themes } from '@assets/Themes'
import useOrientation from '@components/hooks/useOrientation'
import { OrientationEnum } from '@interfaces/Hooks.interfaces'

const Modal: FC<{ bodyHeight?: string }> = ({ children, bodyHeight }) => {
  const [heightWithKeyboard, setHeightWithKeyboard] = useState<{ height?: string, marginTop?: string }>({ height: bodyHeight })
  const orientation = useOrientation()
  const { height: windowHeight, width } = useWindowDimensions()
  const isLandscape = orientation === OrientationEnum.LANDSCAPE

  const onShowKeyboard = (event: KeyboardEvent) => {
    const keyboardHeightPlusHeader = event.endCoordinates.height + themes.headerHeight
    const keyboardHeightPercentage = (keyboardHeightPlusHeader * 100) / windowHeight
    const resizedModalHeight = themes.APIgt27 ? 15 : 5

    const heightStyle = StyleSheet.create({
      keyboardHeight: {
        height: `${100 - (resizedModalHeight + keyboardHeightPercentage)}%`,
        marginTop: themes.APIgt27 ? '5%' : '1%',
        paddingVertical: themes.APIgt27 ? '5%' : '2%',
      }
    })
    setHeightWithKeyboard(heightStyle.keyboardHeight)
  }

  const onHideKeyboard = () => {
    setHeightWithKeyboard({ height: bodyHeight })
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
    <View style={{
      ...styles.overlayModal,
      height: windowHeight,
      width,
    }}>
      <View style={[
        { ...styles.newTimeModalContainer, ...heightWithKeyboard },
        isLandscape && styles.modalLandscape
      ]}>
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
  },
  modalLandscape: {
    marginTop: '2%',
  },
})

export default Modal
