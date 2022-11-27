import { ThemeProvider } from '@nx-react-native/shared/ui'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { AppTabs } from './components'

const RootStack = createNativeStackNavigator()

export const App = (): React.ReactElement => (
  <ThemeProvider>
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="AppTabs"
          component={AppTabs}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  </ThemeProvider>
)
