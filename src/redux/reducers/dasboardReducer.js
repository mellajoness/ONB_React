import {LOADING,FETCH_DASHBOARD, FETCH_DASHBOARD_FAILED} from '../actions/types'
const INIT_STATE ={
    items:[],
    loading:false,
    error:''
}

const DashboardReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case LOADING: {
        return {
            ...state,
            loading: true,
            error:''
        };
      }

      case FETCH_DASHBOARD:
        console.log('dashboard reducer')
        return {
          ...state,
          loading:false,
          items: action.payload,
        }

        case FETCH_DASHBOARD_FAILED:
          console.log('dashboard reducer')
          return {
            ...state,
            loading:false,
            error: action.payload,
          }

      default:
        return state
    }
  }
  
  export default DashboardReducer
  