import {LOADING,LOGIN, LOGIN_FAILED} from '../actions/types'
const INIT_STATE ={
    loginResponse:{},
    loading:false,
    error:''
}

const LoginReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case LOADING: {
        return {
            ...state,
            loading: true,
            error:''
        };
      }
      case LOGIN:
        console.log('login reducer')
        return {
          ...state,
          loginResponse: action.payload,
          loading:false
        }

      case LOGIN_FAILED:
        return {
          ...state,
          loading:false,
          error: action.payload,
        }
    

        

      default:
        return state
    }
  }
  
  export default LoginReducer
  