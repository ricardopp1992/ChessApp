import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'

import { themes } from '@assets/Themes'
import useOrientation from '@components/hooks/useOrientation'
import { OrientationEnum } from '@interfaces/Hooks.interfaces'

const Modal: FC<{ bodyHeight?: string }> = ({ children }) => {
  const orientation = useOrientation()
  const isLandscape = orientation === OrientationEnum.LANDSCAPE

  return (
    <View style={styles.overlayModal}>
      <View
        style={[styles.newTimeModalContainer, isLandscape && styles.modalLandscape]}
      >
        {children}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  overlayModal: {
    position: 'absolute',
    top: 0,
    left: 0,
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: themes.overlayColor,
  },
  newTimeModalContainer: {
    position: 'absolute',
    paddingVertical: '5%',
    paddingHorizontal: '10%',
    alignSelf: 'center',
    marginTop: '15%',
    backgroundColor: '#F1F1F1',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: themes.grayColor,
    justifyContent: 'space-between',
    width: '80%',
  },
  modalLandscape: {
    marginTop: '2%',
    maxHeight: '80%',
  },
})

export default Modal
