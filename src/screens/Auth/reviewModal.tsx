import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  Keyboard,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {Modal} from 'react-native-navigation';
import Divider from '@components/Divider';
import {Rating} from 'react-native-ratings';
import {color, fontFamily, fontSize} from '@styles';
import {Utils} from '@Utils';
import CustomButton from '@components/CustomButton';
interface Props {
  visible: boolean;
  invisible: any;
}
const ReViewModal: React.FC<Props> = (props: any) => {
  let {
    visible,
    invisible,
    item,
    imageDataSend,
    status,
    // onsubmitPress

    //callMethod,
  } = props;
  const reviewModalRef = useRef<any>();
  const [modalVisible, setModalVisible] = useState(visible);
  const [showError, setShowError] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [rating, setRating] = useState('');
  const [reviewText, setReviewText] = useState('');

  function ratingCompleted(rating: any) {
    console.log('Rating is: ' + rating);
    setRating(rating);
  }
  return (
    <Modal
      onRequestClose={() => {
        invisible();
      }}
      animationType="slide"
      transparent={true}
      visible={visible}>
      <Pressable
        style={styles.modalContainerView}
        onPress={() => {
          Keyboard.dismiss();
        }}>
        <View style={styles.modalView}>
          <Text
            style={{
              fontSize: fontSize.size_20,
              fontFamily: fontFamily.SemiBold,
              color: color.black,
              textAlign: 'center',
              marginVertical: Utils.calculateHeight(20),
            }}>
            Kindly Rate about your last Challenge
          </Text>

          <Divider borderStyle={'solid'} borderColor={color.boderColor} />

          <Rating
            type="star"
            ratingCount={5}
            imageSize={30}
            // showRating
            onFinishRating={ratingCompleted}
            style={{paddingVertical: 10}}
          />

          <TextInput
            value={reviewText}
            multiline={true}
            numberOfLines={4}
            onChangeText={text => {
              setReviewText(text);
              setShowError(false);
            }}
            style={{
              height: Utils.calculateHeight(100),
              borderColor: color.boderColor,
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
              marginHorizontal: Utils.calculateWidth(20),
              textAlignVertical: 'top',
              width: '100%',
            }}
          />
          {showError && (
            <Text
              style={{
                marginHorizontal: 20,
                color: 'red',
                fontSize: fontSize.size_14,
                fontFamily: fontFamily.Bold,
                textAlign: 'center',
              }}>
              Please give a feedback
            </Text>
          )}

          {/* <View
          style={{
            // backgroundColor: 'red',
            paddingHorizontal: Utils.calculateWidth(20),
            flexDirection: 'row',
            height: 100,
          }}> */}
          {/* <View
            style={{
              flexDirection: 'row',
              //backgroundColor: 'red',
              marginHorizontal: Utils.calculateWidth(20),
              justifyContent: 'space-between',
            }}></View> */}
          {/* </View> */}
          <CustomButton
            title="Submit"
            onPress={() => {
              invisible();
            }}
            width={'80%'}
            backgroundColor={color.appBar}
            boderRadius={6}
          />
        </View>
      </Pressable>
    </Modal>
  );
};

export default ReViewModal;

const styles = StyleSheet.create({
  modalContainerView: {
    flex: 1,
    justifyContent: 'center',
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
