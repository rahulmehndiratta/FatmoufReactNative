import { FlatList, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { NavigationComponentProps } from 'react-native-navigation'
import MySafeArea from '@components/MySafeArea'
import { Utils } from '@Utils'
import { color, fontFamily, fontSize } from '@styles'
import Tabs from '@components/Tabs'
import MyTextInput from '@components/MyTextInput'
import DatePicker from '@components/CustomDatePicker'
import ClickableImage from '@components/ClickableImage'
import ImageCropPicker from 'react-native-image-crop-picker';
import { Navigator } from '@Navigator'
import { screenName } from '@screenName'

export interface Props extends NavigationComponentProps { }

const AddChallenge: React.FC<Props> = props => {

    const [title,setTitle]=useState('')
    const [location,setLocation]=useState('')
    const [privateAndPublic,setPrivateAndPublic]=useState(0)
    const [description,setDescription]=useState('')
    const [favour,setFavour]=useState('')
    const [images,setImages]=useState([])
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
                style={[styles.btnContainer, { marginStart: index === 0 ? 0 : 10 }]}>
                <Text style={styles.tvBtnTitle}>{item?.name}</Text>
            </Pressable>
        );
    };


    const renderStartAndEndDate=()=>{
        return(
            <View style={styles.datePickerContainer}>
               <DatePicker
                title={'Start Date'}
                />
                <DatePicker
                title={'End Date'}
                />
               </View>
        )
    }

    const choosePhotoFromLibrary = () => {
        ImageCropPicker.openPicker({
             multiple: true,
          // width: 300,
          // height: 400,
          cropping: true,
        }).then((image:any) => {

            setImages(image)



        });
      };


      const renderImageItem=(item:any)=>{
        console.log('imageArr', item);
        return(
            <View>
                 <ClickableImage
                resizeMode='contain'
                style={{width:100,height:100,marginLeft:Utils.calculateWidth((20))}}
                source={{uri:item.item.path}}

                />
            </View>
        )
      }  return (
    <MySafeArea
      componentId={props.componentId}
      title="Add Challenge"
      isScrollrightIcon={require('@images/setting-white.png')}
      rightIconPress={() => Navigator.setPush(props.componentId, screenName.Setting)}

    ><View style={styles.container}>

      <Tabs
                    tabs={['Public', 'Private']}
                    selectedTab={(selectValue: any) => {
                        setPrivateAndPublic(selectValue)
                    }}
                />

                <Text style={styles.heading}>Tags</Text>
        <Viewstyle={{ marginTop: Utils.calculateHeight((10)) }}>
                    <FlatList
                        data={data}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        // keyExtractor={({item:any}) => item?.id}
                        renderItem={({ item, index }) => _renderItems(item, index)}
                    /></View>
      {privateAndPublic==0&&  <Tabs
                    tabs={['Free', 'Paid']}
                    selectedTab={(selectValue: any) => {

                    }}
                />}

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
               <MyTextInput
                    value={description}
                   // leftIcon={require('@images/email.png')}
                    marginTop={Utils.calculateHeight(20)}
                    placeholder={'Description'}
                    keyboardType={'email-address'}
                    onChangeText={text => setDescription(text)}

                />

<Text style={styles.heading}>Favour</Text>
               <MyTextInput
                    value={favour}
                   // leftIcon={require('@images/email.png')}
                    marginTop={Utils.calculateHeight(20)}
                    placeholder={'Favour'}
                    keyboardType={'email-address'}
                    onChangeText={text => setFavour(text)}

                />

                <View style={{flexDirection:'row',
            marginTop:Utils.calculateHeight((20))
            }}>

                <ClickableImage
                resizeMode='contain'
                style={{width:100,height:100}}
                source={require('@images/addGellery.png')}
                onPress={()=>{
                    choosePhotoFromLibrary()
                }}
                />

                <FlatList
                data={images}
                showsHorizontalScrollIndicator={false}
                horizontal
                renderItem={(item:any)=>renderImageItem(item)}
                />
            </View>


            </View>
    </MySafeArea>
  )
}

export default AddChallenge

const styles = StyleSheet.create({
    container: {
         backgroundColor: color.white,
       // height: 1000,
        marginTop: Utils.calculateHeight(20),
        paddingHorizontal: Utils.calculateWidth((8)),
        paddingBottom:Utils.calculateHeight((20)),
borderRadius:10,
elevation:5

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
        marginVertical: Utils.calculateHeight((5))
    },
    tvBtnTitle: {
        color: color.appBar,
        fontFamily: fontFamily.Medium,
        fontSize: fontSize.size_14,
    },
    heading: {
        fontSize: fontSize.size_18,
        fontFamily: fontFamily.Bold,
        marginTop: Utils.calculateHeight((10)),
        color:color.black

    },
    datePickerContainer:{
      // backgroundColor:'red',
        flexDirection:'row',
        justifyContent:'space-between',
    marginTop:Utils.calculateHeight((20))
    }



})
