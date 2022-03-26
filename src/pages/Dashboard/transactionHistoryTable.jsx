import React, { useState }  from "react";
import styles from "./css/transactionHistory.module.css";
import {ReactComponent as DoubleArrowIcon} from "../../assets/images/doublearrowicon.svg";
const TransactionHistoryTable = () => {
    const [transaction,setTransaction]=useState([
        {id:1,date:'24-Mar-21',transType:'INTERTRANSFER',account:'5012002154',amount:'$10,000',status:'Successful',description:'ONB TRF TO MICHAEL OL **9006 GTB',charges:'$200'},
        {id:1,date:'24-Mar-21',transType:'INTERTRANSFER',account:'5012002154',amount:'$10,000',status:'Successful',description:'ONB TRF TO MICHAEL OL **9006 GTB',charges:'$200'},
        {id:1,date:'24-Mar-21',transType:'INTERTRANSFER',account:'5012002154',amount:'$10,000',status:'Successful',description:'ONB TRF TO MICHAEL OL **9006 GTB',charges:'$200'},
    ])
    return ( 
        <React.Fragment>
            <div>
               <div className={styles.overview}>Transaction History</div>
                <div  className={styles.parent}>
                <div className="table-responsive">      
                <table className="table">
                 <thead>
                  <tr>
                     <th className={styles.tablehead} scope="col">Date</th>
                     <th className={styles.tablehead} scope="col">Tranaction Type</th>
                     <th className={styles.tablehead} scope="col">Account</th>
                     <th className={styles.tablehead} scope="col">Amount</th>
                     <th className={styles.tablehead} scope="col">Status</th>
                     <th className={styles.tableheaddesc} scope="col">Description</th>
                     <th className={styles.tablehead} scope="col">charges</th>
                  </tr>
                 </thead>
                 <tbody>

                 {transaction.map((trans,index) =>
                  <tr key={index}>
                    <td className={styles.tabledata}>{trans.date}</td>
                    <td className={styles.tabledata}>{trans.transType}</td>
                    <td className={styles.tabledata}>{trans.account}</td>
                    <td className={styles.tabledata}>{trans.amount}</td>
                    <td className={styles.tabledata}>{trans.status}</td>
                    <td className={styles.tabledataDesc}>{trans.description}</td>
                    <td className={styles.tabledata}>{trans.charges}</td>
                 </tr>
                 )}
                </tbody>
                </table>
                </div>

                <div className={styles.btnDiv}>
                <button className={styles.button}>
                    <div className={styles.view}>VIEW ALL TRANSACTIONS</div>
                    <DoubleArrowIcon/>
                </button>
                </div>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default TransactionHistoryTable;