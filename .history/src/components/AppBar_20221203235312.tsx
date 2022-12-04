import { GestureResponderEvent, Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Utils } from '@Utils'
import { color, fontFamily, fontSize } from '@styles'
import { Navigator } from '@Navigator'

export interface Props {
    backgroundColor?: string
    title?: string,
    isHideBack?: boolean
    rightIcon?: ImageSourcePropType
    leftIcon?: any
    leftIconPress?: any;
    rightIconPress?: null | ((event: GestureResponderEvent) => void) | undefined;
    titleColor?: string,
    componentId: any,
    centerIcon?: ImageSourcePropType
}
const AppBar: React.FC<Props> = (props) => {
    let { backgroundColor, title, rightIcon, titleColor, leftIcon, isHideBack, componentId, leftIconPress, rightIconPress, centerIcon } = props
    return (
        <View style={{
            paddingHorizontal: Utils.calculateWidth(10),
            height: centerIcon?undefined:Utils.calculateHeight(56),
            backgroundColor: backgroundColor ?? color.backgroundColor,
            flexDirection: 'row',
        }}>
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                {!isHideBack && (

                    <Pressable
                    style={{padding:5}}
                        onPress={() => {

                            leftIcon ? leftIconPress() : Navigator.setPop(componentId)
                        }}

                    >
                        <Image
                            resizeMode='contain'
                            source={leftIcon ?? require('@images/ic_back.png')}
                            style={{ height: 20, width: 20, }}/>

                        
                    </Pressable>)}
            </View>

            <View style={{ flex: 8, justifyContent: 'center', alignItems: 'center' }}>


                {centerIcon && <Image resizeMode='cover' style={styles.ivCenter} source={centerIcon} />}

                {title&&<Text style={{
                    color: titleColor ?? color.white,
                    fontFamily: fontFamily.RobotoMedium,
                    fontSize: fontSize.size_20
                }}>{title ?? ''}</Text>}

            </View>


            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>

                {rightIcon && (

                    <Pressable
                    style={{padding:5}}
                        onPress={rightIconPress}
                    >
                        <Image
                            resizeMode='contain'
                            source={rightIcon}
                            style={{ height: 20, width: 20, }}/>

                    </Pressable>
                )}

            </View>


        </View>
    )
}

export default AppBar

const styles = StyleSheet.create({
    ivCenter:{
        height:60,
        width:60,
        backgroundColor:color.black,
        borderRadius:40,
        tintColor:color.black,
        shadowColor:'#63F4F766',
    }
})
