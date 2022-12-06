import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationComponentProps } from 'react-native-navigation'

export interface Props extends NavigationComponentProps{

}
const Profile:React.FC<Props> = (props) => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})