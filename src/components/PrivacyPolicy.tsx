import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {color, fontFamily, fontSize} from '@styles';
import {Navigator} from '@Navigator';
import {screenName} from '@screenName';
import {Utils} from '@Utils';
export interface Props {
  marginTop: any;
  onTermAndCondition?: any;
  onPrivacyPolicy?: any;
}
const PrivacyPolicy: React.FC<Props> = (props: any) => {
  const {marginTop, onTermAndCondition, onPrivacyPolicy} = props;

  return (
    <View
      style={{
        marginTop: marginTop,
        alignItems: 'flex-start',
        // backgroundColor: 'red',
        paddingRight: Utils.calculateWidth(20),
        width: '85%',
      }}>
      <Text style={styles.tvLeft}>
        Agree to our{' '}
        <Text style={styles.tvRight} onPress={() => onTermAndCondition()}>
          Terms & Conditions
        </Text>{' '}
        and
      </Text>
      <Text
        style={styles.tvRight}
        onPress={() => {
          console.log('term');
          onPrivacyPolicy();
        }}>
        Privacy Policy
      </Text>
    </View>
  );
};

export default PrivacyPolicy;

const styles = StyleSheet.create({
  tvLeft: {
    fontSize: fontSize.size_14,
    fontFamily: fontFamily.Regular,
    color: color.black,
  },
  tvRight: {
    fontSize: fontSize.size_14,
    fontFamily: fontFamily.Regular,
    color: color.black,
    textDecorationLine: 'underline',
  },
});
