import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {color, fontFamily, fontSize} from '@styles';
import {Utils} from '@Utils';
interface Props {
  text: string;
  onPress: any;
  marginTop?: any;
  textColor?: any;
  textSize?: any;
  textDecoration?: any;
  alignSelf?: any;
  marginLeft?: any;
  extraText?: any;
  fontWeight?: any;
}
const ClickableText: React.FC<Props> = (props: any) => {
  const {
    text,
    onPress,
    marginTop,
    textColor,
    textDecoration,
    textSize,
    alignSelf,
    marginLeft,
    extraText,
    fontWeight,
  } = props;
  return (
    <Pressable
      onPress={onPress}
      style={{
        marginTop: marginTop ?? Utils.calculateHeight(20),
        alignSelf: alignSelf ?? 'flex-end',
        marginLeft: marginLeft ?? Utils.calculateHeight(10),
      }}>
      <Text>
        {extraText}
        <Text
          style={[
            styles.textStyle,
            {
              textDecorationLine: textDecoration ?? 'underline',
              fontSize: textSize ?? fontSize.size_12,
              fontWeight: fontWeight,
              color: textColor ?? color.black,
            },
          ]}>
          {text}
        </Text>
      </Text>
    </Pressable>
  );
};

export default ClickableText;

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: fontFamily.Regular,
  },
});
