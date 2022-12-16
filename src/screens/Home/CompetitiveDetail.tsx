import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Dimensions,
  FlatList,
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
import ClickableImage from '@components/ClickableImage';
const itemWidth = Dimensions.get('window').width;
interface Props {}
const CompetitiveDetail: React.FC<Props> = (props: any) => {
  const [modalVisible, setModalVisible] = useState(false);

  const iconDetails = [
    {
      id: 0,
      title: 'View Participate',
      icon: require('@images/view-participants.png'),
    },
    {
      id: 1,
      title: 'View Activity',
      icon: require('@images/view-activity.png'),
    },
    {
      id: 2,
      title: 'Rating',
      icon: require('@images/star.png'),
    },
  ];
  const icon = (item: any, index: any) => {
    return (
      <Pressable
        onPress={() => {
          if (item.id == 0) {
            Navigator.setPush(props.componentId, screenName.ViewParticipate);
          } else if (item?.id == 1) {
            Navigator.setPush(props.componentId, screenName.ViewActivity);
          } else if (item?.id == 2) {
            setModalVisible(true);
          }
        }}
        style={{
          alignItems: 'center',
          marginTop: 10,
          // backgroundColor: 'green',
          width: Utils.calculateWidth(100),
          marginLeft: Utils.calculateWidth(10),
        }}>
        <Image
          source={item.icon}
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
            {item.title}
          </Text>
        </Text>
      </Pressable>
    );
  };
  return (
    <MySafeArea
      title="Competitive Details"
      componentId={props.componentId}
      prevScreenName={'Back'}
      padding={Utils.calculateHeight(20)}
      isScroll>
      <View style={styles.container}>
        <Text style={styles.dateStr}>15 oct 2022</Text>
        <View style={styles.headerContainer}>
          {/* <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1568700942090-19dc36fab0c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
            }}
            resizeMode={'contain'}
            style={styles.profileImage}
          /> */}
          <ClickableImage
            onPress={() => {
              let data = {
                isBack: true,
                backTitle: 'Competitve Details',
                hideTitle:true
              };
              Navigator.setPush(props.componentId, screenName.Profile, data);
            }}
            resizeMode={'cover'}
            source={{
              uri: 'https://images.unsplash.com/photo-1568700942090-19dc36fab0c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
            }}
            containerStyle={{}}
            style={{
              height: 50,
              width: 50,
              backgroundColor: 'white',
              borderRadius: 50,
            }}
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
        <Text
          style={{alignSelf: 'flex-start', color: color.appBar, marginTop: 5}}>
          Entry Fees:200
        </Text>
        <View style={{height: 200}}>
          <MyImageSlider />
        </View>

        <Text
          style={[styles.dateStr, {alignSelf: 'flex-start', marginTop: 10}]}>
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
            <Text
              style={{
                fontSize: fontSize.size_12,
                fontFamily: fontFamily.SemiBold,
                color: color.black,
              }}>
              Challenge Description
            </Text>
            <Text>i like central to will it all!!</Text>
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
        {/* <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '60%',
            flexWrap: 'wrap',
          }}> */}
        {/* {icon(
            () => {
              Navigator.setPush(props.componentId, screenName.ViewParticipate);
            },
            require('@images/view-participants.png'),
            'View Participate',
          )}
          {icon(
            () => {
              Navigator.setPush(props.componentId, screenName.ViewActivity);
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
          )} */}
        {/* </View> */}
        <FlatList
          data={iconDetails}
          numColumns={2}
          renderItem={({item, index}) => icon(item, index)}
        />
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
    width: 40,
    height: 40,
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
