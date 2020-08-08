import {
    POST_LOGIN,
    POST_LOGIN_SUCCESS,
    POST_LOGIN_ERROR,
    LOGOUT,
    LOGOUT_ERROR,
    LOGOUT_SUCCESS,
    CHANGE_STATE_LOGIN_FORM,
  } from '../../actions/login/LoginActions';
  
  import {arrayIsEmpty} from '../../../components/custom/function';
  const initialState = {
    state: -1,
    loginData: null,
    error: '',
    loading: false,
    statusCode: null,
  };
  const LoginReducers = (state = initialState, action) => {
    switch (action.type) {
      case CHANGE_STATE_LOGIN_FORM:
        if (arrayIsEmpty(action.key)) {
          return initialState;
        } else {
          var stateNew = {...state};
          for (var i = 0; i < action.key.length; i++) {
            stateNew = {
              ...stateNew,
              [action.key[i]]: action.value[i],
            };
          }
          return stateNew;
        }
      case POST_LOGIN:
        return Object.assign({}, state, {
          error: '',
          loginData:null,
          state: 0,
          loading: true,
        });
      case POST_LOGIN_SUCCESS:
        return Object.assign({}, state, {
          error:'',
          state: 1,
          loading: false,
          loginData: action.response,
          statusCode:action.response.statusCode,
        });
      case POST_LOGIN_ERROR:
        return Object.assign({}, state, {
          loginData:null,
          state: -1,
          error: action.error,
          loading: false,
        });
        case LOGOUT:
        return Object.assign({}, state, {
          error:null,
          loginData:null,
          state: 0,
          loading: true,
        });
      case LOGOUT_SUCCESS:
        return Object.assign({}, state, {
          state: 1,
          error: action.error,
          loading: false,
        });
      case LOGOUT_ERROR:
        return Object.assign({}, state, {
          state: -1,
          error: action.error,
          loading: false,
        });
      default:
        return state;
    }
  };
  export default LoginReducers;
  