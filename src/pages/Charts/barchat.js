import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import styles from "./css/barchat.module.css";
import {ReactComponent as LineIcon} from "../../assets/images/lineicon.svg";
import {ReactComponent as ChartIcon} from "../../assets/images/charticon.svg";
const BarChart=()=> {
    const [showLine,setShowline]=useState(false);
    const [showBar,setShowBar]=useState(true)
    const [series,setSeries]=useState([{
                name: 'Inflow',
                data: [46, 57, 59, 54, 62, 58, 64, 60, 66, 56, 45, 56]
            }, {
                name: 'Outflow',
                data: [74, 83, 102, 97, 86, 106, 93, 114, 94, 68, 78, 88]
            }]);

    const [options,setOptions]=useState({
                chart: {
                    toolbar: {
                        show: false,
                    }
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '45%',
                        endingShape: 'rounded'	
                    },
                },
                dataLabels: {
                    enabled: false,
                },
               
                legend: {
                  show: false
                },
                stroke: {
                    show: true,
                    width: 2,
                    colors: ['transparent']
                },
                
                colors: ['#15c15d', '#ff0000'],
                xaxis: {
                    categories: ["Jan",'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', "Nov", "Dec"],
                },
                grid: {
                    borderColor: '#f1f1f1',
                },
                fill: {
                    opacity: 1
            
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return "₦" + val + " thousands"
                        }
                    }
                }
            
        });

    const [lineseries,setLineSeries]=useState([
            {
               name: "Inflow",
               data: [100, 234, 322, 436, 355, 235, 343, 423, 343, 355, 123, 53]
             },
             {
                name: "Outflow",
                data: [30, 74, 8, 200, 292, 105, 243, 123, 243, 155, 193, 93]
              }
           ]);
 
    const [lineoptions,setLineOptions]=useState({
             chart: {
               type: 'line',
               zoom: {
                 enabled: false
               },
               toolbar: {
                 show: false,
               }
             },
             colors: ['#15c15d', '#ff0000'],
             dataLabels: {
                 enabled: false
             },
             stroke: {
               width: [".9"],
               curve: 'smooth',
               dashArray: [0]
             },
             legend: {
               // tooltipHoverFormatter: function(val, opts) {
               //   return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
               // }
             },
             markers: {
               size: 0,
               hover: {
                 size: 0,
               }
             },
             xaxis: {
                categories: ["Jan",'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', "Nov", "Dec"],
             },
             tooltip: {
               y: [
                 {
                   title: {
                     formatter: function (val) {
                       return val;
                     }
                   }
                 }
               ]
             }
           });    
    
    const showLineChart=()=>{
      setShowline(true)
     if(showLine===true){
       setShowBar(false)
     }
    }    

    const showBarChart=()=>{
      setShowBar(true)
      if(showBar===true){
      setShowline(false)
      }
    }
  
        return (
            <React.Fragment>
                <div id="bar-chart" className="apex-charts">
                   <div className={styles.graphRow}>
                    
                      <div className={styles.monthly}>Monthly Overview</div>
                     
                      
                        
                       <div className={styles.a}> 
                          <div className={styles.descContent}>
                           <div className={styles.descParent}>
                              <div className={styles.descBox} />
                              <div className={styles.income} >Income</div>
                           </div>

                           <div className={styles.descParentTwo}>
                              <div className={styles.descBoxTwo} />
                              <div className={styles.income} >Outflow</div>
                           </div>
                       </div>  
                           
                          <LineIcon onClick={showLineChart} height="19" width="19"  cursor="pointer" className={styles.lineMagin}/>
                          <ChartIcon onClick={showBarChart} height="19" width="19" cursor="pointer"/>  
                       </div>
                    </div>
                    {(showBar===true && showLine==false )&&
                     <ReactApexChart options={options} series={series} type="bar" height="170px" />
                    }
                     {showLine===true &&
                     <div>
                      <ReactApexChart options={lineoptions} series={lineseries} type="area" height="170px" />
                     </div>
                    }
                </div>
            </React.Fragment>
        );
        }
export default BarChart;