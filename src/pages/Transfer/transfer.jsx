import React,{useState} from "react";
import styles from "./css/transfer.module.css";
import {ReactComponent as AirtimeIcon} from "../../assets/images/quickairtime.svg";
import {ReactComponent as TransferIcon} from "../../assets/images/quicktransfer.svg";
import {ReactComponent as BulkTransferIcon} from "../../assets/images/bulktransfericon.svg";
import {ReactComponent as SalaryIcon} from "../../assets/images/salaryicon.svg";
import {ReactComponent as LoanAndInvestmentIcon} from "../../assets/images/loansandinvestmenticon.svg";
import {ReactComponent as StatementIcon} from "../../assets/images/statementicon.svg";
import {ReactComponent as WorkflowIcon} from "../../assets/images/workflowicon.svg";
import {ReactComponent as AccountIcon} from "../../assets/images/accounticon.svg";
import {ReactComponent as InstructionIcon} from "../../assets/images/instructionicon.svg";
const Transfer = () => {
  const [selectAcc,setSelectAcc]=useState(false)
  const [transType,setTransType]=useState([
    {id:1,name:'Transfer to Fidelity',image:AirtimeIcon},
    {id:2,name:'Transfer to Bank',image:AirtimeIcon},
    {id:3,name:'Transfer to Beneficiary',image:AirtimeIcon},
    {id:4,name:'Fx Transfer to Another Bank',image:AirtimeIcon},
    {id:5,name:'Bulk Transaction',image:AirtimeIcon},
    {id:6,name:'Salary',image:AirtimeIcon},
  ])

  const selectTransfer=(selected)=>{
    console.log(selected)
    setSelectAcc(true)
  }
    return ( 
        <React.Fragment>
            <div className={styles.parent}>
                <div className={styles.transfer}>Transfer</div>
                <div className={styles.selectTimeRow}>
                   <div className={styles.select}>Select transfer type and proceed</div>
                   <div className={styles.date}>Tuesday 20th June,2020 14:20</div>
                </div>

                <div className={styles.quickboxParent}>
                  {transType.map((type,index)=>
                    <div key={type.id} onClick={()=>selectTransfer(type)} style={{background:selectAcc===index ? 'green' : ''}} className={styles.quickbox}>
                      {/* <type.image className={styles.icon}/> */}
                      <div className={styles.quickDesc}>{type.name}</div>   
                    </div> 
                  )}
                </div>

                 
                <div className={styles.transferTo}>Transfer to a Beneficiary</div>
                <div className={styles.horizontalline}/>

                
               
            </div>
        </React.Fragment>
     );
}
 
export default Transfer;