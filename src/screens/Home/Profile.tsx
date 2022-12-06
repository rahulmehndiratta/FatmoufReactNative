import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationComponentProps } from 'react-native-navigation'
import MySafeArea from '@components/MySafeArea'
import Divider from '@components/Divider'
import { color } from '@styles'

export interface Props extends NavigationComponentProps {

}
const Profile: React.FC<Props> = (props) => {
  return (
    <MySafeArea componentId={props.componentId}
      rightIcon={require('@images/setting-white.png')}
      padding={0}
      isHideBack >
      <View style={{ backgroundColor: color.appBar, flex: 1 }}>
        {/* <Divider/> */}
<Text>Rohit</Text>
      </View>
    </MySafeArea>
  )
}

export default Profile

const styles = StyleSheet.create({})