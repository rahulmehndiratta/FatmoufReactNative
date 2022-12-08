import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MySafeArea from '@components/MySafeArea';
import {Utils} from '@Utils';
import {color} from '@styles';
interface Props {}
const ViewParticipate: React.FC<Props> = (props: any) => {
  const renderItem = (item: any, index: any) => {
    return (
      <View style={styles.headerContainer}>
        <Image
          source={require('@images/dummy.png')}
          resizeMode={'contain'}
          style={styles.profileImage}
        />
        <View
          style={{
            flex: 1,
            marginLeft: Utils.calculateWidth(10),
            //   backgroundColor: 'red',

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
        <Pressable
          style={{
            alignSelf: 'flex-end',
          }}>
          <Image
            source={require('@images/support.png')}
            resizeMode={'contain'}
            style={{
              width: Utils.calculateWidth(25),
              height: Utils.calculateHeight(25),
              tintColor: color.appBar,
            }}
          />
        </Pressable>
      </View>
    );
  };

  return (
    <MySafeArea
      title="Participant List"
      componentId={props.componentId}
      prevScreenName={'Back'}
      paddingHorizontal={0}>
      <View
        style={{
          flex: 1,
          backgroundColor: color.white,
        }}>
        <FlatList
          data={[{}, {}, {}]}
          renderItem={({item, index}) => renderItem(item, index)}
        />
      </View>
    </MySafeArea>
  );
};

export default ViewParticipate;

const styles = StyleSheet.create({
  profileImage: {
    width: Utils.calculateWidth(45),
    height: Utils.calculateHeight(45),
    borderRadius: 45,
    alignSelf: 'flex-start', // backgroundColor: 'red',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: color.white,
    width: '100%',
    // paddingBottom: 15,
    borderWidth: 1,
    borderColor: color.boderColor,
    marginTop: Utils.calculateHeight(20),
    shadowColor: color.black,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 10,
    padding: 10,
  },
});
