import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ImageSlider } from "react-native-image-slider-banner";
import FastImage from 'react-native-fast-image';
import { DataType } from 'react-native-image-slider-banner/src';
export interface Props {
    onClick?: (item: DataType, index: number) => void;
    onItemChanged?: (itemData: DataType) => void;
}
const MyImageSlider: React.FC<Props> = (props) => {
    const { onClick, onItemChanged } = props
   
    return (
        <ImageSlider
            data={[
                { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU' },
                { img: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg' },
                { img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg' }
            ]}
            onItemChanged={(item) => console.log("item", item)}
            // caroselImageStyle={{ resizeMode: 'cover' }}
            autoPlay={true}
            onClick={onClick}
            onItemChanged={onItemChanged}
            closeIconColor="#fff"
        />

    )
}

export default MyImageSlider

const styles = StyleSheet.create({})