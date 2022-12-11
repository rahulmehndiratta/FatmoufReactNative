import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import DatePicker from 'react-native-date-picker'
import { color } from '@styles'

export interface Props {
    title:string
   
  }


const CustomDatePicker : React.FC<Props> = props => {
    const {title}=props

    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
  return (
    <View style={{width:'45%'}}>
      <Text>{title}</Text>
    <Pressable 
    onPress={()=>{
      setOpen(true)
    }}
    style={styles.dateView}>
      <Text>{date.getDate()}</Text>
    </Pressable>

    <DatePicker
        modal
        open={open}
        date={date}
        mode={'date'}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
    </View>
  )
}

export default CustomDatePicker

const styles = StyleSheet.create({
  dateView:{
   // backgroundColor:'red',
  width:'100%',
  borderBottomColor:color.grayText,
  borderBottomWidth:1}
})