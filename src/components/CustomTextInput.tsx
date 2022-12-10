import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {Utils} from '@Utils';
import {color} from '@styles';
interface Props {
  value: any;
  onChangeText?: any;
  keyBoardType?: any;
  placeholder?: any;
  marginTop?: any;
}
const CustomTextInput: React.FC<Props> = (props: any) => {
  let {value, onChangeText, keyBoardType, placeholder, marginTop} = props;
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      style={{
        height: Utils.calculateHeight(30),
        padding: 0,
        borderWidth: 1,
        borderColor: color.grayText,
        marginTop: marginTop ?? Utils.calculateHeight(20),
        textAlign: 'center',
      }}
      placeholder={placeholder}
      keyboardType={keyBoardType ?? 'default'}
    />
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({});
