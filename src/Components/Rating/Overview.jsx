import React from 'react'
import './Overview.css'
import OverGra from './OverGra'
export default function Overview() {
  return (
    <div className='Overview'>
        <div className="OverviewTxt">
            <div className="overTxtTop">Overview & Sales Activity</div>
            <div className="overTxtbo">Check out each column for more details</div>
        </div>
        <div className="OverviewGra">
            <OverGra></OverGra>
        </div>
    </div>
  )
}
