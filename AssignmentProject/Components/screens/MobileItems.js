import React,{Component} from "react"
import {View,Button,Text} from "react-native"
import {connect} from 'react-redux';
class MobileItems extends Component{
  render(){ 
  return (
     <View
     style={{alignItems:"center",justifyContent:"center"}}
     > 
      <Text style={{fontSize:40,alignSelf:"center",justifyContent:"center"}}>Your Username is</Text>
      <Button
        title="Go to Home"
        onPress={() =>
         
        this.props.navigation.navigate('Details')
        }
      />
    </View>
    );
  }
  }
  export default MobileItems