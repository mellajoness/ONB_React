import React, { useState } from 'react';
import styles  from './css/register.module.css'
// Redux

// import images

import {ReactComponent as FidelityIcon} from "../../assets/images/fidelitybrandlogo.svg";
import {ReactComponent as ArrowBackIcon} from "../../assets/images/arrowback.svg";

const Register=props=> {
   const [accountNumber,setAccountNumber]=useState('');

   const goBack=()=>{
       console.log(props)
       props.history.goBack()
   }

   const login=()=>{
    props.history.push("/login")
}

   const handleSubmit=()=>{
    props.history.push("/otp")
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
                        <div className={styles.submessage}>Please enter your account number to begin  enrollment for our Internet Banking</div>
 
                        <div className={styles.input}>
                         <input onChange={e => setAccountNumber(e.target.value)}  value={accountNumber} style={{border:'none',paddingLeft:'0.6em',background:'none'}} placeholder='Account Number'/>
                        </div>

                        <button className={styles.button} onClick={handleSubmit}>Sign In</button>
                        <div className={styles.bottomContent}>
                        <div  className={styles.borderParent}>   
                          <div className={styles.fillbored}/>  
                          <div className={styles.emptybored}/>
                          <div className={styles.emptybored}/>
                          <div className={styles.emptybored}/>
                        </div>  
                          <div className={styles.bottomtext}>Already have an account? <span onClick={login} className={styles.login}>Log In</span> | Corporate Account? <span className={styles.login}>Register Here</span> Corporate Registration Form/Guide | Copyright Fidelity Bank 2020</div>
                        </div>  
                    </div>
                </div>
  
                </div>
            </React.Fragment>
        );
    }

// const mapStatetoProps = state => {
//     const { loginError } = state.Login;
//     return { loginError };
// }
export default Register;
// export default withRouter(connect(mapStatetoProps, { checkLogin, apiError })(Login));