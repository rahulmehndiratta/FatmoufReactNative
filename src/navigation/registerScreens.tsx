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
import UpdateProfile from 'screens/Home/UpdateProfile';
import WebViewPage from 'screens/Home/WebViewPage';
import ViewParticipate from 'screens/Home/ViewParticipate';
import AddChallenge from 'screens/Home/AddChallenge';
import Wallet from 'screens/Home/Wallet';
import Withdrawal from 'screens/Home/Withdrawal';
import BlockAccount from 'screens/Home/BlockAccount';
import AddActivity from 'screens/Home/AddActivity';

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
  UpdateProfile: 'UpdateProfile',
  WebViewPage: 'WebViewPage',
  ViewParticipate: 'ViewParticipate',
  AddChallenge: 'AddChallenge',
  Wallet: 'Wallet',
  Withdrawal: 'Withdrawal',
  BlockAccount: 'BlockAccount',
  AddActivity: 'AddActivity',
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
  Navigation.registerComponent(screenName.UpdateProfile, () => UpdateProfile);
  Navigation.registerComponent(screenName.WebViewPage, () => WebViewPage);
  Navigation.registerComponent(
    screenName.ViewParticipate,
    () => ViewParticipate,
  );
  Navigation.registerComponent(screenName.AddChallenge, () => AddChallenge);
  Navigation.registerComponent(screenName.Wallet, () => Wallet);
  Navigation.registerComponent(screenName.Withdrawal, () => Withdrawal);
  Navigation.registerComponent(screenName.BlockAccount, () => BlockAccount);
  Navigation.registerComponent(screenName.AddActivity, () => AddActivity);
}
