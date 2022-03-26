import React, {useEffect, useState} from 'react';
import styles from "./css/accountOverview.module.css";
import {BsEyeSlash,BsEye} from "react-icons/bs";
import {IoIosArrowForward} from "react-icons/io";
import BarChart from "../Charts/barchat";
import { connect } from 'react-redux';
import { propTypes } from 'prop-types';
import BounceLoader from "react-spinners/BounceLoader";
import { css } from "@emotion/react"; 
import {fetchDashboard} from '../../redux/actions/dashboardAction'
import {ReactComponent as AirtimeIcon} from "../../assets/images/quickairtime.svg";
import {ReactComponent as TransferIcon} from "../../assets/images/quicktransfer.svg";
import {ReactComponent as BulkTransferIcon} from "../../assets/images/bulktransfericon.svg";
import {ReactComponent as SalaryIcon} from "../../assets/images/salaryicon.svg";
import {ReactComponent as LoanAndInvestmentIcon} from "../../assets/images/loansandinvestmenticon.svg";
import {ReactComponent as StatementIcon} from "../../assets/images/statementicon.svg";
import {ReactComponent as WorkflowIcon} from "../../assets/images/workflowicon.svg";
import {ReactComponent as AccountIcon} from "../../assets/images/accounticon.svg";
import {ReactComponent as InstructionIcon} from "../../assets/images/instructionicon.svg";
import { withRouter } from 'react-router-dom';
const override = css`
  display: block;
  margin: 0 auto;
  border-color: #0D2565;
  margin-bottom:10px
`;
const AccountOverview = props => {
    const [showEye,setShowEye]=useState(false)
    const [color, setColor] = useState("#0D2565");
    const toogleEye=()=>{
        setShowEye(!showEye)
    }

    const goToTransfer=()=>{
      console.log('props',props)
      props.history.push("/transfer")
    }

    useEffect(()=>{
       props.fetchDashboard()
       console.log('xxxxx',props.item)
       console.log('LOADIN',props.loading)
    },[]);
    return (  
        <React.Fragment> 
            <div className={styles.parent}>
                <div className={styles.overview}>Account Overview</div>
                <div className={styles.backgroundParent}>
                  <div className={styles.backgroundImageOne}>
                      <div className={styles.savingparent}>
                          <div className={styles.saving}>Savings Account</div>
                          <div className={styles.acc}>Acc 1 of 2</div>
                      </div>
                      <div className={styles.accountnumber}>0123456789</div>

                    <div className={styles.bottomcontent}>
                      <div className={styles.moneyeyeparent}>
                          <div style={{display:showEye ? 'none' : ''}} className={styles.amountone}>₦234,568.00</div>
                          <div style={{display:!showEye ? 'none' : ''}} className={styles.star}>₦xx,xxx.xx</div>
                          <div onClick={toogleEye}>
                              <BsEyeSlash style={{color:'white',fontSize:'1.2em',paddingTop:'0em',display:!showEye ? 'none' : ''}}/>
                              <BsEye style={{color:'white',fontSize:'1.2em',paddingTop:'0em',display:showEye ? 'none' : ''}}/>
                           </div>
                      </div>
                      <div className={styles.amountTwo}>₦234,568.00</div><br></br>

                      <div className={styles.savingparent}>
                          <div className={styles.balance}>Available balance</div>
                          <div className={styles.balance}>Ledger balance</div>
                      </div>

                      <div className={styles.viewparent}>
                          <div className={styles.view}>View Account Details</div>
                          <IoIosArrowForward style={{color:'white',fontSize:'0.8em'}}/>
                      </div>
                    </div>  
                  </div>


                  <div className={styles.backgroundImageTwo}>
                  <div className={styles.savingparent}>
                          <div className={styles.saving}>Savings Account</div>
                          <div className={styles.acc}>Acc 1 of 2</div>
                      </div>
                      <div className={styles.accountnumber}>0123456789</div>

                    <div className={styles.bottomcontent}>
                      <div className={styles.moneyeyeparent}>
                          <div style={{display:showEye ? 'none' : ''}} className={styles.amountone}>₦234,568.00</div>
                          <div style={{display:!showEye ? 'none' : ''}} className={styles.star}>₦xx,xxx.xx</div>
                          <div onClick={toogleEye}>
                              <BsEyeSlash style={{color:'white',fontSize:'1.2em',paddingTop:'0em',display:!showEye ? 'none' : ''}}/>
                              <BsEye style={{color:'white',fontSize:'1.2em',paddingTop:'0em',display:showEye ? 'none' : ''}}/>
                           </div>
                      </div>
                      <div className={styles.amountTwo}>₦234,568.00</div><br></br>

                      <div className={styles.savingparent}>
                          <div className={styles.balance}>Available balance</div>
                          <div className={styles.balance}>Ledger balance</div>
                      </div>

                      <div className={styles.viewparent}>
                          <div className={styles.view}>View Account Details</div>
                          <IoIosArrowForward style={{color:'white',fontSize:'0.8em'}}/>
                      </div>
                    </div>  
                  </div>

                  <div className={styles.backgroundImageThree}>
                      <BarChart/>
                  </div>
                </div>  

                <div className={styles.quick}>Quick Operations</div>
               
                    <div className={styles.quickboxParent}>
                      <div className={styles.quickbox}>
                        <AirtimeIcon className={styles.icon} />
                        <div className={styles.quickDesc}>Airtime</div>   
                      </div>

                      <div className={styles.quickbox} onClick={goToTransfer}>
                        <TransferIcon className={styles.icon}/>
                        <div className={styles.quickDesc}>Transfer</div>   
                      </div>

                      <div className={styles.quickbox}>
                        <BulkTransferIcon className={styles.icon}/>
                        <div className={styles.quickDesc}>Bulk Transfer</div>   
                      </div>

                     <div className={styles.quickbox}>
                        <SalaryIcon className={styles.icon}/>
                        <div className={styles.quickDesc}>Salary</div>   
                      </div>

                      <div className={styles.quickbox}>
                        <LoanAndInvestmentIcon className={styles.icon} />
                        <div className={styles.quickDesc}>Loan</div>   
                      </div>

                      <div className={styles.quickbox}>
                        <StatementIcon className={styles.icon} />
                        <div className={styles.quickDesc}>Statement</div>   
                      </div>

                      <div className={styles.quickbox}>
                        <WorkflowIcon className={styles.icon}/>
                        <div className={styles.quickDesc}>Workflow</div>   
                      </div>

                      <div className={styles.quickbox}>
                        <InstructionIcon className={styles.icon}/>
                        <div className={styles.quickDesc}>Instructions</div>   
                      </div>

                      <div className={styles.quickbox}>
                        <AccountIcon className={styles.icon}/>
                        <div className={styles.quickDesc}>Account</div>   
                      </div> 
                    </div>
                    {props.loading &&
                      <div>
                        <BounceLoader color={color} loading={props.loading} css={override} size={20} /> 
                      </div>
                    }
                  

                    <div>
                       {props.item.map((item,index) =>
                         <div>
                            <div key={index}>{item.remarks}</div>
                         </div>
                       )}
                    </div>  
              
            </div>
        </React.Fragment>
     );
}
 
// AccountOverview.propTypes={
//   fetchDashboard:propTypes.func.isRequired,
//   item:propTypes.array.isRequired
// }
const mapStateToProps=state=>({
  item: state.dasboardItem.items,
  loading: state.dasboardItem.loading,
})
export default withRouter (connect(mapStateToProps,{fetchDashboard}) (AccountOverview));
