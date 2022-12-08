import {Modal, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {color, fontFamily, fontSize} from '@styles';
import {Utils} from '@Utils';
import CustomButton from './CustomButton';
interface Props {
  visible: any;
  inVisible: any;
}
const Filter: React.FC<Props> = (props: any) => {
  const {visible, inVisible} = props;

  return (
    <Modal
      onRequestClose={() => {
        inVisible();
      }}
      animationType="slide"
      transparent={true}
      visible={visible}>
      <View style={styles.modalContainerView}>
        <View
          style={{
            width: '100%',
            height: '80%',
            backgroundColor: color.filterView,
            paddingBottom: 20,
            // padding: 10,
          }}>
          <Text
            style={{
              fontSize: fontSize.size_20,
              fontFamily: fontFamily.SemiBold,
              color: color.black,
              margin: 10,
            }}>
            Filter & Sort
          </Text>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'space-evenly',
            }}>
            <View
              style={{
                // flex: 1,
                backgroundColor: color.white,
                height: '100%',
                width: '48%',
              }}></View>
            <View
              style={{
                // flex: 1,
                backgroundColor: color.white,
                height: '100%',
                width: '48%',
              }}></View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 10,
              justifyContent: 'space-evenly',
            }}>
            <CustomButton
              title="Reset"
              onPress={() => {}}
              width={'45%'}
              boderRadius={5}
              backgroundColor={color.red}
            />
            <CustomButton
              title="Apply"
              onPress={() => {}}
              width={'45%'}
              boderRadius={5}
              backgroundColor={color.green}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Filter;

const styles = StyleSheet.create({
  modalContainerView: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(100, 100, 100, 0.5)',
  },
  modalView: {
    alignItems: 'center',
    backgroundColor: color.white,
    marginHorizontal: Utils.calculateWidth(20),
    borderRadius: 5,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
});
