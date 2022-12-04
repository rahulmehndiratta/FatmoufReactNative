import { Navigation } from 'react-native-navigation';
import Splash from '../screens/Splash';
import MyFlash from '@components/MyFlash';
import MyLoader from '@components/MyLoader';
import Auth from 'screens/Auth';
import Home from 'screens/Home';
import Subscription from 'screens/Subscription';
import HowItWork from 'screens/HowItWork';
import MyAccount from 'screens/MyAccount';
import Profile from 'screens/Profile';

export const screenName = {
  Splash: 'Splash',
  MyFlash: 'MyFlash',
  MyLoader: 'MyLoader',
  Auth: 'Auth',
  Home: 'Home',
  Subscription: 'Subscription',
  HowItWork: 'HowItWork',
  MyAccount: 'MyAccount',
  Profile: 'Profile'
};

export function registerScreens() {
  Navigation.registerComponent(screenName.Splash, () => Splash);
  Navigation.registerComponent(screenName.Auth, () => Auth);
  Navigation.registerComponent(screenName.Home, () => Home);
  Navigation.registerComponent(screenName.Subscription, () => Subscription);
  Navigation.registerComponent(screenName.HowItWork, () => HowItWork);
  Navigation.registerComponent(screenName.MyAccount, () => MyAccount);
  Navigation.registerComponent(screenName.Profile, () => Profile);
  Navigation.registerComponent(screenName.MyFlash, () => MyFlash);
  Navigation.registerComponent(screenName.MyLoader, () => MyLoader);
}