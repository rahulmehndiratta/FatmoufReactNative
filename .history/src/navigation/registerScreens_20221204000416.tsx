import { Navigation } from 'react-native-navigation';
import Splash from '../screens/Splash';
import MyFlash from '@components/MyFlash';
import MyLoader from '@components/MyLoader';

export const screenName = {
  Splash: 'Splash',
  MyFlash: 'MyFlash',
  MyLoader: 'MyLoader',
};

export function registerScreens() {
  Navigation.registerComponent(screenName.Splash, () => Splash);
}
