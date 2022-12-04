import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Utils} from '@Utils';
import ModalView from './ModalView';
import ImageCropPicker from 'react-native-image-crop-picker';
interface Props {}
const ProfileImage: React.FC<Props> = (props: any) => {
  const [imageData, setImageData] = useState<any>([]);
  const [modalShow, setModalShow] = useState(false);

  return (
    <View>
      <Pressable
        onPress={() => {
          setModalShow(true);
        }}>
        {imageData.length == 0 ? (
          <Image
            source={require('@images/user_profile.png')}
            resizeMode={'contain'}
            style={{
              width: Utils.calculateWidth(120),
              height: Utils.calculateHeight(120),
            }}
          />
        ) : (
          <Image
            source={{uri: imageData?.path}}
            resizeMode={'contain'}
            style={{
              width: Utils.calculateWidth(120),
              height: Utils.calculateHeight(120),
            }}
          />
        )}
      </Pressable>
      <ModalView
        modalShow={modalShow}
        setModalShow={(item: any) => setModalShow(item)}
        imageItem={(item: any) => {
          setImageData(item);
        }}
      />
    </View>
  );
};

export default ProfileImage;

const styles = StyleSheet.create({});
