import React, { useState } from 'react';
import styles  from './css/otp.module.css'
import {ReactComponent as FidelityIcon} from "../../assets/images/fidelitybrandlogo.svg";
import {ReactComponent as ArrowBackIcon} from "../../assets/images/arrowback.svg";
import OtpInput from 'react-otp-input';
import { setOptions } from 'leaflet';

const OTP=props=> {
   const [otp,setOtp]=useState('');

   const goBack=()=>{
       console.log(props)
       props.history.goBack()
   }

   const login=()=>{
       props.history.push("/login")
}

   const handleSubmit=()=>{
       props.history.push("/create-password")
       console.log('create-password')

}
        return (
            <React.Fragment>
                <div>
                  <div className={styles.parent}>
                    <div className={styles.backgroundImage}/>
                    
                    <div className={styles.formparent}>
                        <div className={styles.arrowicon}><ArrowBackIcon style={{cursor:'pointer'}} onClick={goBack} height="35" />{" "}</div>
                        <div className={styles.icondiv}><FidelityIcon height="35" />{" "}</div>
                        <div className={styles.welcome}>Registration</div>
                        <div className={styles.submessage}>Please enter your  the 4-digit code sent to your phone number ending with <span className={styles.login}>*******9540</span> </div>

                       {/* <div style={{display:'content',justifyContent:'space-between'}}> */}
                        <OtpInput
                           value={otp}
                           onChange={otp =>setOtp(otp)}
                           numInputs={4}
                           shouldAutoFocus={true}
                           isInputNum={true}
                           isInputSecure={true}
                           containerStyle={{display:'flex',justifyContent:'space-between'}}
                           inputStyle={{width:'50px',height:'50px',marginTop:'2em',border:'1px solid #B5B5B5',borderRadius:'8px'}}
                         />
                         {/* </div> */}
                      
                        <button style={{cursor:'pointer'}} className={styles.button} disabled={otp<4} onClick={handleSubmit}>Continue</button>
                        <div className={styles.noOtp}>Didn’t get code?<span className={styles.resend}>Resend SMS</span> </div>
                        <div className={styles.bottomContent}>
                        <div  className={styles.borderParent}>   
                          <div className={styles.fillbored}/>  
                          <div className={styles.fillbored}/>
                          <div className={styles.emptybored}/>
                          <div className={styles.emptybored}/>
                        </div>  
                          <div className={styles.bottomtext}>Already have an account? <span onClick={login} className={styles.login}>Log In</span> | Corporate Account? <span className={styles.login}>OTP Here</span> Corporate Registration Form/Guide | Copyright Fidelity Bank 2020</div>
                        </div>  
                    </div>
                </div>
  
                </div>
            </React.Fragment>
        );
    }

export default OTP;
// export default withRouter(connect(mapStatetoProps, { checkLogin, apiError })(Login));