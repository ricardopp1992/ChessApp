import React, { FC, useCallback } from 'react'
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native'

import { buttonSecondaryStyle, themes } from '@assets/Themes'
import { HomeButtonProps, HomeScreenProps } from 'interfaces/ScreenInterfaces'
import { StackNavigatorScreens } from '../config'
import useOrientation from '@components/hooks/useOrientation'
import { OrientationEnum } from '@interfaces/Hooks.interfaces'

const chessTableImg = require('../assets/Tablero.png')
const queensImg = require('../assets/queens.png')

const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
  const orientation = useOrientation()
  const navigateTo = useCallback((screen: StackNavigatorScreens) =>
  navigation.navigate(screen),
  [navigation]
  )
  const isLandscape = orientation === OrientationEnum.LANDSCAPE

  return (
    <ImageBackground style={styles.chessTableBackground} source={chessTableImg} >
      <StatusBar backgroundColor={themes.primaryColor} />
      <ImageBackground source={queensImg} resizeMode="contain" style={styles.queenBackground} />
      <View style={[styles.homeContainer, isLandscape && styles.homeContainerLandscape]}>
        <Text style={styles.chessWatchText}>Chess Watch</Text>
        <View style={[styles.buttonContainer, isLandscape && styles.buttonContainerLandscape]}>
          <ButtonHome
            onHandlePress={() => navigateTo(StackNavigatorScreens.START_SCREEN)}
          >
            Start
          </ButtonHome>
        </View>
      </View>
    </ImageBackground>
  )
}

const ButtonHome: FC<HomeButtonProps> = ({ children, onHandlePress }) => {
  return (
    <TouchableOpacity onPress={onHandlePress} style={[buttonSecondaryStyle.button]}>
      <Text style={buttonSecondaryStyle.text}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: '30%',
  },
  homeContainerLandscape: {
    justifyContent: 'space-around',
    marginTop: '5%',
  },
  chessWatchText: {
    backgroundColor: themes.primaryTransparent,
    color: themes.textColor,
    paddingVertical: '2%',
    paddingHorizontal: '7%',
    borderRadius: themes.buttonBorderRadius,
    fontSize: 30,
    fontWeight: '800',
  },
  buttonContainer: {
    justifyContent: 'space-evenly',
    minWidth: '70%',
    position: 'absolute',
    bottom: 30,
  },
  buttonContainerLandscape: {
    minWidth: '40%',
    bottom: 0,
  },
  chessTableBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    zIndex: 0
  },
  queenBackground: {
    position: 'absolute',
    marginVertical: '5%',
    width: '100%',
    height: '95%',
  },
})

export default HomeScreen