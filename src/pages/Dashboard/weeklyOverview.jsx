import React from "react";
import styles from "./css/weekly.module.css";
import {ReactComponent as BarchatIcon} from "../../assets/images/barchaticon.svg";
import {ReactComponent as OutflowIcon} from "../../assets/images/outflowicon.svg";
import {ReactComponent as InflowIcon} from "../../assets/images/inflowicon.svg";
const WeeklyOverview = (props) => {
  const goToTransfer=()=>{
    console.log('props',props)
    props.history.push("/transfer")
  }
    return ( 
        <React.Fragment>
            <div className={styles.parent}>

              <div className={styles.weekDropDownRow}>
                <div onClick={goToTransfer} className={styles.week}>This Week’s Overview</div>
                <select className={styles.dropdown}>
                  <option defaultValue>4 March - 11 March, 2021</option>
                  <option value="1">4 March - 11 March, 2021</option>
                  <option value="2">4 March - 11 March, 2021</option>
                  <option value="3">4 March - 11 March, 2021</option>
                </select>
              </div>

              <div className={styles.segmentparent}>
                  <div className={styles.segment}>
                    <div className={styles.firstsegment}>
                      <div>
                          <div className={styles.weeklyCount}>100</div>
                          <div className={styles.description}>Transaction</div>
                      </div>
                      <div>
                          <div className={styles.weeklyCount}>2</div>
                          <div className={styles.description}>Pending Approval</div>
                      </div>
                      <div className={styles.graphicon}><BarchatIcon /></div>
                    </div>
                  </div>

                  <div className={styles.segmentTwo}>
                    <div  className={styles.segmentTwoRow}>
                     <div>
                        <div className={styles.outflowCount}>₦235,201.25</div>
                        <div className={styles.description}>outflow</div>
                     </div>
                     <div className={styles.graphicobbbn}><OutflowIcon /></div>
                   </div>
                  </div>

                  <div className={styles.segmentTwo}>
                  <div  className={styles.segmentTwoRow}>
                     <div>
                        <div className={styles.inflowCount}>₦235,201.25</div>
                        <div className={styles.description}>inflow</div>
                     </div>
                     <div className={styles.graphicobbbn}><InflowIcon /></div>
                   </div>
                  </div>
              </div>

            </div>
        </React.Fragment>
     );
}
 
export default WeeklyOverview;