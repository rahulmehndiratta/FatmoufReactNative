import {Alert, FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import MySafeArea from '@components/MySafeArea';
import {NavigationComponentProps} from 'react-native-navigation';
import ClickableImage from '@components/ClickableImage';
import {Utils} from '@Utils';
import {color, fontFamily, fontSize} from '@styles';
import CustomButton from '@components/CustomButton';
import ImageCropPicker from 'react-native-image-crop-picker';

interface Props extends NavigationComponentProps {}

const AddActivity: React.FC<Props> = (props: any) => {
  const {propsData} = props;
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);

  const renderImageItem = (item: any, index: number) => {
    console.log('imageArr', item);
    return (
      <View
        style={{
          marginLeft: Utils.calculateWidth(15),
          marginRight: 5,
        }}>
        <ClickableImage
          resizeMode="contain"
          style={{width: 50, height: 50}}
          source={{uri: item.path}}
        />
        <ClickableImage
          resizeMode="contain"
          containerStyle={{position: 'absolute', right: -5, top: -8}}
          style={{
            width: 20,
            height: 20,
          }}
          source={require('@images/remove.png')}
          onPress={() => {
            const filterArr = images.filter(
              (removeItem: any, i: number) => i !== index,
            );
            setImages(filterArr);
          }}
        />
      </View>
    );
  };

  const choosePhotoFromLibrary = () => {
    ImageCropPicker.openPicker({
      multiple: true,
      // width: 300,
      // height: 400,
      maxFiles: 5,
      cropping: true,
    }).then((image: any) => {
      console.log('imagesdata', image);

      //image.id=Utils._getRandomId()
      setImages(image);
    });
  };

  return (
    <MySafeArea
      title="Add Activity"
      prevScreenName={propsData?.backTitle}
      componentId={props.componentId}
      rightTitle={'Post'}
      rightTitlePress={() => Alert.alert('Alert!', 'Service Coming Soon..')}>
      <View
        style={{
          alignItems: 'center',
          backgroundColor: 'white',
          elevation: 10,
          borderRadius: 10,
          flex: 1,
          marginVertical: 10,
          padding: 10,
        }}>
        <Text
          style={{
            alignSelf: 'flex-start',
            fontFamily: fontFamily.SemiBold,
            color: color.black,
            fontSize: fontSize.size_12,
          }}>
          Description
        </Text>
        <TextInput
          value={description}
          multiline={true}
          numberOfLines={4}
          placeholder={'description'}
          onChangeText={text => {
            setDescription(text);
            // setShowError(false);
          }}
          style={{
            height: Utils.calculateHeight(150),
            borderColor: color.grayText,
            borderWidth: 1,
            marginTop: 10,
            borderRadius: 5,
            backgroundColor: color.grayText,
            marginHorizontal: Utils.calculateWidth(20),
            textAlignVertical: 'top',
            width: '100%',
          }}
        />

        <Text
          style={{
            alignSelf: 'flex-start',
            fontFamily: fontFamily.SemiBold,
            color: color.black,
            fontSize: fontSize.size_14,
            marginTop:20
          }}>
          Photos or Videos
        </Text>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}>
          <ClickableImage
            source={require('@images/addGellery.png')}
            style={styles.addIcon}
            containerStyle={styles.addIconContainer}
            resizeMode="contain"
            onPress={() => {
              choosePhotoFromLibrary();
            }}
          />

          <FlatList
            data={images}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingTop: 10}}
            horizontal
            renderItem={({item, index}) => renderImageItem(item, index)}
          />
        </View>
      </View>
    </MySafeArea>
  );
};

export default AddActivity;

const styles = StyleSheet.create({
  addIconContainer: {
    alignSelf: 'flex-start',
    marginTop: Utils.calculateHeight(20),
  },
  addIcon: {
    height: 50,
    width: 50,
  },
});
