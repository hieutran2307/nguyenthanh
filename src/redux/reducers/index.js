import {combineReducers} from 'redux';



//tao moi nha
//chuc nang giaoven
import LoginReducers from './login/LoginReducers';



const allReducers = combineReducers({
  // chuc nang giao vien
  LoginReducers,
 
});

export default allReducers;
