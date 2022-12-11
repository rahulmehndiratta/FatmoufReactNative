import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Modal} from 'react-native-navigation';
import {color, fontFamily, fontSize} from '@styles';
import {Utils} from '@Utils';
import ColseModal from './ColseModal';
import CustomButton from './CustomButton';
interface Props {
  visible: any;
  inVisible: any;
  item: any;
  onPress: any;
}
const ChatModal: React.FC<Props> = (props: any) => {
  const {visible, inVisible, item, onPress} = props;
  const renderItem = (item: any, index: any) => {
    return (
      <Pressable
        style={{
          flex: 1,
          borderBottomWidth: 1,
          width: '100%',
          padding: 5,
          borderBottomColor: color.grayText,
        }}
        onPress={() => {
          onPress(item.id);
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontFamily: fontFamily.Regular,
            fontSize: fontSize.size_22,
            color: color.blue,
          }}>
          {item.value}
        </Text>
      </Pressable>
    );
  };
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
            // height: '40%',
            backgroundColor: color.white,
            // paddingBottom: 10,
            borderRadius: 10,

            // alignItems: 'center',
            // padding: 10,
          }}>
          <Text
            style={{
              textAlign: 'center',
              marginVertical: Utils.calculateHeight(15),
            }}>
            Please Choose any option
          </Text>
          <FlatList
            data={item}
            renderItem={({item, index}) => renderItem(item, index)}
          />
        </View>
        <CustomButton
          title="Cancel"
          backgroundColor={color.white}
          textColor={color.blue}
          textSize={fontSize.size_22}
          onPress={() => {
            inVisible();
          }}
          marginTop={Utils.calculateHeight(10)}
        />
      </View>
    </Modal>
  );
};

export default ChatModal;

const styles = StyleSheet.create({
  modalContainerView: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(100, 100, 100, 0.5)',
    alignItems: 'center',
    paddingHorizontal: Utils.calculateHeight(10),
    paddingBottom: Utils.calculateHeight(5),
  },
});
