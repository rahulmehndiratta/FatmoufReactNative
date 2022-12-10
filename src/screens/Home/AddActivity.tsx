import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MySafeArea from '@components/MySafeArea';
interface Props {}
const AddActivity: React.FC<Props> = (props: any) => {
  return (
    <MySafeArea
      title="Add Activity"
      prevScreenName="Back"
      componentId={props.componentId}></MySafeArea>
  );
};

export default AddActivity;

const styles = StyleSheet.create({});
