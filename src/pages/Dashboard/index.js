import React, { Component } from "react";

//Import Components
import AccountOverview from "./accountOverview";
import TransactionHistoryTable from "./transactionHistoryTable";
import WeeklyOverview from "./weeklyOverview";


const Dashboard=()=> {
   
        return (
            <React.Fragment>
                <div>
                  <AccountOverview/>
                  <WeeklyOverview/>
                  <TransactionHistoryTable/>
                </div>
            </React.Fragment>
        );
    }


export default Dashboard;
