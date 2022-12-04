import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import MySafeArea from '@components/MySafeArea';
import {Utils} from '@Utils';
import TextFiled from '@components/TextFiled';
import MyTextInput from '@components/MyTextInput';
import ClickableText from '@components/ClickableText';
interface Props {}
const Login: React.FC<Props> = (props: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <MySafeArea componentId={props.componentId} title="Login" isHideBack>
      <View style={styles.container}>
        <Image source={require('@images/logo.png')} style={styles.image} />

        <MyTextInput
          value={email}
          leftIcon={require('@images/email.png')}
          marginTop={Utils.calculateHeight(20)}
          placeholder={'Email Address'}
          keyboardType={'email-address'}
          onChangeText={text => setEmail(text)}
        />

        <MyTextInput
          value={password}
          leftIcon={require('@images/password.png')}
          marginTop={Utils.calculateHeight(20)}
          placeholder={'Password'}
          keyboardType={'default'}
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
        />
        <ClickableText
          text="Forgot you Password?"
          onPress={() => {}}
          textDecoration={'none'}
          marginTop={Utils.calculateHeight(8)}
        />
      </View>
    </MySafeArea>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: Utils.calculateHeight(40),
    flex: 1,
  },
  image: {
    width: Utils.calculateWidth(200),
    height: Utils.calculateHeight(200),
  },
  textFieldContainer: {
    marginTop: Utils.calculateHeight(20),
  },
});
