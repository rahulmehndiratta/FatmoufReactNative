import {Navigation} from 'react-native-navigation';
import Splash from '../screens/Splash';
// import MyFlash from '@components/MyFlash';
// import MyLoader from '@components/MyLoader';
import Login from 'screens/Auth/Login';
import ForgotPassword from 'screens/Auth/ForgotPassword';
import SignUp from 'screens/Auth/SignUp';
import Profile from 'screens/Home/Profile';
import Competitive from 'screens/Home/Competitive';
import TalkYoTalk from 'screens/Home/TalkYoTalk';
import Notification from 'screens/Home/Notification';
import CompetitiveDetail from 'screens/Home/CompetitiveDetail';
import Setting from 'screens/Home/Setting';
export const screenName = {
  Splash: 'Splash',
  MyFlash: 'MyFlash',
  MyLoader: 'MyLoader',
  Login: 'Login',
  ForgotPassword: 'ForgotPassword',
  SignUp: 'SignUp',
  Profile: 'Profile',
  Competitive: 'Competitive',
  TalkYoTalk: 'TalkYoTalk',
  Notification: 'Notification',
  CompetitiveDetail: 'CompetitiveDetail',
  Setting: 'Setting',
};

export function registerScreens() {
  Navigation.registerComponent(screenName.Splash, () => Splash);
  Navigation.registerComponent(screenName.Login, () => Login);
  Navigation.registerComponent(screenName.ForgotPassword, () => ForgotPassword);
  Navigation.registerComponent(screenName.SignUp, () => SignUp);
  Navigation.registerComponent(screenName.Profile, () => Profile);
  Navigation.registerComponent(screenName.Competitive, () => Competitive);
  Navigation.registerComponent(screenName.TalkYoTalk, () => TalkYoTalk);
  Navigation.registerComponent(screenName.Notification, () => Notification);
  Navigation.registerComponent(
    screenName.CompetitiveDetail,
    () => CompetitiveDetail,
  );
  Navigation.registerComponent(screenName.Setting, () => Setting);
}
