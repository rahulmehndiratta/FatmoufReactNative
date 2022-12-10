import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MySafeArea from '@components/MySafeArea';
interface Props {}
const BlockAccount: React.FC<Props> = (props: any) => {
  return (
    <MySafeArea
      title=""
      prevScreenName="Setting"
      componentId={props.componentId}></MySafeArea>
  );
};

export default BlockAccount;

const styles = StyleSheet.create({});
