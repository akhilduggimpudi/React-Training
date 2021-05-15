// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// function Home({navigation}){
//   //const navigation = useNavigation();
//  const [uname,setUname]=useState('');
//  const [pwd,setPwd]=useState('');
//  var un="Admin"
//  var pss="Admin"
//     return(
    
    
//       <View style={{flex:1,backgroundColor:"silver"}}>
//         <View style={{flex:0.2,backgroundColor:"violet"}}>
//         <Text style={{fontSize:40,justifyContent:"center",marginLeft:"20%",color:"blue",top:20}}>Login Page</Text>
//         </View>
//         <View
//         style={{flex:0.5,backgroundColor:"pink"}}
//         >
//         <Text style={{fontSize:20,justifyContent:"center",marginLeft:"20%",color:"grey",top:"15%"}}>Username:</Text>
//         <TextInput
//         style={{fontSize:18,backgroundColor:"violet",marginLeft:"20%",marginRight:"20%",top:"20%"}}
//         placeholder="Username"
//         onChangeText={(text)=>{
//           setUname({
//           uname:text
//           })
//         }
//       }
//         >

//         </TextInput>
//         <Text style={{fontSize:20,justifyContent:"center",marginLeft:"20%",color:"grey",top:"25%"}}>Password:</Text>
//         <TextInput
//         style={{fontSize:18,justifyContent:"center",marginLeft:"20%",backgroundColor:"violet",marginRight:"20%",top:"30%"}}
//         placeholder="Password"
//         onChangeText={(text)=>{
//          console.log(text)
//           setPwd(
//           text.target.value
//           )
          
        
         
//         }
//       }
//         />
//         </View>
//         <View
//         style={{marginLeft:"35%",justifyContent:"center",marginRight:"40%",backgroundColor:"skyblue",height:40}}
//         >
//           <TouchableOpacity
//            styles={{}}
           
//            onPress={()=>{
//          console.log(pwd[1])
//            if(un=="Admin" && pss=="Admin"){
//             // Alert.alert("You Pressed",this.state.uname)
//           //console.log(this.state.uname)
           
//           navigation.navigate("Login")
//            }
//           else{
//             Alert.alert("Invalid Credentials")
           
//           }
//           }
//         }
//           >
//             <Text style={{fontSize:20,marginLeft:"20%",marginRight:"20%"}}>Login</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
 
//   );
// }

// function LoginPage(){
// return(
//   <Text>You Have Logged In Successfully</Text>
// );
// }
// const Stack=createStackNavigator();
//  const App=() => {
//      return(
//       <NavigationContainer>
//          <Stack.Navigator>
//              <Stack.Screen
//              name="Home"
//              component={Home}
//              options={{headerShown:false}}          
//              />
//              <Stack.Screen
//              name="Login"
//              component={LoginPage}
//              options={{title:"Details"}}
//              />
//              {/* <Stack.Screen name="Signup" component={Login2} options={{title:"Signup"}}/> */}
//              {/* <Stack.Screen
//              name="Login"
//              component={login}
//              options={{title:"Login"}}
//              /> */}
//          </Stack.Navigator>
//       </NavigationContainer>
//      );
      
//   }
//   export default App;

  // constructor(props){
  //   super(props)
  //   this.state={
  //     uname:"",
  //     password:""
  //   }

  // }
  
  // render(navigate){
  //   return(
    
    
  //     <View style={{flex:1,backgroundColor:"silver"}}>
  //       <View style={{flex:0.2,backgroundColor:"violet",marginLeft:"10%",marginRight:"10%"}}>
  //       <Text style={{fontSize:40,justifyContent:"center",marginLeft:"20%",color:"blue",top:20}}>Login Page</Text>
  //       </View>
  //       <View
  //       style={{flex:0.8,backgroundColor:"pink"}}
  //       >
  //       <Text style={{fontSize:20,justifyContent:"center",marginLeft:"20%",color:"grey",top:"15%"}}>Username:</Text>
  //       <TextInput
  //       style={{fontSize:18,backgroundColor:"violet",marginLeft:"20%",marginRight:"20%",top:"20%"}}
  //       placeholder="Username"
  //       onChangeText={(text)=>{
  //            this.state.uname=text;
  //       }}
  //       >

  //       </TextInput>
  //       <Text style={{fontSize:20,justifyContent:"center",marginLeft:"20%",color:"grey",top:"25%"}}>Password:</Text>
  //       <TextInput
  //       style={{fontSize:18,justifyContent:"center",marginLeft:"20%",backgroundColor:"violet",marginRight:"20%",top:"30%"}}
  //       placeholder="Password"
  //       />
  //       </View>
  //       <View
  //       style={{marginLeft:"35%",justifyContent:"center",marginRight:"40%",backgroundColor:"red",height:40}}
  //       >
  //         <TouchableOpacity
  //          styles={{}}
  //          onPress={()=>{
  //           // if(this.state.uname=="Admin"){
  //           // Alert.alert("You Pressed",this.state.uname)
  //         navigate.navigate("Login")
  //          }
          
  //         }
  //         >
  //           <Text style={{fontSize:20,marginLeft:"20%",marginRight:"20%"}}>Login</Text>
  //         </TouchableOpacity>
  //       </View>
  //     </View>
  //  // </NavigationContainer>
  //   )
  // }

  // import HomeActivity from './Components/HomeActivity'
// import GridMenu from './Components/Grid'
// import FoodItems from './Components/FoodItems'
// import MobileItems from './Components/MobileItems'
// import Details from './Components/Details'
  

// const Stack=createStackNavigator()
//   const MyStack=()=>{
      
//      return(
//       <NavigationContainer>
//          <Stack.Navigator>
//              <Stack.Screen
//              name="Login"
//              component={HomeActivity}
//              options={{headerShown:false}}
//              />
//              <Stack.Screen name="Grid" component={GridMenu} options={{title:"Menu"}}/>
//              <Stack.Screen name="Food" component={FoodItems} options={{title:"Food List"}}/>
//              <Stack.Screen name="Mobile" component={MobileItems} options={{title:"Mobiles"}}/>
//              <Stack.Screen name="Details" component={Details} options={{title:"Details"}}/>
//          </Stack.Navigator>
//       </NavigationContainer>
//      );
      
//   }


//import {NavigationContainer} from "@react-navigation/native"



//import {createStackNavigator} from "@react-navigation/stack"

//import { useState } from "react";
//import { SafeAreaInsetsContext } from "react-native-safe-area-context";


//import {createStore} from 'redux';



//Redux Usage


//   const initialState = {
//     uname: "",
//     pwd: ""
//   }
//   const reducer=(state=initialState,action)=>{
//    // console.log(action.text)
   
//     switch(action.type){
//     case 'DO_CHANGEU':
      
//       return{
//       ...state,
//        uname: action.text
//       }
    
//     case 'DO_CHANGE':
//       return{
//         ...state,
//         pwd : action.val
       
//       }
    
//     case 'DO_RESET':
//      // console.log(state.uname)
//      return{
//         uname: state.uname="",
//         pwd:  state.pwd=""
//       }
//     }   
//    return state
    
//   }
// const store=createStore(reducer);
import React,{Component} from 'react';
import{
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {Provider} from 'react-redux'

import {MyStack} from './Components/Routes'
  
import store from './Redux/store'

export default class App extends Component{
    render(){
      return(
      <Provider store={store}>
        <MyStack/>
      </Provider>
    
      );
    }
  }
// // const Section = ({children, title}): Node => {
// //   const isDarkMode = useColorScheme() === 'dark';
// //   return (
// //     <View style={styles.sectionContainer}>
// //       <Text
// //         style={[
// //           styles.sectionTitle,
// //           {
// //             color: isDarkMode ? Colors.white : Colors.black,
// //           },
// //         ]}>
// //         {title}
// //       </Text>
// //       <Text
// //         style={[
// //           styles.sectionDescription,
// //           {
// //             color: isDarkMode ? Colors.light : Colors.dark,
// //           },
// //         ]}>
// //         {children}
// //       </Text>
// //     </View>
// //   );
// // };

// // const App: () => Node = () => {
// //   const isDarkMode = useColorScheme() === 'dark';

// //   const backgroundStyle = {
// //     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
// //   };

// //   return (
// //     <SafeAreaView style={backgroundStyle}>
// //       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
// //       <ScrollView
// //         contentInsetAdjustmentBehavior="automatic"
// //         style={backgroundStyle}>
// //         <Header />
// //         <View
// //           style={{
// //             backgroundColor: isDarkMode ? Colors.black : Colors.white,
// //           }}>
// //           <Section title="Step One">
// //             Edit <Text style={styles.highlight}>App.js</Text> to change this
// //             screen and then come back to see your edits.
// //           </Section>
// //           <Section title="See Your Changes">
// //             <ReloadInstructions />
// //           </Section>
// //           <Section title="Debug">
// //             <DebugInstructions />
// //           </Section>
// //           <Section title="Learn More">
// //             Read the docs to discover what to do next:
// //           </Section>
// //           <LearnMoreLinks />
// //         </View>
// //       </ScrollView>
// //     </SafeAreaView>
// //   );
// // };

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// //export default App;

// React Native Axios – To Make HTTP API call in React Native
// https://aboutreact.com/react-native-axios/

// import React from 'react';
// //import React in our code.
// import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
// //import all the components we are going to use.
// import axios from 'axios';

// const App = () => {
//   const getDataUsingSimpleGetCall = () => {
//     axios
//       .get('https://jsonplaceholder.typicode.com/posts/1')
//       .then(function (response) {
//         // handle success
//         alert(JSON.stringify(response.data));
//       })
//       .catch(function (error) {
//         // handle error
//         alert(error.message);
//       })
//       .finally(function () {
//         // always executed
//         alert('Finally called');
//       });
//   };

//   const getDataUsingAsyncAwaitGetCall = async () => {
//     try {
//       const response = await axios.get(
//         'https://jsonplaceholder.typicode.com/posts/1',
//       );
//       alert(response.data);
//     } catch (error) {
//       // handle error
//       alert(error.message);
//     }
//   };

//   const postDataUsingSimplePostCall = () => {
//     axios
//       .post('https://jsonplaceholder.typicode.com/posts', {
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//       })
//       .then(function (response) {
//         // handle success
//         alert(JSON.stringify(response.data));
//       })
//       .catch(function (error) {
//         // handle error
//         alert(error.message);
//       });
//   };

//   const multipleRequestsInSingleCall = () => {
//     axios
//       .all([
//         axios
//           .get('https://jsonplaceholder.typicode.com/posts/1')
//           .then(function (response) {
//             // handle success
//             alert('Post 1 : ' + JSON.stringify(response.data));
//           }),
//         axios
//           .get('https://jsonplaceholder.typicode.com/posts/2')
//           .then(function (response) {
//             // handle success
//             alert('Post 2 : ' + JSON.stringify(response.data));
//           }),
//       ])
//       .then(
//         axios.spread(function (acct, perms) {
//           // Both requests are now complete
//           alert('Both requests are now complete');
//         }),
//       );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={{fontSize: 30, textAlign: 'center'}}>
//         Example of Axios Networking in React Native
//       </Text>
//       {/*Running GET Request*/}
//       <TouchableOpacity
//         style={styles.buttonStyle}
//         onPress={getDataUsingSimpleGetCall}>
//         <Text>Simple Get Call</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.buttonStyle}
//         onPress={getDataUsingAsyncAwaitGetCall}>
//         <Text>Get Data Using Async Await GET</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.buttonStyle}
//         onPress={postDataUsingSimplePostCall}>
//         <Text>Post Data Using POST</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.buttonStyle}
//         onPress={multipleRequestsInSingleCall}>
//         <Text>Multiple Concurrent Requests In Single Call</Text>
//       </TouchableOpacity>

//       <Text style={{textAlign: 'center', marginTop: 18}}>
//         www.aboutreact.com
//       </Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: 'center',
//     flex: 1,
//     padding: 16,
//   },
//   buttonStyle: {
//     alignItems: 'center',
//     backgroundColor: '#DDDDDD',
//     padding: 10,
//     width: '100%',
//     marginTop: 16,
//   },
// });

// export default App;