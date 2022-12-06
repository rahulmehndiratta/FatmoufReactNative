import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import MySafeArea from '@components/MySafeArea';
import {Utils} from '@Utils';
import {color, fontFamily, fontSize} from '@styles';
import Divider from '@components/Divider';
interface Props {}
const CompetitiveDetail: React.FC<Props> = (props: any) => {
  return (
    <MySafeArea
      title="Competitive Detail"
      componentId={props.componentId}
      prevScreenName={'Back'}
      padding={Utils.calculateHeight(20)}>
      <View style={styles.container}>
        <Text style={styles.dateStr}>15 oct 2022</Text>
        <View style={styles.headerContainer}>
          <Image
            source={require('@images/add-participant.png')}
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
        <Text style={{alignItems: 'flex-start'}}>Entry Fees:200</Text>
      </View>
    </MySafeArea>
  );
};

export default CompetitiveDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    borderColor: 'gray',
    alignItems: 'center',
    borderRadius: Utils.calculateHeight(10),
    shadowColor: color.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 10,
    padding: 10,
    marginVertical: Utils.calculateHeight(20),
  },
  dateStr: {
    fontFamily: fontFamily.Medium,
    fontSize: fontSize.size_15,
    alignSelf: 'flex-end',
  },
  profileImage: {
    width: Utils.calculateWidth(60),
    height: Utils.calculateHeight(60),
    borderRadius: 40,
    alignSelf: 'flex-start', // backgroundColor: 'red',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red',
    width: '100%',
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderColor: color.boderColor,
  },
});
