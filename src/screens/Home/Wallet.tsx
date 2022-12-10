import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import MySafeArea from '@components/MySafeArea';
import {Utils} from '@Utils';
import {color, fontFamily, fontSize, fontWeight} from '@styles';
import Filter from '@components/filter';
import OutLineButton from '@components/outLineButton';
import Divider from '@components/Divider';
import AddMoneyModal from '@components/AddMoneyModal';
import {Navigator} from '@Navigator';
import {screenName} from '@screenName';
interface Props {}
const Wallet: React.FC<Props> = (props: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [addMoneyModal, setAddMoneyModal] = useState(false);
  const [amount, setAmount] = useState('');
 
  const filter = () => {
    return (
      <OutLineButton
        text={'Filter'}
        image={require('@images/filter.png')}
        underLine={'none'}
        textMarginHorizontal={Utils.calculateWidth(15)}
        onPress={() => {
          setModalVisible(true);
        }}
      />
    );
  };
  const renderItem = (item: any, index: any) => {
    return (
      <>
        <View style={styles.renderComponent}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              // backgroundColor: 'red',
              width: '100%',
            }}>
            <Text style={{color: color.green}}>Sucess</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('@images/cash-withdrawal.png')}
                resizeMode={'contain'}
                style={{
                  height: Utils.calculateHeight(25),
                  width: Utils.calculateWidth(25),
                }}
              />
              <Text style={[styles.dateStr, {alignSelf: 'flex-start'}]}>
                15 oct 2022
              </Text>
            </View>
          </View>
          <Text>HI My Name is Nilesh</Text>
          <Text>HI My Name is Nilesh</Text>
        </View>
        <Divider
          marginTop={Utils.calculateHeight(10)}
          borderColor={color.grayText}
        />
      </>
    );
  };

  return (
    <MySafeArea
      title="Wallet"
      componentId={props.componentId}
      paddingHorizontal={Utils.calculateWidth(20)}>
      {filter()}
      <View
        style={{alignItems: 'center', marginTop: Utils.calculateHeight(20)}}>
        <Image
          source={require('@images/wallet.png')}
          resizeMode={'contain'}
          style={{
            height: Utils.calculateHeight(50),
            width: Utils.calculateWidth(50),
            margin: 8,
          }}
        />
        <Text
          style={{
            fontSize: fontSize.size_18,
            fontFamily: fontFamily.Bold,
            color: color.black,
            marginTop: Utils.calculateHeight(10),
          }}>
          $3.700000000000001
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <OutLineButton
            text={'Withdraw'}
            onPress={() => {
              Navigator.setPush(props.componentId, screenName.Withdrawal);
            }}
          />
          <OutLineButton
            text={'Add Money'}
            onPress={() => {
              console.log('AddMOney Modal');

              setAddMoneyModal(true);
            }}
          />
        </View>
      </View>
      <Divider
        marginTop={Utils.calculateHeight(60)}
        borderColor={color.grayText}
      />
      <View>
        <FlatList
          data={[{}, {}, {}]}
          renderItem={({item, index}) => renderItem(item, index)}
        />
      </View>
      <AddMoneyModal
        visible={addMoneyModal}
        inVisible={() => setAddMoneyModal(false)}
        value={amount}
        setValue={(text: any) => {
          setAmount(text);
        }}
      />
      <Filter
        visible={modalVisible}
        inVisible={() => setModalVisible(false)}

        // imageDataSend={imagefromfeedback}
        // status={isChecked ? '1' : '0'}
      />
    </MySafeArea>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  renderComponent: {
    backgroundColor: color.white,
    width: '100%',
    // paddingBottom: 15,
    borderWidth: 1,
    borderColor: color.borderRed,
    marginTop: Utils.calculateHeight(20),
    shadowColor: color.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 10,
    padding: 10,
    borderRadius: 10,
  },
  dateStr: {
    fontFamily: fontFamily.Medium,
    fontSize: fontSize.size_15,
    alignSelf: 'flex-end',
  },
});
