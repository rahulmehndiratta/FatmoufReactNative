import { GestureResponderEvent, Image, ImageResizeMode, ImageSourcePropType, ImageStyle, Pressable, PressableStateCallbackType, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'
export interface Props {
    source: ImageSourcePropType;
    resizeMode?: ImageResizeMode | undefined;
    onPress?: null | ((event: GestureResponderEvent) => void) | undefined;
    style?: StyleProp<ImageStyle> | undefined;
    containerStyle?: StyleProp<ViewStyle> | ((state: PressableStateCallbackType) => StyleProp<ViewStyle>) | undefined;
}
const ClickableImage: React.FC<Props> = (props) => {
    let { source, resizeMode, style, containerStyle, onPress } = props
    return (
        <Pressable
            style={containerStyle}
            onPress={onPress}
        >
            <Image
                style={style}
                resizeMode={resizeMode}
                source={source}
            />
        </Pressable>
    )
}

export default ClickableImage

const styles = StyleSheet.create({})