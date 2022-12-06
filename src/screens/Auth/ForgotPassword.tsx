import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import MySafeArea from '@components/MySafeArea';
import {Utils} from '@Utils';
import TextFiled from '@components/TextFiled';
import MyTextInput from '@components/MyTextInput';
import ClickableText from '@components/ClickableText';
import {Navigator} from '@Navigator';
import CustomButton from '@components/CustomButton';
import {color, fontFamily, fontSize} from '@styles';
import {screenName} from '@screenName';

interface Props {}
const ForgotPassword: React.FC<Props> = (props: any) => {
  const [email, setEmail] = useState('');
  return (
    <MySafeArea
      componentId={props.componentId}
      title="Forgot Password"
      prevScreenName="Login">
      <View style={styles.container}>
        <Image source={require('@images/logo.png')} style={styles.image} />
        <Text
          style={{
            fontSize: fontSize.size_15,
            fontFamily: fontFamily.Regular,
            textAlign: 'center',
            marginTop: Utils.calculateHeight(20),
          }}>
          Enter your register email address to receive the access code for
          resetting your password
        </Text>
        <MyTextInput
          value={email}
          leftIcon={require('@images/email.png')}
          marginTop={Utils.calculateHeight(20)}
          placeholder={'Email Address'}
          keyboardType={'email-address'}
          onChangeText={text => setEmail(text)}
        />

        <CustomButton onPress={() => {}} title="SEND PASSWORD RESET LINK" />
      </View>
    </MySafeArea>
  );
};

export default ForgotPassword;

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
  socialLoginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  socialLoginIcon: {
    // backgroundColor: 'red',
    borderRadius: 50,

    shadowColor: color.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,
    marginLeft: Utils.calculateWidth(20),
  },
});
