import { GestureResponderEvent, Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { color, fontFamily, fontSize } from '@styles'
import { Utils } from '@Utils';
export interface Props {
    title: string,
    backgroundColor?: string,
    onPress?: ((event: GestureResponderEvent) => void) | undefined;
    marginTop?: any
    marginBottom?: any,
    iconLeft?: ImageSourcePropType
}

const CustomButton: React.FC<Props> = (props) => {
    const { title, backgroundColor, onPress, marginTop, marginBottom, iconLeft } = props
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={[styles.btnContainer, { backgroundColor: backgroundColor ?? color.royalBlue, marginTop: marginTop, marginBottom: marginBottom }]}
            onPress={onPress}
        >
            {iconLeft && <Image style={styles.ivImage} source={iconLeft} resizeMode='contain' />}
            <Text style={styles.tvTitle}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({

    btnContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        height: Utils.calculateHeight(52)
    },
    tvTitle: {
        fontSize: fontSize.size_18,
        fontFamily: fontFamily.SemiBold,
        color: color.white
    },
    ivImage: {
        height: 24,
        width: 24,
        marginEnd: Utils.calculateWidth(5)
    }
})