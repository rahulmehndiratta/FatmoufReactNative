import {
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {Utils} from '@Utils';
import {color, fontFamily, fontSize} from '@styles';
import {Navigator} from '@Navigator';

export interface Props {
  backgroundColor?: string;
  title?: string;
  isHideBack?: boolean;
  rightIcon?: ImageSourcePropType;
  leftIcon?: any;
  leftIconPress?: any;
  rightIconPress?: null | ((event: GestureResponderEvent) => void) | undefined;
  rightTitlePress?: null | ((event: GestureResponderEvent) => void) | undefined;
  titleColor?: string;
  componentId: any;
  centerIcon?: ImageSourcePropType;
  prevScreenName?: any;
  tintColor?: any;
  rightTitle?: any;
}
const AppBar: React.FC<Props> = props => {
  let {
    backgroundColor,
    title,
    rightIcon,
    titleColor,
    leftIcon,
    isHideBack,
    componentId,
    leftIconPress,
    rightIconPress,
    rightTitle,
    rightTitlePress,
    centerIcon,
    prevScreenName,
    tintColor,
  } = props;
  return (
    <View
      style={{
        paddingHorizontal: Utils.calculateWidth(5),
        height: centerIcon ? undefined : Utils.calculateHeight(56),
        backgroundColor: backgroundColor ?? color.appBar,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
          flexDirection: 'row',
          // backgroundColor: 'red',
        }}>
        {!isHideBack && (
          <Pressable
            style={{padding: 5, flexDirection: 'row'}}
            onPress={() => {
              leftIcon ? leftIconPress() : Navigator.setPop(componentId);
            }}>
            <Image
              resizeMode="contain"
              source={leftIcon ?? require('@images/back_arrow.png')}
              style={{height: 20, width: 20}}
            />
            <Text style={styles.tvBackTitle}>{prevScreenName ?? 'Back'}</Text>
          </Pressable>
        )}
      </View>

      <View style={{flexGrow:0 , justifyContent: 'center', alignItems: 'center'}}>
        {centerIcon && (
          <Image
            resizeMode="cover"
            style={styles.ivCenter}
            source={centerIcon}
          />
        )}

        {title && (
          <Text
            style={{
              color: titleColor ?? color.white,
              fontFamily: fontFamily.Medium,
              fontSize: fontSize.size_16,
            }}>
            {title ?? ''}
          </Text>
        )}
      </View>

      <View
        style={{
          flex: 1,
          // backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}>
        {rightTitle && <Text  style={styles.tvBackTitle} onPress={rightTitlePress}>{rightTitle}</Text>}
        {rightIcon && (
          <Pressable style={{padding: 5}} onPress={rightIconPress}>
            <Image
              resizeMode="contain"
              source={rightIcon}
              style={{height: 20, width: 20, tintColor: tintColor}}
            />
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  ivCenter: {
    height: 60,
    width: 60,
    backgroundColor: color.black,
    borderRadius: 40,
    tintColor: color.black,
    shadowColor: '#63F4F766',
  },
  screenName: {
    fontSize: fontSize.size_14,
    color: color.white,
    fontFamily: fontFamily.Medium,
  },
  tvBackTitle: {
    fontFamily: fontFamily.Medium,
    fontSize: fontSize.size_14,
    color: color.white,
    textDecorationLine: 'underline',
    textDecorationColor: 'red',
  },
});
