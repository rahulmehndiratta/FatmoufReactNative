import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MySafeArea from '@components/MySafeArea';
import {Utils} from '@Utils';
import {color} from '@styles';
import Search from '@components/Search';
import OutLineButton from '@components/outLineButton';
import {Navigator} from '@Navigator';
import {screenName} from '@screenName';
import ClickableImage from '@components/ClickableImage';

interface Props {}

const AddParticipate: React.FC<Props> = (props: any) => {
  const renderItem = (item: any, index: any) => {
    return (
      <Pressable style={styles.headerContainer}>
        <Image
          source={require('@images/dummy.png')}
          resizeMode={'contain'}
          style={styles.profileImage}
        />
        <View
          style={{
            flex: 1,
            marginLeft: Utils.calculateWidth(10),
            // backgroundColor: 'red',

            alignItems: 'flex-start',
          }}>
          <Text style={{marginLeft: Utils.calculateWidth(5)}}>Rahul</Text>
          <View
            style={{
              flexDirection: 'row',
              marginTop: Utils.calculateHeight(5),
              alignSelf: 'flex-start',
              // backgroundColor: 'green',
            }}>
            <Image
              source={require('@images/location.png')}
              resizeMode={'contain'}
              style={{
                width: Utils.calculateWidth(20),
                height: Utils.calculateHeight(20),
              }}
            />
            <Text>Chandigarh, Chandigarh</Text>
          </View>
        </View>
        <ClickableImage
          resizeMode={'contain'}
          style={{height: 30, width: 30}}
          source={require('@images/add-participant.png')}
          onPress={() => {}}
        />
      </Pressable>
    );
  };

  return (
    <MySafeArea
      title="User List"
      componentId={props.componentId}
      prevScreenName={'Back'}
      rightTitle={'Done'}
      rightTitlePress={() => Navigator.setPop(props.componentId)}
      paddingHorizontal={10}>
      <View
        style={{
          flex: 1,
          backgroundColor: color.white,
        }}>
        <Search />
        <FlatList
          data={[{}, {}, {}]}
          renderItem={({item, index}) => renderItem(item, index)}
        />
      </View>
    </MySafeArea>
  );
};

export default AddParticipate;

const styles = StyleSheet.create({
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    alignSelf: 'flex-start', // backgroundColor: 'red',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: color.white,
    width: '100%',
    borderWidth: 1,
    borderColor: color.boderColor,
    marginTop: Utils.calculateHeight(20),
    shadowColor: color.black,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    margin: 1,
    shadowRadius: 20,
    elevation: 10,
    padding: 10,
  },
});
