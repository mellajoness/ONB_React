import React, { useState } from 'react';
import styles  from './css/create-password.module.css'
import {ReactComponent as FidelityIcon} from "../../assets/images/fidelitybrandlogo.svg";


const CreatePassword=props=> {
   const [username,setUsername]=useState('');
   const [password,setPassword]=useState('')
   const [reEnterPassword,setReEnterPassword]=useState('')

   const goBack=()=>{
       console.log(props)
       props.history.goBack()
   }

   const login=()=>{
    props.history.push("/login")
}

   const handleSubmit=()=>{
    props.history.push("/registration-success")
}
        return (
            <React.Fragment>
                <div>
                  <div className={styles.parent}>
                    <div className={styles.backgroundImage}/>
                    
                    <div className={styles.formparent}>
                        <div className={styles.icondiv}><FidelityIcon height="35" />{" "}</div>
                        <div className={styles.welcome}>Registration</div>
                        <div className={styles.submessage}>Please enter your  preferred username  and password for your online banking login</div>

 
                        <div className={styles.input}>
                         <input onChange={e => setUsername(e.target.value)}  value={username} style={{border:'none',paddingLeft:'0.6em',background:'none'}} placeholder='Username'/>
                        </div>

                        <div className={styles.input}>
                         <input onChange={e => setPassword(e.target.value)}  value={password} style={{border:'none',paddingLeft:'0.6em',background:'none'}} placeholder='Password'/>
                        </div>

                        <div className={styles.input}>
                         <input onChange={e => setReEnterPassword(e.target.value)}  value={reEnterPassword} style={{border:'none',paddingLeft:'0.6em',background:'none'}} placeholder='Re-enter Password'/>
                        </div>

                        <button className={styles.button} onClick={handleSubmit}>Sign In</button>
                        <div className={styles.bottomContent}>
                        <div  className={styles.borderParent}>   
                          <div className={styles.fillbored}/>  
                          <div className={styles.fillbored}/>
                          <div className={styles.fillbored}/>
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
export default CreatePassword;
// export default withRouter(connect(mapStatetoProps, { checkLogin, apiError })(Login));