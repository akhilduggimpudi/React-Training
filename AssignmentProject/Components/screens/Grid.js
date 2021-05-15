import React,{Component} from "react"
import {View,Button,Text} from "react-native"
import {connect} from 'react-redux';
class GridMenu extends Component{
  render(){ 
  return (
     <View
     style={{alignItems:"center",justifyContent:"center"}}
     > 
      <Text style={{fontSize:40,alignSelf:"center",justifyContent:"center"}}>Your Username is     {this.props.uname}</Text>
      <Button
        title="Food"
        onPress={() =>
         
        this.props.navigation.navigate('Food')
        }
      />
      <Button
        title="Mobiles"
        onPress={() =>
         
        this.props.navigation.navigate('Mobile')
        }
      />
      
    </View>
    );
  }
  }
//  function mapStateToProps(state){
//     return{
//       uname:state.uname,
//       pwd:state.pwd
//     }
//  }
function mapStateToProps(state){
  //  console.log(state.uname)  
    return {
        
        uname :state.uname,
        pwd:state.pwd
      }
  }
  export default connect(mapStateToProps)(GridMenu)