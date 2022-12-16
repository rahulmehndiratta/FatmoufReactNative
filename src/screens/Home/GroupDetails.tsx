import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import {NavigationComponentProps} from 'react-native-navigation';
import MySafeArea from '@components/MySafeArea';
import CustomButton from '@components/CustomButton';
import ClickableImage from '@components/ClickableImage';
import {color, fontFamily, fontSize} from '@styles';
import MyTextInput from '@components/MyTextInput';
import {Utils} from '@Utils';
import {Navigator} from '@Navigator';
import {screenName} from '@screenName';

export interface Props extends NavigationComponentProps {}
const GroupDetails: React.FC<Props> = (props: any) => {
  const [groupName, setGroupName] = useState('');
  const [description, setDescriptionText] = useState('');

  useEffect(() => {
    console.log('Props', props);
  }, [props]);

  const renderMemberItems = () => {
    return (
      <View
        style={{
          backgroundColor: color.white,
          elevation: 2,
          flexDirection: 'row',
          paddingHorizontal: 10,
          marginHorizontal: 2,
          paddingVertical: 10,
          marginTop: 10,
          alignItems: 'center',
          marginBottom: 10,
        }}>
        <ClickableImage
          onPress={() => {
            let data = {
              isBack: true,
              backTitle: props.propsData ?? 'Group Details',
            };
            Navigator.setPush(props.componentId, screenName.Profile, data);
          }}
          resizeMode={'cover'}
          source={require('@images/participant-challenge.png')}
          containerStyle={{}}
          style={{
            height: 50,
            width: 50,
            backgroundColor: 'white',
            borderRadius: 50,
          }}
        />

        <View style={{marginLeft: 20}}>
          <Text style={{color: color.black}}>liiipooo51</Text>
          <View
            style={{flexDirection: 'row', marginTop: 8, alignItems: 'center'}}>
            <ClickableImage
              resizeMode={'cover'}
              source={require('@images/location.png')}
              containerStyle={{}}
              style={{
                height: 15,
                width: 10,
                //backgroundColor: 'white',
                // borderRadius: 50,
              }}
            />
            <Text style={{marginLeft: 10}}>Miami,miami-dade county</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <MySafeArea
      isScroll
      title={props.propsData ?? 'Group Details'}
      componentId={props.componentId}>
      {/* <CustomButton
                onPress={() => {
                    Navigator.setPush(props.componentId, screenName.Chat)
                }}
                title={'Join Group'} /> */}

      <Text style={styles.heading}>Group Image</Text>

      <ClickableImage
        resizeMode={'contain'}
        source={require('@images/app.png')}
        containerStyle={{marginTop: 10}}
        style={{
          height: 200,
          width: '100%',
          backgroundColor: 'white',
          borderRadius: 10,
        }}
      />

      <Text style={styles.heading}>Group Name</Text>
      <MyTextInput
        value={groupName}
        marginTop={Utils.calculateHeight(20)}
        placeholder={''}
        keyboardType={'default'}
        onChangeText={text => setGroupName(text)}
      />

      <Text style={styles.heading}>Group Description</Text>
      <TextInput
        value={description}
        multiline={true}
        numberOfLines={4}
        placeholder={'description'}
        onChangeText={text => {
          setDescriptionText(text);
          //setShowError(false);
        }}
        style={{
          height: Utils.calculateHeight(120),
          borderColor: color.grayText,
          borderWidth: 1,
          marginTop: 10,
          borderRadius: 5,
          // marginHorizontal: Utils.calculateWidth(20),
          textAlignVertical: 'top',
          width: '100%',
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 10,
          // backgroundColor: 'red',
        }}>
        <Text style={[styles.heading, {marginTop: 0}]}>Group Members</Text>
        {props.propsData && (
          <ClickableImage
            onPress={() => {
              Navigator.setPush(props.componentId, screenName.AddParticipate);
            }}
            resizeMode={'contain'}
            source={require('@images/add-participant.png')}
            containerStyle={{}}
            style={{
              height: 30,
              width: 30,
              backgroundColor: 'white',
              borderRadius: 50,
            }}
          />
        )}
      </View>
      <FlatList
        data={[{}, {}]}
        contentContainerStyle={{marginBottom: 20}}
        renderItem={({item}) => renderMemberItems(item)}
      />
    </MySafeArea>
  );
};

export default GroupDetails;

const styles = StyleSheet.create({
  heading: {
    color: color.black,
    fontSize: fontSize.size_16,
    marginRight: 10,
    marginTop: 10,
    fontFamily: fontFamily.Bold,
  },
});
