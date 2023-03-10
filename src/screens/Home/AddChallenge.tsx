import { Alert, FlatList, Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { NavigationComponentProps } from "react-native-navigation";
import MySafeArea from "@components/MySafeArea";
import { Utils } from "@Utils";
import { color, fontFamily, fontSize } from "@styles";
import Tabs from "@components/Tabs";
import MyTextInput from "@components/MyTextInput";
import DatePicker from "@components/CustomDatePicker";
import ClickableImage from "@components/ClickableImage";
import { Navigator } from "@Navigator";
import { screenName } from "@screenName";

export interface Props extends NavigationComponentProps {}

const AddChallenge: React.FC<Props> = props => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [privateAndPublic, setPrivateAndPublic] = useState(0);
  const [description, setDescription] = useState('');
  const [favour, setFavour] = useState('');
  const [images, setImages] = useState<any>([]);
  const data = [
    {
      id: 1,
      name: 'FAT MOUFS',
    },
    {
      id: 2,
      name: 'GAMERS',
    },
    {
      id: 3,
      name: 'SPORTS FANATICS',
    },
  ];

  const _renderItems = (item: any, index: number) => {
    return (
      <Pressable
        style={[styles.btnContainer, {marginStart: index === 0 ? 0 : 10}]}>
        <Text style={styles.tvBtnTitle}>{item?.name}</Text>
      </Pressable>
    );
  };

  const renderStartAndEndDate = () => {
    return (
      <View style={styles.datePickerContainer}>
        <DatePicker title={'Start Date'} />
        <DatePicker title={'End Date'} />
      </View>
    );
  };


  const icon = (image: any, title: any) => {
    return (
      <Pressable
        onPress={() =>
          Navigator.setPush(props.componentId, screenName.AddParticipate)
        }
        style={{
          alignItems: 'center',
          marginTop: 20,
          justifyContent: 'center',
          // backgroundColor: 'green',
        }}>
        <Image
          source={image}
          resizeMode={'contain'}
          style={{
            width: 40,
            height: 40,
            borderRadius: 50,
            backgroundColor: color.appBar,
          }}
        />
        <Text
          style={{
            color: color.black,
            fontSize: fontSize.size_12,
          }}>
          <Text style={{alignSelf: 'flex-start', color: color.black}}>
            {title}
          </Text>
        </Text>
      </Pressable>
    );
  };

  const renderImageItem = (item: any) => {
    return (
      <View>
        <ClickableImage
          resizeMode="contain"
          style={{
            width: 100,
            height: 100,
            marginLeft: Utils.calculateWidth(20),
          }}
          source={{uri: item.item.path}}
        />
      </View>
    );
  };

  return (
    <MySafeArea
      componentId={props.componentId}
      title="Add Challenge"
      prevScreenName={'Cancel'}
      rightTitle={'Post'}
      rightTitlePress={() => Alert.alert('Alert!', 'Coming soon')}
      isScroll>
      <View style={styles.container}>
        <Tabs
          tabs={['Public', 'Private']}
          selectedTab={(selectValue: any) => {
            setPrivateAndPublic(selectValue);
          }}
        />

        <Text style={styles.heading}>Tags</Text>
        <View style={{marginTop: Utils.calculateHeight(10)}}>
          <FlatList
            data={data}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            // keyExtractor={({item:any}) => item?.id}
            renderItem={({item, index}) => _renderItems(item, index)}
          />
        </View>
        {privateAndPublic == 0 && (
          <Tabs
            tabs={['Free', 'Paid']}
            selectedTab={(selectValue: any) => {}}
          />
        )}

        <Text style={styles.heading}>Title</Text>
        <MyTextInput
          value={title}
          // leftIcon={require('@images/email.png')}
          marginTop={Utils.calculateHeight(20)}
          placeholder={'Title'}
          keyboardType={'email-address'}
          onChangeText={text => setTitle(text)}
        />
        <MyTextInput
          value={location}
          // leftIcon={require('@images/email.png')}
          marginTop={Utils.calculateHeight(20)}
          placeholder={'Select Location'}
          keyboardType={'email-address'}
          onChangeText={text => setLocation(text)}
        />

        {renderStartAndEndDate()}
        <Text style={styles.heading}>Description</Text>

        <TextInput
          value={description}
          multiline={true}
          numberOfLines={4}
          onChangeText={text => {
            setDescription(text);
          }}
          style={{
            height: Utils.calculateHeight(100),
            borderColor: color.boderColor,
            borderWidth: 1,
            marginTop: 10,
            borderRadius: 5,
            marginHorizontal: Utils.calculateWidth(20),
            textAlignVertical: 'top',
            // width: '100%',
          }}
          placeholder={'Description'}
        />

        <Text style={styles.heading}>Favour</Text>
        {/* <MyTextInput
          value={favour}
          // leftIcon={require('@images/email.png')}
          marginTop={Utils.calculateHeight(20)}
          placeholder={'Favour'}
          onChangeText={text => setFavour(text)}
        /> */}
        <TextInput
          value={favour}
          multiline={true}
          numberOfLines={4}
          onChangeText={text => {
            setFavour(text);
          }}
          style={{
            height: Utils.calculateHeight(100),
            borderColor: color.boderColor,
            borderWidth: 1,
            marginTop: 10,
            borderRadius: 5,
            marginHorizontal: Utils.calculateWidth(20),
            textAlignVertical: 'top',
            // width: '100%',
          }}
          placeholder={'Favour'}
          keyboardType={'email-address'}
        />
        <View
          style={{
            flexDirection: 'row',
            marginTop: Utils.calculateHeight(20),
          }}>
          <ClickableImage
            resizeMode="contain"
            style={{width: 100, height: 100}}
            source={require('@images/addGellery.png')}
            onPress={() => {
              Navigator.showModal(screenName.CameraAndGallery, {
                getImage: (imagesArr: any) => {
                  if (imagesArr) {
                    setImages((arr: any) => [...arr, ...imagesArr]);
                  }
                },
              });
            }}
          />

          <FlatList
            data={images}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={(item: any) => renderImageItem(item)}
          />
        </View>
        {privateAndPublic===1&&icon(
          require('@images/view-participants.png'),
          'Add Participate',
        )}
      </View>
    </MySafeArea>
  );
};

export default AddChallenge;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    // height: 1000,
    marginTop: Utils.calculateHeight(20),
    paddingHorizontal: Utils.calculateWidth(8),
    paddingBottom: Utils.calculateHeight(20),
    borderRadius: 10,
    elevation: 5,
  },
  btnContainer: {
    // backgroundColor: color.appBar,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
    borderRadius: 7,
    minWidth: Utils.calculateWidth(70),
    borderColor: color.appBar,
    borderWidth: 1,
    marginVertical: Utils.calculateHeight(5),
  },
  tvBtnTitle: {
    color: color.appBar,
    fontFamily: fontFamily.Medium,
    fontSize: fontSize.size_14,
  },
  heading: {
    fontSize: fontSize.size_18,
    fontFamily: fontFamily.Bold,
    marginTop: Utils.calculateHeight(10),
    color: color.black,
  },
  datePickerContainer: {
    // backgroundColor:'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Utils.calculateHeight(20),
  },
});
