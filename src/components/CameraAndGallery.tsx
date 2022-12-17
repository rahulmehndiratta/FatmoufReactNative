import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import CustomButton from '@components/CustomButton';
import ImageCropPicker from 'react-native-image-crop-picker';
import {Navigation} from 'react-native-navigation';
import {screenName} from '@screenName';
import {Utils} from '@Utils';

const CameraAndGallery = (props: any) => {
  const _openCamera = async () => {
    const result: any = await ImageCropPicker.openCamera({
      cropping: true,
      mediaType: 'photo',
    });
    await _dismissModel();

    if (result) {
      const arr = [
        {
          id: Utils._getRandomId(),
          path: result.path,
          mime: result.mime,
        },
      ];
      return props?.propsData?.getImage(arr);
    }
    // console.log(result);
  };

  const _openGallery = async () => {
    const result = await ImageCropPicker.openPicker({
      multiple: true,
      cropping: true,
      mediaType: 'photo',
      maxFiles: 5,
    });
    await _dismissModel();

    // console.log(result);
    if (result) {
      return props?.propsData?.getImage(result);
    }
  };

  const _dismissModel = () => {
     Navigation.dismissModal(screenName.CameraAndGallery);
  };

  return (
    <SafeAreaView style={[styles.container]}>
      <CustomButton
        title={'Camera'}
        backgroundColor={'white'}
        textColor={'black'}
        marginTop={0}
        onPress={() => _openCamera()}
      />
      <CustomButton
        title={'Gallery'}
        backgroundColor={'white'}
        textColor={'black'}
        marginTop={10}
        onPress={() => _openGallery()}
      />
      <CustomButton
        title={'Cancel'}
        backgroundColor={'white'}
        textColor={'black'}
        marginTop={20}
        onPress={() => _dismissModel()}
      />
    </SafeAreaView>
  );
};
export default CameraAndGallery;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    marginBottom: 10,
    // alignItems: 'flex-end',
  },
  tvMsg: {},
});
