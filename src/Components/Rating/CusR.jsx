import React from 'react'
import'./CusR.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import LongMenu from '../Chat/LongMenu';
import SimpleAreaChart from './SimpleAreaChart';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CusPie from './CusPie';

export default function CusR() {
  return (
    <div className='CusR'>
        <div className="cusrTop">
        <div className="cutopBoxtwo">
                <div className="sCardContent">
               <div className='contentText'>Sessions</div>
               <h5 className='textH'>2845</h5>
              </div>
               <div className="boxTwoGraph">
                <SimpleAreaChart></SimpleAreaChart>
               </div>
          </div>
            <div className="cutopBox">
            <div className="smTop">
            <div className="topPic">
                <img className='smTopPic' src="https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/stats-vertical-cube.png" alt="" />
            </div>
            <div className="logoMenu">
                <LongMenu></LongMenu>
            </div>
        </div>
        <div className="sCardContent">
          <div className='contentText'>Order</div>
          <h5 className='textH'>$1,286</h5>
       </div>
       <div className="smBottom">
        <ArrowDownwardIcon style={{color:'rgb(255, 62, 29)',fontSize:'16px',marginTop:'3px'}}></ArrowDownwardIcon>
        <p className='smBottomPtwo'>13.24%</p>
       </div>
            </div>

        </div>
        <div className="cursBo">
          <div className="reportBoContent">
          <h5 className='curbotext'>Generated Leads</h5>
          <div className="curboP">Monthly Report</div>
          <h5 className='textHRe'>4,234</h5>
          <div className="curBottom">
          <KeyboardArrowUpIcon style={{color:'rgb(113, 221, 55)',fontSize:'16px', marginTop:'3px'}}></KeyboardArrowUpIcon>
            <p className='smBottomP'>12.8%</p>
          </div>
          </div>
          <div className="cursboGra">
            <div className="piebox">
            <CusPie></CusPie>
            </div>
          </div>
        </div>
    </div>
  )
}
