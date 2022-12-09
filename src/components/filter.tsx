import {
  FlatList,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {color, fontFamily, fontSize} from '@styles';
import {Utils} from '@Utils';
import CustomButton from './CustomButton';
import ChildItem from './CustomSlider/ChildItem';
interface Props {
  visible: any;
  inVisible: any;
}
const Filter: React.FC<Props> = (props: any) => {
  const {visible, inVisible} = props;
  const [selectItem, setSelectItem] = useState(0);
  const [filterValue, setFilterValue] = useState([]);
  const [selectFilterValue, setSelectFilterValue] = useState(0);
  const filterItem = [
    {
      id: 0,
      name: 'Transaction From',
      value: [
        {
          valueId: 0,
          valueName: 'All',
        },
        {
          valueId: 1,
          valueName: 'All',
        },
        {
          valueId: 2,
          valueName: 'All',
        },
      ],
    },
    {
      id: 1,
      name: 'Transaction From',
      value: [
        {
          valueId: 0,
          valueName: 'Bank',
        },
        {
          valueId: 1,
          valueName: 'Bank',
        },
        {
          valueId: 2,
          valueName: 'Bank',
        },
      ],
    },
    {
      id: 2,
      name: 'Transaction From',
      value: [{}],
    },
  ];

  const renderItem = (item: any, index: any) => {
    return (
      <Pressable
        style={{
          width: '100%',
          height: 70,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: selectItem == item.id ? color.filter : color.white,
          // marginTop: index == 0 ? 0 : 20,
          borderBottomColor: color.boderColor,
          borderBottomWidth: 1,
        }}
        onPress={() => {
          if (selectItem == item.id) {
            setSelectItem(1);
          } else {
            setSelectItem(item.id);
            setFilterValue(item.value);
          }
        }}>
        <Text
          style={{
            fontSize: fontSize.size_18,
            color: selectItem == item.id ? color.white : color.black,
            fontFamily: fontFamily.Regular,
          }}>
          Tranction From
        </Text>
      </Pressable>
    );
  };
  const _renderFilterValue = (item: any, index: any) => {
    return (
      <Pressable
        style={{
          flexDirection: 'row',
          width: '100%',
          height: 70,
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: color.white,
          padding: 15,
          borderBottomColor: color.boderColor,
          borderBottomWidth: 1,
        }}
        onPress={() => {
          if (selectFilterValue == item.valueId) {
            setSelectFilterValue(0);
          } else {
            setSelectFilterValue(item.valueId);
          }
        }}>
        <Text
          style={{
            fontSize: fontSize.size_18,
            color: color.black,
            fontFamily: fontFamily.Regular,
          }}>
          {item.valueName}
        </Text>
        {selectFilterValue == item.valueId && (
          <Image
            source={require('@images/tick.png')}
            resizeMode={'contain'}
            style={{
              width: Utils.calculateWidth(20),
              height: Utils.calculateHeight(20),
            }}
          />
        )}
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
              }}>
              <FlatList
                data={filterItem}
                renderItem={({item, index}) => renderItem(item, index)}
              />
            </View>
            <View
              style={{
                // flex: 1,
                backgroundColor: color.white,
                height: '100%',
                width: '48%',
              }}>
              <FlatList
                data={filterValue}
                renderItem={({item, index}) => _renderFilterValue(item, index)}
              />
            </View>
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
