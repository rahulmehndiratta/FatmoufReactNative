import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Modal} from 'react-native-navigation';
import {Utils} from '@Utils';
import {color} from '@styles';
import OutLineButton from './outLineButton';
import CustomTextInput from './CustomTextInput';
import CustomButton from './CustomButton';
interface Props {
  visible: any;
  inVisible: any;
  value?: string;
  setValue?: any;
}
const WithdrawalModal: React.FC<Props> = (props: any) => {
  const {visible, inVisible, value, setValue} = props;

  return (
    <Modal
      onRequestClose={() => {
        inVisible();
      }}
      visible={visible}
      animationType="slide"
      transparent={true}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <CustomTextInput
            value={value}
            onChangeText={(text: any) => setValue(text)}
            placeholder={'Name'}
            keyBoardType={'defalut'}
          />
          <CustomTextInput
            value={value}
            onChangeText={(text: any) => setValue(text)}
            placeholder={'Amount'}
            keyBoardType={'defalut'}
            marginTop={Utils.calculateHeight(0)}
          />
          <CustomTextInput
            value={value}
            onChangeText={(text: any) => setValue(text)}
            placeholder={'Account Number'}
            keyBoardType={'defalut'}
            marginTop={Utils.calculateHeight(0)}
          />
          <CustomTextInput
            value={value}
            onChangeText={(text: any) => setValue(text)}
            placeholder={'Confirm Account Number'}
            keyBoardType={'defalut'}
            marginTop={Utils.calculateHeight(0)}
          />
          <CustomTextInput
            value={value}
            onChangeText={(text: any) => setValue(text)}
            placeholder={'Routing Number'}
            keyBoardType={'defalut'}
            marginTop={Utils.calculateHeight(0)}
          />

          <View
            style={{
              flexDirection: 'row',
              //   paddingHorizontal: 10,
              justifyContent: 'space-between',
              width: '100%',
            }}>
            <CustomButton
              title="Confirm"
              onPress={() => {}}
              width={'48%'}
              height={Utils.calculateHeight(35)}
              boderRadius={5}
              backgroundColor={color.blue}
            />
            <CustomButton
              title="Cancel"
              onPress={() => {
                inVisible();
              }}
              width={'48%'}
              height={Utils.calculateHeight(35)}
              boderRadius={5}
              backgroundColor={color.redPrimary}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default WithdrawalModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(100, 100, 100, 0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    padding: Utils.calculateHeight(20),
    borderRadius: 10,
    width: '85%',
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
