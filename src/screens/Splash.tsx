import {Navigator} from '@Navigator';
import {screenName} from '@screenName';
import React, {useEffect} from 'react';
import {ImageBackground} from 'react-native';

const Splash = () => {
  useEffect(() => {
    setTimeout(() => {
      // Navigator.setRoot(screenName.Login);
      Navigator.setHome()
    }, 2000);
  }, []);

  return (
    <ImageBackground
      resizeMode={'cover'}
      style={{flex: 1}}
      source={require('@images/splash.png')}
    />
  );
};
export default Splash;
