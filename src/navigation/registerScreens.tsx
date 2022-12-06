import {Navigation} from 'react-native-navigation';
import Splash from '../screens/Splash';
// import MyFlash from '@components/MyFlash';
// import MyLoader from '@components/MyLoader';
import Login from 'screens/Login';
import ForgotPassword from 'screens/ForgotPassword';
import SignUp from 'screens/SignUp';
import Profile from 'screens/Home/Profile';
import Competitive from 'screens/Home/Competitive';
import TalkToTalk from 'screens/Home/TalkToTalk';
import Notification from 'screens/Notification';

export const screenName = {
  Splash: 'Splash',
  MyFlash: 'MyFlash',
  MyLoader: 'MyLoader',
  Login: 'Login',
  ForgotPassword: 'ForgotPassword',
  SignUp: 'SignUp',
  Profile: 'Profile',
  Competitive: 'Competitive',
  TalkToTalk: 'TalkToTalk',
  Notification: 'Notification',
};

export function registerScreens() {
  Navigation.registerComponent(screenName.Splash, () => Splash);
  Navigation.registerComponent(screenName.Login, () => Login);
  Navigation.registerComponent(screenName.ForgotPassword, () => ForgotPassword);
  Navigation.registerComponent(screenName.SignUp, () => SignUp);
  Navigation.registerComponent(screenName.Profile, () => Profile);
  Navigation.registerComponent(screenName.Competitive, () => Competitive);
  Navigation.registerComponent(screenName.TalkToTalk, () => TalkToTalk);
  Navigation.registerComponent(screenName.Notification, () => Notification);
}
