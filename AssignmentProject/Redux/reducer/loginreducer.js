
const initialState = {
    uname: "",
    pwd: ""
  }

  export const reducer=(state=initialState,action)=>{
// console.log("Hii")
// console.log(action.data) 
   
    switch(action.type){
    case 'DO_CHANGEU':
      
      return{
      ...state,
       uname: action.data
      }
    
    case 'DO_CHANGE':
      return{
        ...state,
        pwd : action.data
       
      }
    
    case 'DO_RESET':
     console.log("ame")
     return{
        uname: state.uname="",
        pwd:  state.pwd=""
      }
    }   
   return state
    
  }