import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import {Utils} from '@Utils';
import {color, fontFamily, fontSize} from '@styles';

export interface Props {
  label?: any;
  placeholder?: any;
  value: any;
  height?: any;
  multiline?: boolean | undefined;
  editable?: boolean | undefined;
  maxLength?: number | undefined;
  keyboardType?: KeyboardTypeOptions | undefined;
  numberOfLines?: number | undefined;
  onChangeText?: ((text: string) => void) | undefined;
  marginTop?: any;
}
const TextFiled: React.FC<Props> = props => {
  let {
    label,
    placeholder,
    value,
    onChangeText,
    multiline,
    numberOfLines,
    editable,
    maxLength,
    keyboardType,
    height,
    marginTop,
  } = props;
  return (
    <View>
      <TextInput
        style={[
          styles.inputContainer,
          {
            marginTop: marginTop,
            minHeight: 20,
            textAlignVertical: multiline === true ? 'top' : 'auto',
          },
        ]}
        multiline={multiline}
        numberOfLines={numberOfLines ?? 1}
        maxLength={maxLength}
        editable={editable}
        placeholder={placeholder}
        placeholderTextColor={color.grayText}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default TextFiled;

const styles = StyleSheet.create({
  inputContainer: {
    borderColor: color.borderColor,
    borderWidth: 1,
    padding: Utils.calculateHeight(10),
    borderRadius: Utils.calculateHeight(10),
    backgroundColor: color.backgroundColor,
    fontSize: fontSize.size_14,
    fontFamily: fontFamily.RobotoMedium,
    color: color.placeHolderColor,
    shadowColor: color.backgroundColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,
  },
});
