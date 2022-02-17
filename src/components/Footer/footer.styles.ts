import { StatusBar, StyleSheet } from 'react-native'

import { themes } from '@assets/Themes'

const styles = StyleSheet.create({
  footerContainer: {
    position: 'absolute',
    backgroundColor: themes.primaryColor,
    width: '100%',
    height: `${themes.footerHeight}%`,
    bottom: StatusBar.currentHeight,
    left: 0
  },
  queensImage: {
    marginTop: themes.APIgt27 ? '3%' : '0%',
    width: '100%',
    height: '100%',
  }
})

export default styles