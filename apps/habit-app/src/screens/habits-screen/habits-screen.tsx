import { Screen, Text } from '@nx-react-native/shared/ui'
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'

const options: BottomTabNavigationOptions = {
  title: '',
  tabBarShowLabel: false
}

const Component = (): React.ReactElement => {
  return <Screen>
    <Text>
      Habits Screen
    </Text>
  </Screen>
}

export const HabitsScreen = {
  Container: Component,
  options
}
