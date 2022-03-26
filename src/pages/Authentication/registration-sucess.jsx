import React, { useState } from 'react';
import styles  from './css/registration-success.module.css'
// Redux

// actions

// import images

import {ReactComponent as FidelityIcon} from "../../assets/images/fidelitybrandlogo.svg";
import {ReactComponent as SuccessTickIcon} from "../../assets/images/successtick.svg";

const RegistrationSuccess=props=> {
 


   const login=()=>{
    props.history.push("/login")
}

   const handleSubmit=()=>{
    props.history.push("/login")
}
        return (
            <React.Fragment>
                <div>
                  <div className={styles.parent}>
                    <div className={styles.backgroundImage}/>
                    
                    <div className={styles.formparent}>
                        <div className={styles.icondiv}><FidelityIcon height="35" />{" "}</div>
                        <div className={styles.successicondiv}><SuccessTickIcon height="55" />{" "}</div>
                        <div className={styles.welcome}>Registration</div>
                        <div className={styles.submessage}>Welcome to Fidelity  Online Banking</div>

 
                       

                        <button className={styles.button} onClick={handleSubmit}>Sign In</button>
                        <div className={styles.bottomContent}>
                        <div  className={styles.borderParent}>   
                          <div className={styles.fillbored}/>  
                          <div className={styles.fillbored}/>
                          <div className={styles.fillbored}/>
                          <div className={styles.fillbored}/>
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
export default RegistrationSuccess;
// export default withRouter(connect(mapStatetoProps, { checkLogin, apiError })(Login));