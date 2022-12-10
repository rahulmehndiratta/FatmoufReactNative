import React, { useState } from 'react';
import { StyleSheet, Text, TextInput } from 'react-native';
import { NavigationComponentProps } from 'react-native-navigation';
import MySafeArea from '@components/MySafeArea';
import CustomButton from '@components/CustomButton';
import ClickableImage from '@components/ClickableImage';
import { color, fontFamily, fontSize } from '@styles';
import MyTextInput from '@components/MyTextInput';
import { Utils } from '@Utils';
import { Navigator } from '@Navigator';
import { screenName } from '@screenName';

export interface Props extends NavigationComponentProps { }

const JoinGroup: React.FC<Props> = props => {
  const [groupName, setGroupName] = useState('')
  const [description, setDescriptionText] = useState('')
  return (
    <MySafeArea componentId={props.componentId}>
      <CustomButton
        onPress={() => {
          Navigator.setPush(props.componentId, screenName.Chat)
        }}
        title={'Join Group'} />

      <Text style={styles.heading}>Group Image</Text>

      <ClickableImage
        resizeMode={'cover'}
        source={require('@images/logo.png')}
        containerStyle={{ marginTop: 10 }}
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


    </MySafeArea>
  );
};

export default JoinGroup;

const styles = StyleSheet.create({
  heading: {
    color: color.black,
    fontSize: fontSize.size_16,
    marginTop: 10,
    fontFamily: fontFamily.Bold
  }
});
