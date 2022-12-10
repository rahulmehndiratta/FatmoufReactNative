import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationComponentProps } from 'react-native-navigation'
import MySafeArea from '@components/MySafeArea'

export interface Props extends NavigationComponentProps {}

const AddChallenge: React.FC<Props> = props => {
  return (
    <MySafeArea
    componentId={props.componentId}
    isHideBack
    title="Add Challenge"
    rightIcon={require('@images/setting-white.png')}>

        <ScrollView>
            <View></View>
        </ScrollView>
        </MySafeArea>
  )
}

export default AddChallenge

const styles = StyleSheet.create({})