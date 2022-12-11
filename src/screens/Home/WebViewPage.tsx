import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import MySafeArea from '@components/MySafeArea';
import { Utils } from '@Utils';
import { WebView } from 'react-native-webview';
import { color, fontSize } from '@styles';
import { screenName } from '@screenName';
import { NavigationComponentProps } from 'react-native-navigation';
export interface Props extends NavigationComponentProps {

}
const WebViewPage: React.FC<Props> = (props: any) => {
  const [email, setEmail] = useState('');
  useEffect(() => {
    console.log('props', props);
  }, [props]);



  return (

    <MySafeArea componentId={props.componentId} paddingHorizontal={0}>
      <WebView
        source={{ uri: props.propsData?.url ?? 'https://www.google.com' }}
        style={{ marginTop: 20 }}
      />
    </MySafeArea>

  );
};

export default WebViewPage;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: Utils.calculateHeight(40),
    flex: 8,
    // backgroundColor: 'red',
  },
  image: {
    width: Utils.calculateWidth(250),
    height: Utils.calculateHeight(250),
  },
  textFieldContainer: {
    marginTop: Utils.calculateHeight(20),
  },
  socialLoginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',

    width: '80%',
  },
  socialLoginIcon: {
    borderRadius: 50,

    shadowColor: color.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,
    // marginLeft: Utils.calculateWidth(20),
  },
});
