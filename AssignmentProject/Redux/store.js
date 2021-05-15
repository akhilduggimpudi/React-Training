import {createStore} from 'redux'
import {reducer} from './reducer/loginreducer'


 const store=createStore(reducer);
 export default store;