import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import MySafeArea from '@components/MySafeArea';
import {Utils} from '@Utils';
import TextFiled from '@components/TextFiled';
import MyTextInput from '@components/MyTextInput';
import ClickableText from '@components/ClickableText';
import {Navigator} from '@Navigator';
import CustomButton from '@components/CustomButton';
import {color, fontSize} from '@styles';
import {screenName} from '@screenName';
interface Props {}
const Login: React.FC<Props> = (props: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const socialLogin = (image: any, onPress?: any) => {
    return (
      <Pressable onPress={onPress} style={styles.socialLoginIcon}>
        <Image
          source={image}
          resizeMode={'contain'}
          style={{
            width: Utils.calculateWidth(50),
            height: Utils.calculateHeight(60),
          }}
        />
      </Pressable>
    );
  };
  return (
    <MySafeArea
      componentId={props.componentId}
      title="Login"
      isHideBack
      isScroll>
      <View style={styles.container}>
        <Image
          source={require('@images/logo.png')}
          style={styles.image}
          resizeMode={'contain'}
        />

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
          onPress={() => {
            Navigator.setPush(props.componentId, screenName.ForgotPassword);
          }}
          textDecoration={'none'}
          marginTop={Utils.calculateHeight(8)}
        />
        <CustomButton onPress={() => {}} title="Login" width={'80%'} />
      </View>
      <View
        style={{
          alignItems: 'center',
          paddingBottom: Utils.calculateHeight(20),
          justifyContent: 'flex-end',
          // backgroundColor: 'red',

          marginTop: Utils.calculateHeight(80),
        }}>
        <View style={styles.socialLoginContainer}>
          {socialLogin(require('@images/fb.png'))}
          {socialLogin(require('@images/gp.png'))}
          {socialLogin(require('@images/applelogo.png'))}
        </View>
        <ClickableText
          alignSelf={'center'}
          extraText={"Don't have any account? "}
          text={'Create Account !'}
          onPress={() => {
            Navigator.setPush(props.componentId, screenName.SignUp);
          }}
          textDecoration={'none'}
          fontWeight={'bold'}
          textSize={fontSize.size_16}
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
