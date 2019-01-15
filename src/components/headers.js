import React from 'react';
import {Text, View} from 'react-native';

const Header = (props) => {
  const  {textStyle,viewStyle}  = styles
  return (
    <View style={viewStyle}>
      <Text style={textStyle}> {props.headerText} </Text>
    </View>
  );
};
const styles = {

  viewStyle:{
    backgroundColor:'#F8F8F8',
    justifyContent:'center',
    alignItems:'center',
    height:60,
    paddingTop:20,
  },
  textStyle:{
    fontSize:25
  }
};
export default Header;