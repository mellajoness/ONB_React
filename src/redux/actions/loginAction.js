
import {POST_SERVICE} from "../../services/backend";
import {LOGIN_API} from '../../services/endpoint'
import {LOADING, LOGIN,LOGIN_FAILED} from '../actions/types'

export const  loginAction=(body,history)=>async(dispatch)=>{
    dispatch({ type: LOADING });
    console.log('LOGIN Action')
        try {    
            const response = await POST_SERVICE(body,LOGIN_API)
            console.log('log res',response)
            if(response.code==='00')
               {  
                history.push("/calendar")         
                dispatch({
                    type:LOGIN,
                    payload:response,
                })  
               }
               
            else
              {
                dispatch({
                    type:LOGIN_FAILED,
                    payload:response.message
                })  
              }
         
         }
            catch (e) {
              dispatch({
                type:LOGIN_FAILED,
                payload:"Kindly check Internet connection"
              })  
           }
       };
    
   
