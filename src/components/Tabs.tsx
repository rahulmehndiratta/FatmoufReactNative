import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { color, fontFamily, fontSize } from '@styles'
import { Utils } from '@Utils'

export interface Props {
   
    tabs:any
    selectedTab?:any
  }

const Tabs : React.FC<Props> = props => {
const {tabs,selectedTab}=props
    const [selectTab, setSelectTab] = useState(0)

    useEffect(()=>{
console.log('propssstabs per',props)
    },[props])
    return (
        <View style={styles.tabContainer}>
            <Pressable
                onPress={() => {
                    setSelectTab(0)
                    selectedTab(0)
                }}
                style={[styles.publicAndPrivateTextContainer, { backgroundColor: selectTab == 0 ? color.appBar : color.grayText, }]}>

                <Text style={[styles.publicAndPrivateText, 
                    { fontFamily: selectTab == 0 ? fontFamily.Bold : fontFamily.Medium, }]}>
                        {tabs[0]}</Text>
            </Pressable>
            <Pressable
                onPress={() => {
                    setSelectTab(1)
                    selectedTab(1)
                }}
                style={[styles.publicAndPrivateTextContainer, { backgroundColor: selectTab == 1 ? color.appBar : color.grayText, }]}>
                <Text style={[styles.publicAndPrivateText, 
                    { fontFamily: selectTab == 1 ? fontFamily.Bold : fontFamily.Medium, }]}>
                         {tabs[1]}</Text>
            </Pressable>
        </View>
    )
}

export default Tabs

const styles = StyleSheet.create({

    tabContainer: {
        height: Utils.calculateHeight(50),
        backgroundColor: color.grayText,
        marginTop: Utils.calculateHeight((10)),
        borderRadius: 10,
        flexDirection: 'row'
    },
    publicAndPrivateText: {
        fontSize: fontSize.size_16,
    },
    publicAndPrivateTextContainer: {
        flex: 1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
   
   
})