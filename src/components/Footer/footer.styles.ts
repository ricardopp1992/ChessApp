import { StyleSheet, Dimensions } from 'react-native'

import { themes } from '@assets/Themes'

const styles = StyleSheet.create({
  footerContainer: {
    position: 'absolute',
    backgroundColor: themes.primaryColor,
    width: '100%',
    height: `${themes.footerHeight}%`,
    bottom: themes.headerHeight,
    left: 0
  },
  queensImage: {
    marginTop: '3%',
    width: '100%',
    height: '100%',
  }
})

export default styles