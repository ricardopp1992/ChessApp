import { Dimensions, StyleSheet } from 'react-native'

export const themes = {
  buttonBorderRadius: 20,
  primaryColor: '#BF7F00',
  secondaryColor: '#7D4B00',
  textColor: '#fff',
  primaryTransparent: 'rgba(153, 102, 0, 0.17)',
  homeButton: '#996600',
  grayColor: '#DEE2E6',
  secondaryColorText: '#000',
  headerHeight: 50,
  footerHeight: 11,
  overlayColor: '#bf7f0085',
  timerColor: '#BF7F00',
  backgroundInput: '#C4C4C450',
  timerSeparation: '23%',
  modalColorText: '#000',
  placeHolderColor: '#8f9091',
  inputColorText: '#000',
  tallHeightDevice: Dimensions.get('screen').height > 640
}

export const customDrawerStyle = StyleSheet.create({
  drawerContainer: {
    marginTop: '10%',
    marginHorizontal: '10%',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  image: {
    width: '15%',
    height: 35
  },
  logoText: {
    color: themes.textColor,
    fontSize: 25,
    fontWeight: '800',
    marginLeft: '5%',
  },
  drawerItems: {
    paddingVertical: '10%',
    paddingHorizontal: '5%',
    width: '100%',
    height: '100%'
  },
  drawerItemText: {
    fontSize: 15,
    fontWeight: '800',
    color: themes.textColor
  },
})

export const buttonSecondaryStyle = StyleSheet.create({
  button: {
    backgroundColor: themes.homeButton,
    borderRadius: themes.buttonBorderRadius,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: '3%',
    paddingHorizontal: '7%',
  },
  text: {
    color: themes.textColor,
    fontSize: 20,
    fontWeight: '800',
  }
})

export const buttonPrimaryStyle = StyleSheet.create({
  button: {
    backgroundColor: themes.primaryColor,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: '4%',
    paddingHorizontal: '7%',
  },
  text: {
    color: themes.textColor,
    fontSize: 20,
    fontWeight: '800',
  },
})