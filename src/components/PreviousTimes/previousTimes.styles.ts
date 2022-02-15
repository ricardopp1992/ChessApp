import { StyleSheet } from 'react-native'

import { themes } from '@assets/Themes'

const styles = StyleSheet.create({
  timeContainer: {
    flex: 1,
    paddingBottom: '15%',
  },
  times: {
    height: '50%',
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
})

export default styles