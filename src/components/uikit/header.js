import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Header = ({title}) =>{
  return(
    <View style = {styles.headerStyle}>
        <Text style = {styles.headerText}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
headerStyle : {
  backgroundColor: '#4db8ff',
  height: 116,
  justifyContent : 'center',
  paddingTop: 45,
  paddingLeft: 110,
  shadowColor : '#000',
  shadowOffset : {width:0, height:5},
  shadowOpacity: 0.2,
  elevation: 2,
  position: 'relative',

},
headerText:{
  color: '#ffffff',
  fontFamily :'AvenirNext-BoldItalic',
  fontSize : 28,
}

})

export default Header
