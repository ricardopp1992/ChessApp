import { StyleSheet } from 'react-native'

import { themes } from '@assets/Themes'

export default StyleSheet.create({
  clockHardwareContainer: {
    flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: '5%',
  },
  clockHardwareContainerLandscape: {
    flex: 1,
  },
  timerContainer: {
    height: '80%',
  },
  buttons: {
  },
  buttonsLandscape: {
    marginVertical: '2%',
  },
  timesBox: {
    width: '80%',
    height: '80%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  timer: {
    fontSize: themes.APIgt27 ? 45 : 40,
    color: themes.timerColor,
    fontWeight: '800'
  },
  whitesButton: {
    transform: [
      { rotate: '180deg' }
    ],
  },
  whitesTime: {
    position: 'absolute',
    transform: [
      { rotate: '180deg' }
    ],
    alignSelf: 'center',
    top: themes.timerSeparation,
  },
  timeDivider: {
    width: '65%',
    alignSelf: 'center',
    borderColor: themes.grayColor,
    borderWidth: 1,
  },
  blacksTime: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: themes.timerSeparation,
  },
  clockBackground: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
  pressedButton: {
    backgroundColor: 'transparent',
    borderColor: themes.primaryColor,
    borderWidth: 1
  },
  pressedText: {
    color: themes.primaryColor
  },
  pressedTextLandscape: {
    fontSize: 50,
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    width: '49%'
  },
  disableButton: {
    backgroundColor: themes.grayColor
  }
})