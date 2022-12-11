import {StyleSheet, Text, View, Modal, TextInput, FlatList} from 'react-native';
import React from 'react';
// import {Modal} from 'react-native-navigation';
import {Utils} from '@Utils';
import MyTextInput from './MyTextInput';
import {color, fontFamily} from '@styles';
import OutLineButton from './outLineButton';
import CustomTextInput from './CustomTextInput';
import ColseModal from './ColseModal';
interface Props {
  visible: any;
  inVisible: any;
  value?: string;
  setValue?: any;
}
const AddMoneyModal: React.FC<Props> = (props: any) => {
  let amountValue = ['$10.00', '$50.00', '$100.00'];
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
        <ColseModal
          onPress={() => {
            inVisible();
          }}
        />
        <View style={styles.modalView}>
          <Text>Please enter amount:</Text>
          <CustomTextInput
            value={value}
            onChangeText={(text: any) => setValue(text)}
            placeholder={'Amount'}
            keyBoardType={'number-pad'}
          />
          <Text>Either choose any option:</Text>
          <FlatList
            data={amountValue}
            renderItem={({item}) => {
              return (
                <OutLineButton
                  width={'100%'}
                  text={item}
                  textColor={color.black}
                  underLine={'none'}
                  textFamily={fontFamily.Bold}
                  marginTop={Utils.calculateHeight(10)}
                  onPress={() => {
                    setValue(item);
                  }}
                />
              );
            }}
          />
          <OutLineButton
            text={'ADD'}
            width={'100%'}
            underLine={'none'}
            borderColor={color.appBar}
            textColor={color.appBar}
            onPress={() => {
              inVisible();
              setValue('');
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default AddMoneyModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'rgba(100, 100, 100, 0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    padding: Utils.calculateHeight(10),
    borderRadius: 10,
    width: '85%',
    alignSelf: 'center',
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
