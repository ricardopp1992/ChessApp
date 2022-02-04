import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackNavigatorProps } from "@interfaces/NavigatorInterfaces";
import { StackNavigatorScreens } from "config";

export interface HomeScreenProps extends
  NativeStackScreenProps<RootStackNavigatorProps, StackNavigatorScreens.HOME_SCREEN> {
}

export interface HomeButtonProps {
  onHandlePress: () => void
}

export interface StartWatchScreenProps extends
  NativeStackScreenProps<RootStackNavigatorProps, StackNavigatorScreens.START_SCREEN> {

}