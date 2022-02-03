import React, { FC } from 'react'
import { Image, Text, TouchableWithoutFeedback, View } from 'react-native'
import { createDrawerNavigator, DrawerContentComponentProps } from '@react-navigation/drawer'

import HomeScreen from '@screens/HomeScreen'
import { customDrawerStyle, themes } from '@assets/Themes'
import { DrawerNavigationEnum } from '../config'

const iconLogo = require('../assets/queens.png')

const { Navigator, Screen } = createDrawerNavigator()

const DrawerNavigator = () => (
  <Navigator
    drawerContent={CustomDrawer}
    screenOptions={{
      drawerStyle: {
        backgroundColor: themes.primaryColor
      },
      headerShown: false,
    }}
  >
    <Screen name={DrawerNavigationEnum.HOME_SCREEN} component={HomeScreen} />
  </Navigator>
)

const CustomDrawer: FC<DrawerContentComponentProps> = (props) => {
  return (
    <View style={customDrawerStyle.drawerContainer}>
      <View style={customDrawerStyle.logoContainer}>
        <Image source={iconLogo} resizeMode="contain" style={customDrawerStyle.image} />
        <Text style={customDrawerStyle.logoText}>Chess Watch</Text>
      </View>
      <View style={customDrawerStyle.drawerItems}>
        <TouchableWithoutFeedback>
          <Text>Home</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  )
}

export default DrawerNavigator
