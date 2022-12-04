import {View,StyleSheet} from 'react-native';
import React from 'react';
import {color} from '@styles';
import { Utils } from '@Utils';

interface Props {
  borderStyle?: 'solid' | 'dotted' | 'dashed';
  borderWidth?: number;
  borderRadius?: number;
  borderColor?: string;
  marginTop?: any;
  marginBottom?: any;
  marginStart?: any;
  marginEnd?: any;
  marginVertical?: number | string | undefined;
  marginHorizontal?: number | string | undefined;
  borderTopWidth?: any;
  triangle?:any
}

const Divider: React.FC<Props> = props => {
  let {
    borderStyle,
    borderWidth,
    borderRadius,
    borderColor,
    marginTop,
    marginBottom,
    marginStart,
    marginEnd,
    marginHorizontal,
    marginVertical,
    borderTopWidth,
    triangle
  } = props;

  return (
    <>
    <View
      style={{
        borderStyle: borderStyle ? borderStyle : 'solid',
        borderWidth: borderWidth ? borderWidth : 1,
        borderTopWidth: borderTopWidth ? borderTopWidth : 0,
        borderRadius: borderRadius ? borderRadius : 0.1,
        borderColor: borderColor ? borderColor : color.shuttleGrey,
        marginTop: marginTop ? marginTop : 0,
        marginBottom: marginBottom ? marginBottom : 0,
        marginStart: marginStart ? marginStart : 0,
        marginEnd: marginEnd ? marginEnd : 0,
        marginVertical: marginVertical ?? 0,
        marginHorizontal: marginHorizontal,
        
      }}
      />
      {
          triangle&&
        <View style={[styles.triangle]} />
      }
      </>
  );
};

export default Divider;
const styles = StyleSheet.create({
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 12,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#64686D',
    transform: [{rotate: '180deg'}],
    marginLeft:Utils.calculateWidth(20)
  },
})
