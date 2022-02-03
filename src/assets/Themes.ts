import { StyleSheet } from "react-native"

export const themes = {
  buttonBorderRadius: 20,
  primaryColor: '#BF7F00',
  textColor: '#fff',
  primaryTransparent: 'rgba(153, 102, 0, 0.17)',
  homeButton: '#996600',
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
})

export const buttonPrimaryStyle = StyleSheet.create({
  button: {
    backgroundColor: themes.homeButton,
    borderRadius: themes.buttonBorderRadius,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: '2%',
    paddingHorizontal: '7%',
  },
  text: {
    color: themes.textColor,
    fontWeight: '800',
  }
})