import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ClickableImage from './ClickableImage';
interface Props {
  onPress: any;
}
const ColseModal: React.FC<Props> = (props: any) => {
  const {onPress} = props;
  return (
    <ClickableImage
      source={require('@images/remove.png')}
      onPress={onPress}
      style={{alignSelf: 'flex-end', margin: 20}}
    />
  );
};

export default ColseModal;
