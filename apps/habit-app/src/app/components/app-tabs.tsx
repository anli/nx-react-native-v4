import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { HabitsScreen } from '../../screens'

const Tab = createBottomTabNavigator()

export const AppTabs = (): React.ReactElement => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HabitsScreen"
        component={HabitsScreen.Container}
        options={{
          ...HabitsScreen.options,
          tabBarIcon: ({ color, size }) => (
            <Icon name="home-variant" size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  )
}
