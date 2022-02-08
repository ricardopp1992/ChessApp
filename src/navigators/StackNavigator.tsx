import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { RootStackNavigatorProps } from '@interfaces/NavigatorInterfaces'
import StartWatchScreen from '@screens/StartWatchScreen'
import HomeScreen from '@screens/HomeScreen'
import { themes } from '@assets/Themes'
import { StackNavigatorScreens } from '../config'
import ClockScreen from '@screens/ClockScreen'

const { Navigator, Screen } = createStackNavigator<RootStackNavigatorProps>()

const StackNavigator = () => (
  <Navigator screenOptions={{
    headerPressOpacity: .5,
    headerTintColor: themes.textColor,
    headerStyle: {
      height: themes.headerHeight,
      backgroundColor: themes.primaryColor,
    }
  }}>
    <Screen name={StackNavigatorScreens.HOME_SCREEN} options={{ headerShown: false }} component={HomeScreen} />
    <Screen name={StackNavigatorScreens.START_SCREEN} options={{ title: 'Start Watch' }} component={StartWatchScreen} />
    <Screen name={StackNavigatorScreens.TIMER_SCREEN} options={{ title: 'Clock' }} component={ClockScreen} />
  </Navigator>
)

export default StackNavigator
