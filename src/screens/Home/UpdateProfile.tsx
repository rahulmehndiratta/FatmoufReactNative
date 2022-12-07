import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import MySafeArea from '@components/MySafeArea';
import ProfileImage from '@components/ProfileImage';
import {Utils} from '@Utils';
import MyTextInput from '@components/MyTextInput';
import {color} from '@styles';
import ClickableText from '@components/ClickableText';
import PrivacyPolicy from '@components/PrivacyPolicy';
import CustomButton from '@components/CustomButton';
interface Props {}
const UpdateProfile: React.FC<Props> = (props: any) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [userName, setUserName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isCheck, setIsCheck] = useState(false);
  return (
    <MySafeArea componentId={props.componentId} title="Update Profile" isScroll>
      <View style={styles.container}>
        <ProfileImage />
        <MyTextInput
          value={firstName}
          marginTop={Utils.calculateHeight(20)}
          placeholder={'Full Name'}
          keyboardType={'default'}
          onChangeText={text => setFirstName(text)}
        />
        <MyTextInput
          value={lastName}
          marginTop={Utils.calculateHeight(20)}
          placeholder={'Last Name'}
          keyboardType={'default'}
          onChangeText={text => setLastName(text)}
        />
        <MyTextInput
          value={phoneNumber}
          marginTop={Utils.calculateHeight(20)}
          placeholder={'Phone Number(optional'}
          keyboardType={'number-pad'}
          onChangeText={text => setPhoneNumber(text)}
        />
        <MyTextInput
          value={email}
          marginTop={Utils.calculateHeight(20)}
          placeholder={'Email address'}
          keyboardType={'email-address'}
          onChangeText={text => setEmail(text)}
        />
        <MyTextInput
          value={userName}
          marginTop={Utils.calculateHeight(20)}
          placeholder={'User Name'}
          keyboardType={'default'}
          onChangeText={text => setUserName(text)}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            flex: 1,
            width: '100%',
          }}>
          <MyTextInput
            value={city}
            marginTop={Utils.calculateHeight(20)}
            placeholder={'City'}
            keyboardType={'default'}
            onChangeText={text => setCity(text)}
            width={'45%'}
          />
          <MyTextInput
            value={state}
            marginTop={Utils.calculateHeight(20)}
            placeholder={'State'}
            keyboardType={'default'}
            onChangeText={text => setState(text)}
            width={'45%'}
          />
        </View>

        <MyTextInput
          value={password}
          marginTop={Utils.calculateHeight(20)}
          placeholder={'Password'}
          keyboardType={'default'}
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
        />

        <MyTextInput
          value={confirmPassword}
          marginTop={Utils.calculateHeight(20)}
          placeholder={'Confirm Password'}
          keyboardType={'default'}
          onChangeText={text => setConfirmPassword(text)}
          secureTextEntry={true}
        />

        <CustomButton
          title="Save"
          width={'60%'}
          marginTop={Utils.calculateHeight(40)}
        />
      </View>
    </MySafeArea>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingVertical: Utils.calculateHeight(20),
  },
});
