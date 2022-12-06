import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
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
const Notification: React.FC<Props> = (props: any) => {
  const [email, setEmail] = useState('');

  const renderItem = ({item, index}) => {
    return (
      <View style={[styles.shadowBox, {margin: 5, padding: 5}]}>
        <Text
          style={{
            alignSelf: 'flex-end',
            marginBottom: 5,
            fontSize: fontSize.size_10,
          }}>
          15 Oct 2022
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Image source={require('@images/logo.png')} style={styles.image} />

          <View style={{flex: 1, marginLeft: 8, marginBottom: 10}}>
            <Text style={styles.textTitle}>Rahul Sharma</Text>
            <Text style={styles.textSubTitle}>
              Rahul Sharmasdafdsfsdfsdfsdfsdfdfsdfdsfasdfsdfdsfsdfdsfsadfdsf
            </Text>
          </View>
          <Pressable
            onPress={() => {
              Navigator.setPush(
                props.componentId,
                screenName.CompetitiveDetail,
              );
            }}>
            <Image
              style={{height: 20, width: 20}}
              resizeMode={'contain'}
              source={require('@images/arrow-right-black_fliped.png')}
            />
          </Pressable>
        </View>
      </View>
    );
  };
  return (
    <MySafeArea
      componentId={props.componentId}
      title="Notifcation"
      isHideBack
      rightIcon={require('@images/setting-white.png')}
      isScroll>
      <FlatList
        renderItem={renderItem}
        data={[{id: 1}, {id: 2}, {id: 3}]}
        style={{marginVertical: Utils.calculateHeight(10)}}
      />
    </MySafeArea>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: Utils.calculateHeight(40),
    flex: 8,
    // backgroundColor: 'red',
  },
  image: {
    height: Utils.calculateHeight(50),
    width: Utils.calculateHeight(50),
    borderRadius: Utils.calculateHeight(50) / 2,
    backgroundColor: 'green',
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
  shadowBox: {
    backgroundColor: color.white,
    shadowColor: color.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,
  },
  textTitle: {fontSize: fontSize.size_14},
  textSubTitle: {fontSize: fontSize.size_12},
});
