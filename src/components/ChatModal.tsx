import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Modal} from 'react-native-navigation';
import {color, fontFamily, fontSize} from '@styles';
import {Utils} from '@Utils';
import ColseModal from './ColseModal';
import CustomButton from './CustomButton';
import Divider from "@components/Divider";

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
          width: '100%',
          padding: 12,
          borderBottomWidth: 1,
          borderBottomColor: color.grayText,
        }}
        onPress={() => {
          onPress(item.id);
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontFamily: fontFamily.Regular,
            fontSize: fontSize.size_16,
            color: color.persianBlue,
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
            backgroundColor: color.white,
            borderRadius: 10,
          }}>
          <Text
            style={{
              textAlign: 'center',
              marginVertical: Utils.calculateHeight(15),
            }}>
            Please Select an Option
          </Text>
          <Divider borderColor={color.grayText}/>
          <FlatList
            data={item}
            renderItem={({item, index}) => renderItem(item, index)}
          />
        </View>
        <CustomButton
          title="Cancel"
          height={50}
          boderRadius={7}
          backgroundColor={color.white}
          textColor={color.persianBlue}
          textSize={fontSize.size_16}
          onPress={() => {
            inVisible();
          }}
          marginTop={Utils.calculateHeight(10)}
          marginBottom={Utils.calculateHeight(10)}
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
