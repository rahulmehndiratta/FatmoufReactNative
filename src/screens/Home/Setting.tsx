import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  SectionList,
  Linking,
} from 'react-native';
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
const Setting: React.FC<Props> = (props: any) => {
  const [data, setData] = useState([
    {
      title: 'Account',
      data: [
        {
          id: 1,
          title: 'Notification',
        },
        {
          id: 2,
          title: 'Prime Membership $1.99',
        },
        {
          id: 3,
          title: 'Restore Purchase',
        },
      ],
    },
    {
      title: 'Support',
      data: [
        {
          id: 4,
          title: 'Block',
        },
        {
          id: 5,
          title: 'My Channel',
        },
        {
          id: 6,
          title: 'About us',
        },
        {
          id: 7,
          title: 'Terms & condition',
        },
        {
          id: 8,
          title: 'Privacy Policy',
        },
        {
          id: 9,
          title: 'Send a Feedback',
        },
        {
          id: 10,
          title: 'Share with Friends',
        },
        {
          id: 11,
          title: 'Delete Account',
        },
        {
          id: 12,
          title: 'Logout',
        },
      ],
    },
  ]);

  const renderItem = ({item, index}) => {
    return (
      <Pressable
        onPress={() => {
          if (item?.id == 8) {
          } else if (item?.id == 7) {
            Navigator.setPush(props.componentId, screenName.WebViewPage, {
              title: 'Privacy Policy',
              url: 'https://www.google.com',
            });
          } else if (item?.id == 5) {
            Linking.openURL('https://www.youtube.com/@fatmoufapp8753');
          } else if (item?.id == 10) {
            Utils.onShare();
          } else if (item?.id == 4) {
            Navigator.setPush(props.componentId, screenName.BlockAccount);
          }
        }}
        style={{}}>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 5,
            marginVertical: 5,
            borderBottomWidth: 0.5,
            borderColor: color.grayText,
            paddingVertical: 10,
          }}>
          <Text style={styles.textTitle}>{item?.title}</Text>

          {item?.title == 'Delete Account' ? (
            <Image
              style={{height: 20, width: 20}}
              resizeMode={'contain'}
              source={require('@images/delete.png')}
            />
          ) : item?.title == 'Logout' ? (
            <Image
              style={{height: 20, width: 20}}
              resizeMode={'contain'}
              source={require('@images/logout.png')}
            />
          ) : (
            <Image
              style={{height: 20, width: 20}}
              resizeMode={'contain'}
              source={require('@images/arrow-right-black_fliped.png')}
            />
          )}
        </View>
      </Pressable>
    );
  };
  return (
    <MySafeArea
      componentId={props.componentId}
      title="Setting"
      isScroll
      prevScreenName="Back">
      <SectionList
        sections={data}
        renderItem={renderItem}
        renderSectionHeader={({section}) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
      />
    </MySafeArea>
  );
};

export default Setting;

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
    color: color.black,
    fontFamily: fontFamily.Regular,
  },
  textSubTitle: {fontSize: fontSize.size_12},
  sectionHeader: {
    fontSize: fontSize.size_16,
    fontFamily: fontFamily.SemiBold,
    color: color.black,
    paddingVertical: 10,
    marginLeft: 5,
    borderBottomWidth: 0.5,
    borderColor: color.grayText,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
