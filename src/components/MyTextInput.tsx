import {
  Image,
  ImageSourcePropType,
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import {color, fontFamily, fontSize} from '@styles';
import {Utils} from '@Utils';
import CustomButton from './CustomButton';

export interface Props {
  placeholder?: any;
  value: any;
  height?: any;
  multiline?: boolean | undefined;
  editable?: boolean | undefined;
  maxLength?: number | undefined;
  marginTop?: any;
  keyboardType?: KeyboardTypeOptions | undefined;
  numberOfLines?: number | undefined;
  onChangeText?: ((text: string) => void) | undefined;
  leftIcon?: ImageSourcePropType;
  iconWidth?: any;
  iconHeight?: any;
  iconColor?: any;
  secureTextEntry?: boolean;
  width?: any;
}

const MyTextInput: React.FC<Props> = props => {
  let {
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
    leftIcon,
    iconWidth,
    iconHeight,
    iconColor,
    secureTextEntry,
    width,
  } = props;

  return (
    <View
      style={[
        styles.container,
        {
          marginTop: marginTop,
          minHeight: height ?? Utils.calculateHeight(50),
          width: width ?? '100%',
        },
      ]}>
      {leftIcon && (
        <Image
          source={leftIcon}
          resizeMode="contain"
          style={[
            styles.ivLeftIcon,
            {
              height: iconHeight ?? Utils.calculateHeight(25),
              width: iconWidth ?? Utils.calculateWidth(20),
              tintColor: iconColor ?? color.black,
            },
          ]}
        />
      )}
      <TextInput
        style={[
          styles.inputContainer,
          {textAlignVertical: multiline === true ? 'top' : 'auto'},
        ]}
        multiline={multiline}
        numberOfLines={numberOfLines ?? 1}
        maxLength={maxLength}
        editable={editable}
        placeholderTextColor={color.black}
        placeholder={placeholder}
        value={value}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default MyTextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // borderWidth: 1,
    backgroundColor: color.white,
    // borderColor: color.borderBlack,
    alignItems: 'center',
    borderRadius: Utils.calculateHeight(10),
    shadowColor: color.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,
    paddingHorizontal: 10,
  },

  inputContainer: {
    // backgroundColor:'red',
    flex: 1,
    height: '100%',
    borderRadius: Utils.calculateHeight(10),
    color: color.black,
    fontSize: fontSize.size_16,
    fontFamily: fontFamily.Regular,
    paddingHorizontal: Utils.calculateHeight(20),
  },
  tvLabel: {},
  ivLeftIcon: {
    marginStart: Utils.calculateWidth(7),
  },
});
