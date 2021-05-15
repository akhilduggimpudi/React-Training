import React,{Component} from "react"
import {View,Button,Text,TextInput,TouchableOpacity, Alert, ScrollView} from "react-native"
//import { State } from "react-native-gesture-handler";
import { connect } from "react-redux";
//import ProfileActivity from './ProfileActivity'
//android:configChanges="keyboard|keyboardHidden|orientation|screenSize|uiMode"

import {changeUname,changePwd,reset} from '.../Redux/actions/loginaction'

class HomeActivity extends Component{
  
  render(){ 
  return (
      
      <View style={{flex:1,backgroundColor:"silver"}}>
       
        <View style={{flex:0.2,backgroundColor:"violet"}}>
         <Text style={{fontSize:40,justifyContent:"center",marginLeft:"20%",color:"blue",top:20}}>Login Page</Text>
         </View>
         <View
        style={{flex:0.5,backgroundColor:"pink"}}
        >
        
        <Text style={{fontSize:20,justifyContent:"center",marginLeft:"20%",color:"grey",top:"15%"}}>Username:</Text>
        <TextInput
        style={{fontSize:18,backgroundColor:"violet",marginLeft:"20%",marginRight:"20%",top:"20%"}}
        placeholder="Username"
        
        value={this.props.uname}
      
        onChangeText={(text)=>this.props.doChangeU(text) }
       // console.log("hii"+this.state.uname)
        // this.setState({
        //    uname:text
        // }
    
       
      
        >

        </TextInput>
        <Text style={{fontSize:20,justifyContent:"center",marginLeft:"20%",color:"grey",top:"25%"}}>Password:</Text>
        <TextInput
        style={{fontSize:18,justifyContent:"center",marginLeft:"20%",backgroundColor:"violet",marginRight:"20%",top:"30%"}}
        placeholder="Password"
        secureTextEntry={true}
        value={this.props.pwd}
        onChangeText={(text)=>this.props.doChange(text)}
        
        />
       
        </View>
       
        <View
        style={{top:"5%",flexDirection:"row",height:"15%",width:"100%",padding:5,justifyContent:"space-evenly"}}
        >
        <TouchableOpacity
          
           style={{backgroundColor:"grey",height:"50%",width:"30%",justifyContent:"center",alignItems:"center"}}
           onPress={()=>{
             
           
          //              // Alert.alert("You Pressed",this.state.uname)
          // //console.log(this.state.uname)
         // console.log(this.props.uname);
           if(this.props.uname=="Admin" && this.props.pwd=="Admin"){
           
          this.props.navigation.navigate('Grid')
           
          }
          else{
            
            Alert.alert("Invalid Credentials")
          }
        }
        }
          >
            <Text style={{fontSize:30}}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
           style={{backgroundColor:"grey",height:"50%",width:"30%",justifyContent:"center",alignItems:"center"}}
           title="Reset"
           onPress={()=> this.props.doReset() }
        >
          <Text style={{fontSize:30}}>Reset</Text>
        </TouchableOpacity>
           
        </View>
      </View>
   
    );
  }
}
  function mapStateToProps(state){
  //  console.log(state.uname)  
    return {
        
        uname : state.uname,
        pwd: state.pwd
      }
  }
 function mapDispatchToProps(dispatch){
  return{
  
    doChangeU: (text)=>{ dispatch(changeUname(text))},
    doChange: (val) => {dispatch(changePwd(val))},
    doReset: () => {dispatch(reset())},
    //doChangeU: (text)=> dispatch({type:'DO_CHANGEU',text }),
  //doChange: (val) => dispatch({type:'DO_CHANGE',val}),
  // doReset: () => dispatch({type:'DO_RESET'}),
  }
 //setText: ()=>dispatch({type:'SET_TEXT'})
 }
  export default connect(mapStateToProps,mapDispatchToProps)(HomeActivity)
  
  
  