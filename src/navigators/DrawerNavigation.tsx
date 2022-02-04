import React, { FC } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { createDrawerNavigator, DrawerContentComponentProps } from '@react-navigation/drawer'

import { DrawerRootNavigatorProps } from '@interfaces/NavigatorInterfaces'
import StackNavigator from '@navigators/StackNavigator'
import { customDrawerStyle, themes } from '@assets/Themes'
import { DrawerNavigationEnum, StackNavigatorScreens } from '../config'

const iconLogo = require('../assets/queens.png') 

const { Navigator, Screen } = createDrawerNavigator<DrawerRootNavigatorProps>()

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
    <Screen name={DrawerNavigationEnum.STACK_NAVIGATOR} component={StackNavigator} />
  </Navigator>
)

const CustomDrawer: FC<DrawerContentComponentProps> = (props) => {
  const navigateTo = (screen: StackNavigatorScreens) => {
    props.navigation.navigate(screen)
  }

  return (
    <View style={customDrawerStyle.drawerContainer}>
      <View style={customDrawerStyle.logoContainer}>
        <Image source={iconLogo} resizeMode="contain" style={customDrawerStyle.image} />
        <Text style={customDrawerStyle.logoText}>Chess Watch</Text>
      </View>
      <View style={customDrawerStyle.drawerItems}>
        <TouchableOpacity onPress={() => navigateTo(StackNavigatorScreens.HOME_SCREEN)}>
          <Text style={customDrawerStyle.drawerItemText}>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default DrawerNavigator
