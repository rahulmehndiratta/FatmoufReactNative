import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationComponentProps} from 'react-native-navigation';
import MySafeArea from '@components/MySafeArea';
import Divider from '@components/Divider';
import {color, fontFamily, fontSize} from '@styles';
import {Navigator} from '@Navigator';
import {screenName} from '@screenName';
import {Utils} from '@Utils';

export interface Props extends NavigationComponentProps {
  propsData?: any;
}
const Profile: React.FC<Props> = props => {
  const {propsData} = props;
  useEffect(() => {
    console.log('propsData', props);
  }, [props]);
  const renderButton = () => {
    return (
      <View
        style={{
          height: 60,
          width: 70,
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 10,
        }}>
        <Image
          source={require('@images/participant-challenge.png')}
          style={{
            height: 40,
            width: 40,
            borderRadius: 50,
            marginTop: -50,
            backgroundColor: color.appBar,
          }}></Image>
        <Text
          style={{
            fontSize: fontSize.size_10,
            fontFamily: fontFamily.Medium,
            textAlign: 'center',
            color: color.black,
          }}>
          My Challange
        </Text>
      </View>
    );
  };

  const renderAcceptChallangeButton = () => {
    return (
      <View
        style={{
          height: 60,
          width: 70,
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 10,
        }}>
        <Image
          source={require('@images/handshake.png')}
          style={{
            height: 40,
            width: 40,
            borderRadius: 50,
            marginTop: -50,
            backgroundColor: color.appBar,
          }}></Image>
        <Text
          style={{
            fontSize: fontSize.size_10,
            fontFamily: fontFamily.Medium,
            textAlign: 'center',
            color: color.black,
          }}>
          Accepted Challange
        </Text>
      </View>
    );
  };

  const renderRatingButton = () => {
    return (
      <View
        style={{
          height: 60,
          width: 70,
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 10,
        }}>
        <Image
          source={require('@images/star.png')}
          style={{
            height: 40,
            width: 40,
            borderRadius: 50,
            marginTop: -50,
            backgroundColor: color.appBar,
          }}></Image>
        <Text
          style={{
            fontSize: fontSize.size_10,
            fontFamily: fontFamily.Medium,
            textAlign: 'center',
            color: color.black,
          }}>
          Rating
        </Text>
      </View>
    );
  };
  return (
    <MySafeArea
      componentId={props.componentId}
      rightIcon={require('@images/setting-white.png')}
      padding={0}
      paddingHorizontal={0}
      isHideBack={propsData ? false : true}
      prevScreenName={propsData ?? ''}
      rightIconPress={() => {
        Navigator.setPush(props.componentId, screenName.Setting);
      }}>
      <View
        style={{
          backgroundColor: color.appBar,
          height: 200,
          marginTop: 2,
          alignItems: 'center',
        }}>
        <View style={styles.shadowBox}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
            }}>
            <Pressable
              onPress={() => {
                Navigator.setPush(props.componentId, screenName.Wallet);
              }}>
              <Image
                source={require('@images/wallet.png')}
                resizeMode={'contain'}
                style={{
                  height: Utils.calculateHeight(30),
                  width: Utils.calculateWidth(30),
                  margin: 8,
                }}
              />
            </Pressable>
            <Image
              source={require('@images/logo.png')}
              style={{
                height: 100,
                width: 100,
                borderWidth: 4,
                borderColor: color.grayText,
                borderRadius: 50,
                marginTop: -50,
                backgroundColor: color.appBar,
              }}></Image>
            <Pressable
              onPress={() => {
                Navigator.setPush(props.componentId, screenName.UpdateProfile);
              }}>
              <Image
                source={require('@images/edit.png')}
                style={{height: 20, width: 20, margin: 8}}
              />
            </Pressable>
          </View>
          <Text style={[styles.textData, {fontFamily: fontFamily.Bold}]}>
            Rahul Sharma
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              resizeMode={'contain'}
              source={require('@images/location-black.png')}
              style={{height: 15, width: 15}}
            />
            <Text style={styles.textData}>Shastri Nagar,Dadabari Kota</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              resizeMode={'contain'}
              source={require('@images/email.png')}
              style={{height: 15, width: 15}}
            />
            <Text style={styles.textData}>as43516@gmail.com</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              resizeMode={'contain'}
              source={require('@images/telephone.png')}
              style={{height: 15, width: 15}}
            />
            <Text style={styles.textData}>9876543210</Text>
          </View>
        </View>
      </View>
      <View style={{flexDirection: 'row', marginTop: 100, alignSelf: 'center'}}>
        {renderButton()}
        {renderAcceptChallangeButton()}
        {renderRatingButton()}
      </View>

      <View style={styles.bottomView}>
        <View style={styles.bottomSubView}>
          <Text style={styles.bottomText}>Played Challange's:</Text>
          <Text style={styles.bottomText}>40</Text>
        </View>
        <View style={styles.bottomSubView}>
          <Text style={styles.bottomText}>Challange's Won:</Text>
          <Text style={styles.bottomText}>3</Text>
        </View>
        <View style={styles.bottomSubView}>
          <Text style={styles.bottomText}>Challange's Lost:</Text>
          <Text style={styles.bottomText}>4</Text>
        </View>
      </View>
    </MySafeArea>
  );
};

export default Profile;

const styles = StyleSheet.create({
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
    height: 150,
    width: '80%',
    marginTop: 100,
    alignItems: 'center',
    borderRadius: 2,
  },
  textData: {
    fontSize: fontSize.size_12,
    fontFamily: fontFamily.Regular,
    color: color.black,
    margin: 3,
  },
  bottomView: {
    backgroundColor: color.appBar,
    borderRadius: 5,
    padding: 10,
    width: '90%',
    alignSelf: 'center',
  },
  bottomSubView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 5,
  },
  bottomText: {fontSize: fontSize.size_14, color: color.white},
});
