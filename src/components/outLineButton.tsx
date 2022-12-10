import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {color, fontSize} from '@styles';
import {Utils} from '@Utils';
interface Props {
  onPress?: any;
  image?: any;
  text?: any;
  alignSelf?: any;
  width?: any;
  underLine?: any;
  textMarginHorizontal?: any;
  textColor?: any;
  borderColor?: any;
  textSize?: any;
  textFamily?: any;
  marginTop?: any;
}
const OutLineButton: React.FC<Props> = (props: any) => {
  const {
    onPress,
    image,
    text,
    alignSelf,
    width,
    underLine,
    textMarginHorizontal,
    textColor,
    borderColor,
    textSize,
    textFamily,
    marginTop,
  } = props;
  return (
    <>
      {image ? (
        <Pressable
          style={{
            flexDirection: 'row',
            paddingVertical: 5,
            paddingHorizontal: 10,
            borderColor: borderColor ?? color.bottomBar,
            borderWidth: 1,
            borderRadius: 8,
            width: width,
            marginTop: marginTop ?? Utils.calculateHeight(20),
            justifyContent: 'space-between',
            alignSelf: alignSelf ?? 'flex-end',
            alignItems: 'center',
          }}
          onPress={onPress}>
          {image && (
            <Image
              source={image}
              resizeMode={'contain'}
              style={{
                width: Utils.calculateWidth(15),
                height: Utils.calculateHeight(15),
              }}
            />
          )}
          <Text
            style={{
              color: textColor ?? color.bottomBar,
              textDecorationLine: underLine ?? 'underline',
              marginHorizontal: textMarginHorizontal,

              alignSelf: 'center',
              fontSize: textSize ?? fontSize.size_15,
            }}>
            {text}
          </Text>
        </Pressable>
      ) : (
        <Pressable
          style={{
            paddingVertical: 5,
            paddingHorizontal: 10,
            borderColor: borderColor ?? color.bottomBar,
            borderWidth: 1,
            borderRadius: 8,
            width: width,
            marginTop: marginTop ?? Utils.calculateHeight(20),
            alignSelf: alignSelf ?? 'flex-end',
            alignItems: 'center',
          }}
          onPress={onPress}>
          <Text
            style={{
              color: textColor ?? color.bottomBar,
              textDecorationLine: underLine ?? 'underline',
              marginHorizontal: textMarginHorizontal,
              fontSize: textSize ?? fontSize.size_15,
              fontFamily: textFamily,
            }}>
            {text}
          </Text>
        </Pressable>
      )}
    </>
  );
};

export default OutLineButton;

const styles = StyleSheet.create({});
