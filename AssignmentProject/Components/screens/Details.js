import React,{Component} from "react"
import {View,Button,Text} from "react-native"
import {connect} from 'react-redux';
class Details extends Component{
  render(){ 
    const {state}=this.props.navigation
   console.log(state.user)
    return (
     <View
     style={{alignItems:"center",justifyContent:"center"}}
     > 
      <Text style={{fontSize:40,alignSelf:"center",justifyContent:"center"}}>Your Username is</Text>
      {/* {/* <Button
        title="Go to Home"
        onPress={() =>
         
        this.props.navigation.navigate('Login')
        } */}
      </View>
    );
  }
  }
  export default Details