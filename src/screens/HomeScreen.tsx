import React, { FC, useCallback } from 'react'
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import { buttonSecondaryStyle, themes } from '@assets/Themes'
import { HomeButtonProps, HomeScreenProps } from 'interfaces/ScreenInterfaces'
import { StackNavigatorScreens } from '../config'

const chessTableImg = require('../assets/Tablero.png')
const queensImg = require('../assets/queens.png')

const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
  const navigateTo = useCallback((screen: StackNavigatorScreens) =>
    navigation.navigate(screen),
    [navigation]
  )

  return (
    <ImageBackground style={styles.chessTableBackground} source={chessTableImg} >
      <ImageBackground source={queensImg} resizeMode="contain" style={styles.queenBackground} />
      <View style={styles.homeContainer}>
        <Text style={styles.chessWatchText}>Chess Watch</Text>
        <View style={styles.buttonContainer}>
          <ButtonHome
            onHandlePress={() => navigateTo(StackNavigatorScreens.START_SCREEN)}
          >
            Start
          </ButtonHome>
          <ButtonHome
            onHandlePress={() => navigateTo(StackNavigatorScreens.START_SCREEN)}
          >
            Instructions
          </ButtonHome>
          <ButtonHome
            onHandlePress={() => navigateTo(StackNavigatorScreens.START_SCREEN)}
          >
            History
          </ButtonHome>
        </View>
      </View>
    </ImageBackground>
  )
}

const ButtonHome: FC<HomeButtonProps> = ({ children, onHandlePress }) => {
  return (
    <TouchableOpacity onPress={onHandlePress} style={buttonSecondaryStyle.button}>
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
  chessWatchText: {
    backgroundColor: themes.primaryTransparent,
    color: themes.textColor,
    paddingVertical: '2%',
    paddingHorizontal: '7%',
    marginBottom: '10%',
    borderRadius: themes.buttonBorderRadius,
    fontSize: 30,
    fontWeight: '800',
  },
  buttonContainer: {
    justifyContent: 'space-evenly',
    height: '40%',
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