import {
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {color, fontFamily, fontSize} from '@styles';
import {Utils} from '@Utils';
export interface Props {
  title: string;
  backgroundColor?: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  marginTop?: any;
  marginBottom?: any;
  iconLeft?: ImageSourcePropType;
  width?: any;
  height?: any;
  boderRadius?: any;
  textColor?: any;
  textSize?: any;
}

const CustomButton: React.FC<Props> = props => {
  const {
    title,
    backgroundColor,
    onPress,
    marginTop,
    marginBottom,
    iconLeft,
    width,
    height,
    boderRadius,
    textColor,
    textSize,
  } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        styles.btnContainer,
        {
          backgroundColor: backgroundColor ?? color.select,
          marginTop: marginTop ?? Utils.calculateHeight(20),
          marginBottom: marginBottom,
          width: width ?? '100%',
          height: height ?? Utils.calculateHeight(50),
          borderRadius: boderRadius ?? 20,
        },
      ]}
      onPress={onPress}>
      {iconLeft && (
        <Image style={styles.ivImage} source={iconLeft} resizeMode="contain" />
      )}
      <Text
        style={[
          styles.tvTitle,
          {
            color: textColor ?? color.white,
            fontSize: textSize ?? fontSize.size_15,
          },
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    // height: Utils.calculateHeight(50),
  },
  tvTitle: {
    fontSize: fontSize.size_15,
    fontFamily: fontFamily.SemiBold,
  },
  ivImage: {
    height: 24,
    width: 24,
    marginEnd: Utils.calculateWidth(5),
  },
});
