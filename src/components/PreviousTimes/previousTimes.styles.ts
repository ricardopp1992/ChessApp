import { StyleSheet } from 'react-native'

import { themes } from '@assets/Themes'

const styles = StyleSheet.create({
  timeContainer: {
    minHeight: '100%',
    paddingBottom: '15%',
  },
  times: {
    maxHeight: '100%',
  },
  landScapeTime: {
    height: 350
  },
  timeTouchable: {
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: themes.grayColor,
    paddingVertical: '5%',
  },
  touchableText: {
    color: themes.primaryColor,
    fontSize: 30
  },
  newTimeButton: {
    alignSelf: 'center',
    width: '80%',
  },
  timeButtonLandscape: {
  },
})

export default styles