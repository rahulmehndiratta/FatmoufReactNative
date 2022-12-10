import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Dimensions,
} from 'react-native';
import React, {useRef, useState} from 'react';
import MySafeArea from '@components/MySafeArea';
import {Utils} from '@Utils';
import {color, fontFamily, fontSize} from '@styles';
import Divider from '@components/Divider';
import Carousel from 'react-native-snap-carousel';
import {Navigator} from '@Navigator';
import {screenName} from '@screenName';
import ReViewModal from 'screens/Auth/reviewModal';
import {ImageSlider} from 'react-native-image-slider-banner';
import MyImageSlider from '@components/MyImageSlider';
const itemWidth = Dimensions.get('window').width;
interface Props {}
const CompetitiveDetail: React.FC<Props> = (props: any) => {
  const [modalVisible, setModalVisible] = useState(false);

  const icon = (onPress: any, image: any, title: any) => {
    return (
      <Pressable
        onPress={onPress}
        style={{
          alignItems: 'center',
          marginTop: 10,
          // backgroundColor: 'green',
          width: Utils.calculateWidth(100),
        }}>
        <Image
          source={image}
          resizeMode={'contain'}
          style={{
            width: 40,
            height: 40,
            borderRadius: 50,
            // marginTop: title == 'Rating' ? -50 : 0,
            backgroundColor: color.appBar,
          }}
        />
        <Text
          style={{
            color: color.black,
            fontSize: fontSize.size_12,
          }}>
          <Text style={{alignSelf: 'flex-start', color: color.black}}>
            {title}
          </Text>
        </Text>
      </Pressable>
    );
  };
  return (
    <MySafeArea
      title="Competitive Detail"
      componentId={props.componentId}
      prevScreenName={'Back'}
      padding={Utils.calculateHeight(20)}
      isScroll>
      <View style={styles.container}>
        <Text style={styles.dateStr}>15 oct 2022</Text>
        <View style={styles.headerContainer}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1568700942090-19dc36fab0c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
            }}
            resizeMode={'contain'}
            style={styles.profileImage}
          />
          <View
            style={{
              flex: 1,
              marginLeft: Utils.calculateWidth(10),
              //   backgroundColor: 'red',

              alignItems: 'flex-start',
            }}>
            <Text style={{marginLeft: Utils.calculateWidth(5)}}>Rahul</Text>
            <View
              style={{
                flexDirection: 'row',
                marginTop: Utils.calculateHeight(5),
                alignSelf: 'flex-start',
                // backgroundColor: 'green',
              }}>
              <Image
                source={require('@images/location.png')}
                resizeMode={'contain'}
                style={{
                  width: Utils.calculateWidth(20),
                  height: Utils.calculateHeight(20),
                }}
              />
              <Text>Chandigarh, Chandigarh</Text>
            </View>
          </View>
          <Pressable
            style={{
              alignSelf: 'flex-end',
            }}>
            <Image
              source={require('@images/support.png')}
              resizeMode={'contain'}
              style={{
                width: Utils.calculateWidth(25),
                height: Utils.calculateHeight(25),
                tintColor: color.appBar,
              }}
            />
          </Pressable>
        </View>
        <Text style={{alignSelf: 'flex-start', color: color.appBar}}>
          Entry Fees:200
        </Text>
        <View style={{height: 200}}>
          <MyImageSlider />
        </View>

        <Text style={[styles.dateStr, {alignSelf: 'flex-start'}]}>
          Start on 15 oct 2022 End on 17 Nov 2022
        </Text>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 5,
            paddingHorizontal: 10,
            borderColor: color.appBar,
            borderWidth: 1,
            borderRadius: 8,
            width: '100%',
            marginTop: Utils.calculateHeight(20),
            justifyContent: 'space-between',
          }}>
          <Text style={{alignSelf: 'flex-start', color: color.appBar}}>
            Middle Man
          </Text>
          <Image
            source={require('@images/middle_man.jpeg')}
            resizeMode={'contain'}
            style={{
              width: Utils.calculateWidth(25),
              height: Utils.calculateHeight(25),
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 5,
            paddingHorizontal: 10,
            width: '100%',
            marginTop: Utils.calculateHeight(10),
            justifyContent: 'space-between',
          }}>
          <View>
            <Text>Challenge Description</Text>
            <Text>Ch</Text>
          </View>
          <View
            style={{
              backgroundColor: color.appBar,
              paddingHorizontal: 20,
              paddingVertical: 2,
              borderRadius: 5,
              height: 25,
            }}>
            <Text style={{color: color.white}}>Fat Mouf</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '60%',
            flexWrap: 'wrap',
          }}>
          {icon(
            () => {
              Navigator.setPush(props.componentId, screenName.ViewParticipate);
            },
            require('@images/view-participants.png'),
            'View Participate',
          )}
          {icon(
            () => {
              Navigator.setPush(props.componentId, screenName.AddActivity);
            },
            require('@images/view-activity.png'),
            'View Activity',
          )}
          {icon(
            () => {
              setModalVisible(true);
            },
            require('@images/star.png'),
            'Rating',
          )}
        </View>

        <ReViewModal
          visible={modalVisible}
          invisible={() => setModalVisible(false)}
        />
      </View>
    </MySafeArea>
  );
};

export default CompetitiveDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    borderColor: 'gray',
    alignItems: 'center',
    borderRadius: Utils.calculateHeight(10),
    shadowColor: color.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 10,
    padding: 10,
    marginVertical: Utils.calculateHeight(20),
  },
  dateStr: {
    fontFamily: fontFamily.Medium,
    fontSize: fontSize.size_15,
    alignSelf: 'flex-end',
  },
  profileImage: {
    width: Utils.calculateWidth(60),
    height: Utils.calculateHeight(60),
    borderRadius: 40,
    alignSelf: 'flex-start', // backgroundColor: 'red',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red',
    width: '100%',
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderColor: color.boderColor,
  },
});
