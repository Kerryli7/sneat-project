import React from 'react'
import './StatisticsMiddle.css'
import BasicTabs from './CustomTabPanel'
import StaGra from './StaGra'
import TotalExpress from './TotalExpress'
export default function StatisticsMiddle() {
  return (
    <div className='StatisticsMiddle'>
        <div className="staMTop">
        <BasicTabs></BasicTabs>
        </div>
        <div className="staGra">
            <StaGra></StaGra>
        </div>
        <div className="staBo">
            <div className="staBoGra">
                <TotalExpress></TotalExpress>
            </div>
            <div className="staBotext">
                <div className="boTextTop">Expenses this week</div>
                <div className="boTextBo">$16k less than last week</div>
            </div>
        </div>
       
    </div>
  )
}
