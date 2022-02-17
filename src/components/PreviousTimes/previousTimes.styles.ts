import { StyleSheet } from 'react-native'

import { themes } from '@assets/Themes'

const styles = StyleSheet.create({
  timeContainer: {
    minHeight: '100%',
    paddingBottom: '15%',
  },
  times: {
    maxHeight: '50%',
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
    marginTop: '45%',
    width: '80%',
  },
  timeButtonLandscape: {
    paddingVertical: '2%',
    marginTop: 0,
    bottom: '-5%',
  },
})

export default styles