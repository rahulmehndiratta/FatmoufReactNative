import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Divider from './Divider';
import CustomButton from './CustomButton';
import { Utils } from '@Utils';
import { color, fontFamily } from '@styles';
import ImageCropPicker from 'react-native-image-crop-picker';
interface Props {
  modalShow?: boolean;
  setModalShow?: any;
  imageItem?: any;
}
const ModalView: React.FC<Props> = (props: any) => {
  const { modalShow, setModalShow, imageItem } = props;

  const [imageData, setImageData] = useState([]);
  const onSelectImage = (image: any) => {
    // setImageData([]);
    // console.log('image', image);
    // var arr: any = JSON.parse(JSON.stringify(imageData));
    // arr.push(image);
    // console.log('imageARR', arr);

    // setImageData(arr);

    // let arr: any = [];
    // const source = image.path;
    const newImage = {
      id: Date.now(),
      path: image.path,
      width: image.width,
      height: image.height,
      mime: image.mime,
    };
    // arr.push(newImage);
    console.log('addd image', newImage, image);
    // setImageData(arr);
    imageItem(newImage);

    // setUpdateImages(arr)
  };

  const takePhotoFromCamera = () => {
    ImageCropPicker.openCamera({
      // width: 300,
      // height: 400,
      cropping: true,
    }).then(image => {
      console.log('cam chala', image);
      setModalShow(false);
      onSelectImage(image);
    });
  };

  const choosePhotoFromLibrary = () => {
    ImageCropPicker.openPicker({
      //   multiple: true,
      // width: 300,
      // height: 400,
      cropping: true,
    }).then(image => {
      //   let arr: any = [];
      //   image.map(item => {
      //     console.log('lib img', item);
      //     arr.push(item);
      //   });
      //   console.log('imageArr', arr);

      //   imageItem(arr);
      setModalShow(false);
      onSelectImage(image);
    });
  };

  return (
    <Modal animationType="slide" transparent={true} visible={modalShow}>
      <View style={styles.centeredView}>
        <View style={[styles.modalView, {}]}>
          <Text style={styles.modalHeadingText}>Select Image</Text>
          <Divider borderStyle={'solid'} borderColor={'#00000029'} />
          <Pressable
            style={{ marginTop: Utils.calculateHeight(20) }}
            onPress={() => {
              takePhotoFromCamera();
              //   setModalShow(false);
            }}>
            <Text style={styles.cancelTextStyle}>Take Photo..</Text>
          </Pressable>
          <Pressable
            style={[{ marginVertical: Utils.calculateHeight(15) }]}
            onPress={() => {
              choosePhotoFromLibrary();
            }}>
            <Text style={styles.cancelTextStyle}>Choose from library..</Text>
          </Pressable>

          <CustomButton
            onPress={() => {
              setModalShow(false);
            }}
            title={'Cancel'}
            marginTop={0}
          />
        </View>
      </View>
    </Modal>
  );
};

export default ModalView;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(100, 100, 100, 0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    paddingVertical: Utils.calculateHeight(15),
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
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },

  buttonClose: {
    backgroundColor: '#2196F3',
  },
  cancelTextStyle: {
    color: color.appBar,
    fontFamily: fontFamily.Bold,
    textAlign: 'center',
    // paddingHorizontal: Utils.calculateWidth(100),
  },
  modalHeadingText: {
    marginBottom: Utils.calculateHeight(5),
    textAlign: 'center',
    fontFamily: fontFamily.SemiBold,
    color: color.black,
  },
});
