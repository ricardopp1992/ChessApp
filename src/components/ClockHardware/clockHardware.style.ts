import { themes } from "@assets/Themes";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  clockHardwareContainer: {
    height: `${90 - themes.footerHeight}%`,
    justifyContent: 'center',
    paddingHorizontal: '5%',
  },
  timerContainer: {
    height: '87%',
    justifyContent: 'center'
  },
  buttons: {
    marginVertical: '3%',
  },
  timesBox: {
    width: '80%',
    height: '70%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  timer: {
    fontSize: 35,
    color: themes.timerColor,
    fontWeight: '800'
  },
  whitesTime: {
    position: 'absolute',
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
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 0,
  },
  actionButton: {
    width: '49%'
  }
})