import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import MySafeArea from '@components/MySafeArea';
import {NavigationComponentProps} from 'react-native-navigation';
import {color, fontFamily, fontSize} from '@styles';
import CustomButton from '@components/CustomButton';
import {Utils} from '@Utils';
import MySliderBox from '@components/MyImageSlider';
import MyImageSlider from '@components/MyImageSlider';
import Filter from '@components/filter';
import CompetitiveItems from '@components/CompetitiveItems';
import ClickableImage from '@components/ClickableImage';
import {Navigator} from '@Navigator';
import {screenName} from '@screenName';
const screenWidth = Math.round(Dimensions.get('window').width);
export interface Props extends NavigationComponentProps {}
const Competitive: React.FC<Props> = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const filterItem = [
    {
      id: 0,
      name: 'Type',
      value: [
        {
          valueId: 0,
          valueName: 'Private',
        },
        {
          valueId: 1,
          valueName: 'Public',
        },
      ],
    },
    {
      id: 1,
      name: 'Status',
      value: [
        {
          valueId: 0,
          valueName: 'Upcoming',
        },
        {
          valueId: 1,
          valueName: 'In-progress',
        },
        {
          valueId: 2,
          valueName: 'Complete',
        },
      ],
    },
    {
      id: 2,
      name: 'Tags',
      value: [
        {
          valueId: 0,
          valueName: 'Fat Mouf',
        },
        {
          valueId: 1,
          valueName: 'Gamer',
        },
        {
          valueId: 2,
          valueName: 'Gamer',
        },
      ],
    },
    {
      id: 3,
      name: 'Status',
      value: [
        {
          valueId: 0,
          valueName: 'Fat Mouf',
        },
        {
          valueId: 1,
          valueName: 'Gamer',
        },
        {
          valueId: 2,
          valueName: 'Gamer',
        },
      ],
    },
  ];
  const data = [
    {
      id: 1,
      name: 'Public',
    },
    {
      id: 2,
      name: 'Latest',
    },
    {
      id: 3,
      name: 'In-Progress',
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

  return (
    <MySafeArea
      componentId={props.componentId}
      isHideBack
      title="Competitive"
      rightIcon={require('@images/setting-white.png')}
      rightIconPress={() =>
        Navigator.setPush(props.componentId, screenName.Setting)
      }>
      <View style={styles.rowContainer}>
        <FlatList
          data={data}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          // keyExtractor={({item:any}) => item?.id}
          renderItem={({item, index}) => _renderItems(item, index)}
        />
        <Pressable
          onPress={() => {
            setModalVisible(true);
            // Navigator.setPush(props.componentId, screenName.GroupDetails)
          }}>
          <Image source={require('@images/filter.png')} />
        </Pressable>
      </View>

      <FlatList
        data={data}
        renderItem={({item, index}) => (
          <CompetitiveItems
            componentId={props.componentId}
            item={item}
            index={index}
          />
        )}
      />
      {/* <MyImageSlider/> */}
      <Filter
        visible={modalVisible}
        inVisible={() => setModalVisible(false)}
        item={filterItem}
        fromCompetitve={true}
        // imageDataSend={imagefromfeedback}
        // status={isChecked ? '1' : '0'}
      />

      <ClickableImage
        source={require('@images/add-purple.png')}
        style={styles.addIcon}
        containerStyle={styles.addIconContainer}
        resizeMode="contain"
        onPress={() =>
          Navigator.setPush(props.componentId, screenName.AddChallenge)
        }
      />
    </MySafeArea>
  );
};

export default Competitive;

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    marginTop: 10,
    // backgroundColor:'green',
    marginBottom: Utils.calculateHeight(15),
  },
  btnContainer: {
    backgroundColor: color.btnColor,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
    borderRadius: 7,
    minWidth: Utils.calculateWidth(70),
  },
  tvBtnTitle: {
    color: color.white,
    fontFamily: fontFamily.Medium,
    fontSize: fontSize.size_12,
  },
  addIconContainer: {
    position: 'absolute',
    bottom: 20,
    right: 5,
  },
  addIcon: {
    height: Utils.calculateHeight(50),
    width: Utils.calculateHeight(50),
  },
});
