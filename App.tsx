import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import 'react-native-gesture-handler'

import DrawerNavigator from '@navigators/DrawerNavigation'
import { Provider } from 'react-redux'
import store from '@store/store'

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <DrawerNavigator />
      </Provider>
    </NavigationContainer>
  )
}

export default App
