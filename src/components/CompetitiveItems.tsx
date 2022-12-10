import { Alert, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ProfileImage from './ProfileImage'
import { color, fontFamily } from '@styles'
import MyImage from './MyImage'
import ClickableImage from './ClickableImage'
import Divider from './Divider'
import MyImageSlider from './MyImageSlider'
import FlatListSlider from './FlatListSlider'
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';

export interface Props {
  item: any,
  index: number,
}
const CompetitiveItems: React.FC<Props> = (props) => {

  const { item, index } = props

  const [visible, setVisible] = useState(false);

  const hideMenu = () => setVisible(false);

  

  const data = [
    {
      image:
        'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
      desc: 'Silent Waters in the mountains in midst of Himilayas',
    },
    {
      image:
        'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
      desc:
        'Red fort in India New Delhi is a magnificient masterpeiece of humans',
    },
    {
      image:
        'https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      desc:
        'Sample Description below the image for representation purpose only',
    },
    {
      image:
        'https://images.unsplash.com/photo-1568700942090-19dc36fab0c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      desc:
        'Sample Description below the image for representation purpose only',
    },
    {
      image:
        'https://images.unsplash.com/photo-1584271854089-9bb3e5168e32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
      desc:
        'Sample Description below the image for representation purpose only',
    },
  ]


  


  return (
    
    <View style={styles.container}>

      <View style={styles.nameAndMoreTopView}>
        <View style={styles.imageAndNameView}>

          <Image
            resizeMode='cover'
            style={{ height: 50, width: 50, backgroundColor: 'red', borderRadius: 100 }}
            source={{ uri: 'data:image/jpeg;base64,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' }} />
          <Text style={{ flex: 1, marginHorizontal: 5,color:color.black,fontFamily:fontFamily.Bold }}>Manurohit Shakywar</Text>

        </View>
        <View style={{ flexGrow: 0, alignItems: 'center', }}>

          <Text>26 Nov 2022</Text>
          <ClickableImage
            source={require('@images/menu-dots.png')}
            style={{ height: 20, marginTop: 5, width: 15, }}
            containerStyle={{ alignSelf: 'flex-end' }}
            resizeMode='contain'
            onPress={() => {
              setVisible(true)
             
            }}
          />
        </View>

     
      <Menu
        visible={visible}
       
        onRequestClose={hideMenu}
      >
        <MenuItem onPress={hideMenu}>Menu item 1</MenuItem>
        <MenuItem onPress={hideMenu}>Menu item 2</MenuItem>
        <MenuItem disabled>Disabled item</MenuItem>
        <MenuDivider />
        <MenuItem onPress={hideMenu}>Menu item 4</MenuItem>
      </Menu>
  

      </View>
      <Divider marginTop={25} borderColor={color.grayText} />
      <MyImageSlider />

      <View style={{ justifyContent: 'space-between',flexDirection:'row',marginTop:10 }}>

        <Text style={{color:color.black,fontFamily:fontFamily.Bold}}>Rocket to win it all</Text>
        <ClickableImage
          source={require('@images/menu-dots.png')}
          style={{ height: 20, width: 10, }}
          // containerStyle={{ alignSelf: 'flex-end' }}
          resizeMode='contain'
          onPress={() => Alert.alert('Alert!', 'this is testing message')}
        />
      </View>
      <Text style={{marginTop:10}}>i like Centeral to  will it all!</Text>

      

      

    </View>
  )
}

export default CompetitiveItems

const styles = StyleSheet.create({

  container: {
    padding: 10,
    elevation: 1,
    borderRadius: 10,
    backgroundColor: color.white,
    marginVertical: 7,
    margin: 2,
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.5,
    

  },
  nameAndMoreTopView:{
        flexDirection: 'row',
       
      },
      imageAndNameView:{
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
      }
})