import {
  GestureResponderEvent,
  Image,
  ImageBackground,
  ImageSourcePropType,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useRef } from 'react';
import AppBar from '@components/AppBar';
import { color, fontSize } from '@styles';
import { Utils } from '@Utils';
export interface Props {
  children?: React.ReactNode;
  isHideAppBar?: boolean;
  appBackgroundColor?: string;
  backgroundColor?: string;
  title?: string;
  isHideBack?: boolean;
  rightIcon?: ImageSourcePropType;
  leftIcon?: any;
  titleColor?: string;
  componentId: any;
  isScroll?: boolean;
  padding?: any;
  leftIconPress?: any;
  sourceBg?: ImageSourcePropType;
  centerIcon?: ImageSourcePropType;
  rightIconPress?: null | ((event: GestureResponderEvent) => void) | undefined;
  rightTitlePress?: null | ((event: GestureResponderEvent) => void) | undefined;
  prevScreenName?: string;
  paddingHorizontal?: any;
  tintColor?:any
  rightTitle?:any
}

const MySafeArea: React.FC<Props> = props => {
  let {
    isHideAppBar,
    appBackgroundColor,
    backgroundColor,
    title,
    isHideBack,
    rightIcon,
    leftIcon,
    titleColor,
    componentId,
    isScroll,
    padding,
    leftIconPress,
    rightIconPress,
    rightTitlePress,
    sourceBg,
    centerIcon,
    prevScreenName,
    paddingHorizontal,
    tintColor,
    rightTitle
  } = props;

  const _scrollRender = () => {
    return isScroll === true ? (
      <ScrollView scrollEnabled={isScroll} showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            paddingHorizontal:
              paddingHorizontal ?? Utils.calculateWidth(10),
          }}>
          {props.children}
        </View>
      </ScrollView>
    ) : (
      _viewRender()
    );
  };

  const _viewRender = () => {
    return (
      <View
        style={{
          flex: 1,
          paddingHorizontal: paddingHorizontal
            ?? Utils.calculateWidth(10),
        }}>
        {props.children}
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: backgroundColor ?? 'transparent',
      }}>
      {!isHideAppBar && (
        <AppBar
          backgroundColor={appBackgroundColor}
          title={title}
          isHideBack={isHideBack}
          rightIcon={rightIcon}
          leftIcon={leftIcon}
          titleColor={titleColor}
          componentId={componentId}
          leftIconPress={leftIconPress}
          rightIconPress={rightIconPress}
          centerIcon={centerIcon}
          prevScreenName={prevScreenName}
          rightTitlePress={rightTitlePress}
          rightTitle={rightTitle}
          tintColor={tintColor}
        />
      )}
      {_scrollRender()}
      {/* {sourceBg ? _bgImage() : _scrollRender()} */}
    </SafeAreaView>
  );
};

export default MySafeArea;

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
  },
});
