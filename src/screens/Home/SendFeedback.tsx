import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { NavigationComponentProps } from 'react-native-navigation'
import MySafeArea from '@components/MySafeArea'
import ClickableImage from '@components/ClickableImage'
import { Utils } from '@Utils'
import { color } from '@styles'
import ImageCropPicker from 'react-native-image-crop-picker';
import CustomButton from '@components/CustomButton'
import { Navigator } from "@Navigator";
import { screenName } from "@screenName";
import CameraAndGallery from "@components/CameraAndGallery";


export interface Props extends NavigationComponentProps { }
const SendFeedback: React.FC<Props> = props => {

    const [feedback, setFeedBack] = useState('')
    const [images, setImages] = useState([])

    const renderImageItem = (item: any, index: number) => {
        console.log('imageArr', item);
        return (
            <View style={{
                marginLeft: Utils.calculateWidth((15)),
                marginRight: 5,
            }}>
                <ClickableImage
                    resizeMode='contain'
                    style={{ width: 50, height: 50, }}
                    source={{ uri: item.path }}

                />
                <ClickableImage
                    resizeMode='contain'
                    containerStyle={{ position: 'absolute', right: -5, top: -8, }}
                    style={{
                        width: 20,
                        height: 20,


                    }}
                    source={require('@images/remove.png')}
                    onPress={() => {

                        const filterArr = images.filter((removeItem: any, i: number) => i !== index)
                        setImages(filterArr)
                    }}
                />

            </View>
        )
    }


    const choosePhotoFromLibrary = () => {
        ImageCropPicker.openPicker({
            multiple: true,
            // width: 300,
            // height: 400,
            maxFiles: 5,
            cropping: true,
        }).then((image: any) => {
            console.log('imagesdata', image)

            //image.id=Utils._getRandomId()
            setImages(image)
        });
    };
    return (
        <MySafeArea
            componentId={props.componentId}

            title="Send FeedBack"
            isScroll

        // rightIcon={require('@images/setting-white.png')}
        >
            <View style={{ alignItems: 'center' }}>
                <ClickableImage
                    resizeMode='contain'
                    style={{
                        width: 200,
                        height: 200,
                        marginLeft: Utils.calculateWidth((20))
                    }}
                    source={require('@images/logo.png')}

                />
                <TextInput
                    value={feedback}
                    multiline={true}
                    numberOfLines={4}
                    placeholder={'FeedBack'}
                    onChangeText={text => {
                        setFeedBack(text);
                        // setShowError(false);
                    }}
                    style={{
                        height: Utils.calculateHeight(150),
                        borderColor: color.grayText,
                        borderWidth: 1,
                        marginTop: 10,
                        borderRadius: 5,
                        marginHorizontal: Utils.calculateWidth(20),
                        textAlignVertical: 'top',
                        width: '100%',
                    }}
                />


                <View style={{
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    // backgroundColor: 'red',
                    marginTop: Utils.calculateHeight((10)),
                    // paddingTop:15


                }}>



                    <ClickableImage
                        source={require('@images/add-purple.png')}
                        style={styles.addIcon}
                        containerStyle={styles.addIconContainer}
                        resizeMode='contain'
                        onPress={() => {
                            Navigator.showModal(screenName.CameraAndGallery)
                        }} />

                    <FlatList
                        data={images}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingTop: 10 }}
                        horizontal
                        renderItem={({ item, index }) => renderImageItem(item, index)}
                    />
                </View>

                <CustomButton
                    width={'80%'}
                    marginTop={50}
                    title={'Send'} />


            </View>


        </MySafeArea>
    )
}

export default SendFeedback

const styles = StyleSheet.create({
    addIconContainer: {

        alignSelf: 'flex-start',
        marginTop: Utils.calculateHeight((20))
    },
    addIcon: {
        height: 50,
        width: 50,
    }
})
