import {Alert, FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {NavigationComponentProps} from 'react-native-navigation';
import MySafeArea from '@components/MySafeArea';
import ClickableImage from '@components/ClickableImage';
import {color, fontFamily, fontSize} from '@styles';
import {Utils} from '@Utils';
import ChatModal from '@components/ChatModal';
import {Navigator} from '@Navigator';
import {screenName} from '@screenName';

export interface Props extends NavigationComponentProps {
  propsData: any;
}

const Chat: React.FC<Props> = props => {
  const {propsData} = props;

  const [msg, setMsg] = useState('');
  const [chatModal, setChatModal] = useState(false);
  const chatModalItem = [
    {
      id: 0,
      value: 'Report',
    },
    {
      id: 1,
      value: 'Exit Group',
    },
    {
      id: 2,
      value: 'Delete Group',
    },
    {
      id: 3,
      value: 'Edit Group',
    },
    {
      id: 4,
      value: 'Group Details',
    },
  ];
  const _renderItems = ({item, index}) => {
    console.log('chatindex', index);
    return (
      <View
        style={[
          styles.mainContainer,
          {
            alignSelf: index == 0 ? 'flex-end' : 'flex-start',

            marginRight: index == 0 ? 5 : 0,
          },
        ]}>
        <Text
          style={{
            fontSize: fontSize.size_11,
            marginLeft: 20,
            marginRight: index == 0 ? 20 : null,
            alignSelf: index == 0 ? 'flex-end' : 'flex-start',
          }}>
          last year
        </Text>

        <View style={styles.msgContainer}>
          <ClickableImage
            containerStyle={{
              position: 'absolute',
              // backgroundColor: 'green',
              elevation: 10,
              top: -10,
              left: index == 0 ? null : -5,
              right: index == 0 ? -5 : null,
            }}
            style={styles.ivProfile}
            source={{
              uri: 'https://www.seekpng.com/png/full/60-604032_face-businessman-png-dummy-images-for-testimonials.png',
            }}
          />
          <Text style={[styles.tvMessage, {}]}>
            Hellogfghgfdgrgsgdgdgdrgrffdgrttggtvstdhffgh
          </Text>
        </View>
        <Text
          style={{
            marginLeft: 10,
            fontSize: fontSize.size_12,
            marginRight: index == 0 ? 20 : null,
            alignSelf: index == 0 ? 'flex-end' : 'flex-start',
          }}>
          lilll 8:31Am
        </Text>
      </View>
    );
  };

  return (
    <MySafeArea
      paddingHorizontal={0}
      componentId={props.componentId}
      rightIcon={require('@images/menu-dots.png')}
      rightIconPress={() => {
        setChatModal(true);
      }}
      tintColor={color.white}>
      <FlatList
        contentContainerStyle={{paddingLeft: 5}}
        data={[1, 2, 3]}
        renderItem={_renderItems}
      />

      <View
        style={{
          backgroundColor: color.boderColor,
          flexDirection: 'row',
          alignItems: 'center',
          height: 60,
          justifyContent: 'space-between',
          paddingHorizontal: 10,
          marginBottom: 10,
        }}>
        <TextInput
          value={msg}
          multiline={true}
          numberOfLines={4}
          placeholder={'Write your message...'}
          onChangeText={text => {
            setMsg(text);
            //setShowError(false);
          }}
          style={{
            height: Utils.calculateHeight(50),
            borderColor: color.grayText,
            borderWidth: 1,
            marginTop: 10,
            //borderRadius: 5,
            // marginHorizontal: Utils.calculateWidth(20),
            textAlignVertical: 'center',
            width: '85%',
            backgroundColor: color.white,
            paddingLeft: 15,
          }}
        />

        <ClickableImage
          resizeMode={'cover'}
          source={require('@images/ic_activeSend.png')}
          containerStyle={{marginTop: 10}}
          style={{
            width: 30,
            height: 30,
          }}
        />
      </View>
      <ChatModal
        visible={chatModal}
        inVisible={() => setChatModal(false)}
        item={chatModalItem}
        onPress={id => {
          setChatModal(false)
          if (id === 3 || id === 4) {
            Navigator.setPush(props.componentId, screenName.GroupDetails);
          } else {
            Alert.alert('Alert!', 'Service coming soon..');
          }
        }}
      />
    </MySafeArea>
  );
};

export default Chat;

const styles = StyleSheet.create({
  mainContainer: {
    marginVertical: 20,
    flexWrap: 'wrap',
    // backgroundColor: 'red',
    // borderTopStartRadius:20
  },
  ivProfile: {
    height: 20,
    width: 20,
    borderWidth: 2,
    padding: 5,
    borderColor: color.white,
    borderRadius: 40,
  },
  msgContainer: {
    backgroundColor: color.appBar,
    padding: 10,
    borderRadius: 10,
    width: '60%',
  },
  tvMessage: {
    color: color.white,
    fontFamily: fontFamily.Medium,
    fontSize: fontSize.size_14,
  },
});
