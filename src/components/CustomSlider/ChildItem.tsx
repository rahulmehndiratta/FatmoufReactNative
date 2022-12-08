import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

export interface Props {
    item?: any,
    style?: any,
    onPress?: any,
    index?: any,
    imageKey?: any,
    local?: any,
    height?: any
}
const ChildItem: React.FC<Props> = (props) => {
    const { item, style, onPress, index, imageKey, local, height } = props

    return (

        <TouchableOpacity
            style={styles.container}
            onPress={() => onPress(index)}>
            <Image
                style={[styles.image, style, { height: height }]}
                source={local ? item[imageKey] : { uri: item[imageKey] }}
            />
        </TouchableOpacity>
    )

}
export default ChildItem;


const styles = StyleSheet.create({
    container: {},
    image: {
        height: 230,
        resizeMode: 'stretch',
    },
});