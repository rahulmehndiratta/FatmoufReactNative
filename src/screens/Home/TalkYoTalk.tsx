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
const TalkYoTalk: React.FC<Props> = (props: any) => {
  const [email, setEmail] = useState('');

  const renderItem = ({item, index}) => {
    return (
      <View style={[styles.shadowBox, {margin: 5, padding: 5}]}>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 5,
            marginVertical: 5,
          }}>
          <Image source={require('@images/logo.png')} style={styles.image} />

          <Text style={styles.textTitle}>Rahul Sharma</Text>

          <Image
            style={{height: 20, width: 20, alignSelf: 'center'}}
            resizeMode={'contain'}
            source={require('@images/menu-dots.png')}
          />
        </View>
      </View>
    );
  };
  return (
    <MySafeArea
      componentId={props.componentId}
      title="Talk Yo Talk"
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

export default TalkYoTalk;

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
    borderRadius: 2,
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
  textTitle: {
    fontSize: fontSize.size_14,
    flex: 1,
    alignSelf: 'center',
    marginLeft: 8,
  },
  textSubTitle: {fontSize: fontSize.size_12},
});
