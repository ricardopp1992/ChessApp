import { DrawerNavigationEnum, StackNavigatorScreens } from "config"

export type DrawerRootNavigatorProps = {
  [DrawerNavigationEnum.STACK_NAVIGATOR]: undefined
}

export type RootStackNavigatorProps = {
  [StackNavigatorScreens.HOME_SCREEN]: undefined
  [StackNavigatorScreens.START_SCREEN]: undefined
  [StackNavigatorScreens.TIMER_SCREEN]: undefined
}