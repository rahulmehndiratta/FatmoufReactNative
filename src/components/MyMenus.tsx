import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';

export interface Props {
   
    componentId?:any
    hideMenus?:any
    isVisible:any
  }

const MyMenus: React.FC<Props> = (props) => {

   const{hideMenus,isVisible}=props

    const [visible, setVisible] = useState(isVisible);

    
  
    const showMenu = () => setVisible(true);

    useEffect(()=>{
        console.log('propss',props)
        setVisible(isVisible)
    },[props])
  return (
  
      <Menu
        visible={visible}
        // anchor={<Text onPress={showMenu}>Show menu</Text>}
        // onRequestClose={hideMenus()}
      >
        <MenuItem onPress={hideMenus()}>Menu item 1</MenuItem>
        <MenuItem onPress={hideMenus()}>Menu item 2</MenuItem>
        <MenuItem disabled>Disabled item</MenuItem>
        <MenuDivider />
        <MenuItem onPress={hideMenus()}>Menu item 4</MenuItem>
      </Menu>
   
  )
}

export default MyMenus

const styles = StyleSheet.create({})