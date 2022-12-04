import {Navigation} from 'react-native-navigation';
import Splash from '../screens/Splash';
// import MyFlash from '@components/MyFlash';
// import MyLoader from '@components/MyLoader';
import Login from 'screens/Login';

export const screenName = {
  Splash: 'Splash',
  MyFlash: 'MyFlash',
  MyLoader: 'MyLoader',
  Login: 'Login',
};

export function registerScreens() {
  Navigation.registerComponent(screenName.Splash, () => Splash);
  Navigation.registerComponent(screenName.Login, () => Login);
}
