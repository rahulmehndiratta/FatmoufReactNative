import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import MyTextInput from './MyTextInput';
import {Utils} from '@Utils';
import {color} from '@styles';

const Search = () => {
  const [value, setValue] = useState('');
  return (
    <MyTextInput
      value={value}
      leftIcon={require('@images/search.png')}
      iconHeight={20}
      iconWidth={20}
      marginTop={Utils.calculateHeight(20)}
      height={40}
      placeholder={'Search'}
      onChangeText={(text: any) => setValue(text)}
      backgroundColor={color.grayText}
      iconColor={'gray'}
    />
  );
};

export default Search;

const styles = StyleSheet.create({});
