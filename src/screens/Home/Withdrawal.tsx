import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import MySafeArea from '@components/MySafeArea';
import {color, fontFamily, fontSize} from '@styles';
import {Utils} from '@Utils';
import Divider from '@components/Divider';
import {Navigator} from '@Navigator';
import {screenName} from '@screenName';
import ClickableImage from '@components/ClickableImage';
import WithdrawalModal from '@components/WithdrawalModal';
interface Props {}
const Withdrawal: React.FC<Props> = (props: any) => {
  const [withdrawalModal, setWithdrawalModal] = useState(false);
  return (
    <MySafeArea
      title=""
      componentId={props.componentId}
      prevScreenName={'Wallet'}
      paddingHorizontal={Utils.calculateWidth(0)}>
      <View>
        <View style={{flexDirection: 'row', paddingTop: 20}}>
          <Text style={styles.balance}>Wallet Balance</Text>
          <Text style={[styles.balance, {color: color.appBar}]}>: $103.70</Text>
        </View>
      </View>
      <Divider
        borderColor={color.grayText}
        marginTop={Utils.calculateHeight(10)}
      />
      <ClickableImage
        source={require('@images/add-purple.png')}
        style={styles.addIcon}
        containerStyle={styles.addIconContainer}
        resizeMode="contain"
        onPress={() => setWithdrawalModal(true)}
      />
      <WithdrawalModal
        visible={withdrawalModal}
        inVisible={() => {
          setWithdrawalModal(false);
        }}
      />
    </MySafeArea>
  );
};

export default Withdrawal;

const styles = StyleSheet.create({
  balance: {
    fontSize: fontSize.size_15,
    fontFamily: fontFamily.Bold,
    color: color.black,
  },
  addIconContainer: {
    position: 'absolute',
    bottom: 20,
    right: 10,
  },
  addIcon: {
    height: Utils.calculateHeight(35),
    width: Utils.calculateHeight(35),
  },
});
