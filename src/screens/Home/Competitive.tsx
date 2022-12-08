import { Dimensions, FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MySafeArea from '@components/MySafeArea'
import { NavigationComponentProps } from 'react-native-navigation'
import { color, fontFamily, fontSize } from '@styles'
import CustomButton from '@components/CustomButton'
import { Utils } from '@Utils'
import MySliderBox from '@components/MyImageSlider'
import MyImageSlider from '@components/MyImageSlider'
import CompetitiveItems from '@components/CompetitiveItems'
const screenWidth = Math.round(Dimensions.get('window').width);
export interface Props extends NavigationComponentProps {

}
const Competitive: React.FC<Props> = (props) => {

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
  ]
  const _renderItems = (item: any, index: number) => {
    return (
      <Pressable style={[styles.btnContainer, { marginStart: index === 0 ? 0 : 10 }]}>
        <Text
          style={styles.tvBtnTitle}>
          {item?.name}
        </Text>
      </Pressable>
    )
  }

  return (
    <MySafeArea
      componentId={props.componentId}
      isHideBack
      title='Competitive'
      rightIcon={require('@images/setting-white.png')}>
      <View style={styles.rowContainer}>
        <FlatList
          data={data}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          // keyExtractor={({item:any}) => item?.id}
          renderItem={({ item, index }) => _renderItems(item, index)}
        />
        <Image source={require('@images/filter.png')} />
      </View>

      <FlatList
        data={data}
        renderItem={({item,index }) => <CompetitiveItems item={item} index={index} />}
      />
      {/* <MyImageSlider/> */}
    </MySafeArea>
  )
}

export default Competitive

const styles = StyleSheet.create({

  rowContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  btnContainer: {
    backgroundColor: color.appBar,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
    borderRadius: 7,
    minWidth: Utils.calculateWidth(70)
  },
  tvBtnTitle: {
    color: color.white,
    fontFamily: fontFamily.Medium,
    fontSize: fontSize.size_14,
  }



})