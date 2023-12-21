import React from 'react'
import'./Report.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import LongMenu from '../Chat/LongMenu';
import RevenueData from './RevenueData';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import IconAvater from './IconAvater';
import ReGra from './ReGra';
export default function Report() {
  return (
    <div className='Report'>
        <div className="reportTop">
            <div className="topBox">
            <div className="smTop">
            <div className="topPic">
                <img className='smTopPic' src="https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/stats-vertical-paypal.png" alt="" />
            </div>
            <div className="logoMenu">
                <LongMenu></LongMenu>
            </div>
        </div>
        <div className="sCardContent">
          <div className='contentText'>Payments</div>
          <h5 className='textH'>$2,468</h5>
       </div>
       <div className="smBottom">
        <ArrowDownwardIcon style={{color:'rgb(255, 62, 29)',fontSize:'16px'}}></ArrowDownwardIcon>
        <p className='smBottomPtwo'>28.14%</p>
       </div>
            </div>

          <div className="topBoxtwo">
                <div className="sCardContent">
               <div className='contentText'>Revenue</div>
               <h5 className='textH'>425k</h5>
              </div>
               <div className="boxTwoGraph">
                <RevenueData></RevenueData>
               </div>
          </div>

        </div>
        <div className="reportBo">
          <div className="reportBoContent">
          <h5 className='textHT'>Profit Report</h5>
          <div className="IconAvator">
          <IconAvater></IconAvater>
          </div>
          
          <div className="reBottom">
          <KeyboardArrowUpIcon style={{color:'rgb(113, 221, 55)',fontSize:'16px', marginTop:'3px'}}></KeyboardArrowUpIcon>
            <p className='smBottomP'>28.14%</p>
          </div>
          <h5 className='textHRe'>$84,686k</h5>
          </div>
          <div className="reportBoGra">
            <ReGra></ReGra>
          </div>
        </div>
    </div>
  )
}
