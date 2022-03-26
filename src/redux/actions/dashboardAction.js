// import {Alert, InteractionManager} from 'react-native';
import {GET_SERVICE} from "../../services/backend";
import {DASHBOARD_API} from '../../services/endpoint'
import {LOADING,FETCH_DASHBOARD,FETCH_DASHBOARD_FAILED} from '../actions/types'

export const  fetchDashboard=()=>async(dispatch)=>{
    dispatch({ type: LOADING });
    console.log('dashboard Action')
        try {    
            const response = await GET_SERVICE(DASHBOARD_API)
            .then(response => response.json())
            .then(data=> {
            if(data.data !==null)
               {
                dispatch({
                    type:FETCH_DASHBOARD,
                    payload:data
                })  
               }
            else
              {
                dispatch({
                    type:FETCH_DASHBOARD_FAILED,
                    payload:response.data
                })  
              }
          })
         }
            catch (e) {
              dispatch({
                type:FETCH_DASHBOARD_FAILED,
                payload:"Kindly check Internet connection"
              })  
            }
       };
    
   
