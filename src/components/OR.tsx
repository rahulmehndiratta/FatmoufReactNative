import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {color, fontFamily, fontSize} from '@styles';
import {Utils} from '@Utils';

const OR = () => {
  return (
    <View style={styles.container}>
      <View style={styles.divider} />
      <View>
        <Text style={styles.tvOr}>OR</Text>
      </View>
      <View style={styles.divider} />
    </View>
  );
};

export default OR;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    color: color.shuttleGrey,
    marginTop: Utils.calculateHeight(40),
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: color.shuttleGrey,
  },
  tvOr: {
    textAlign: 'center',
    fontFamily: fontFamily.RobotoMedium,
    fontSize: fontSize.size_18,
    color: color.shuttleGrey,
    paddingHorizontal: 10,
  },
});
