import React from 'react'
import './IncomeL.css'
import LongMenu from '../Chat/LongMenu';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import IncomeChat from './IncomeChat';
import IncomePie from './IncomePie';
export default function IncomeL() {
  return (
    <div className='IncomeL'>
        <div className="incomecard">
        <div className="smTop">
            <div className="topPic">
                <img className='smTopPic' src="https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/stats-vertical-wallet.png" alt="" />
            </div>
            <div className="logoMenu">
                <LongMenu></LongMenu>
            </div>
        </div>
        <div className="sCardContent">
          <div className='contentText'>Sales</div>
          <h5 className='textH'>$4,679</h5>
       </div>
       <div className="smBottom">
        <ArrowUpwardIcon style={{color:'rgb(113, 221, 55)',fontSize:'16px',marginTop:'3px'}}></ArrowUpwardIcon>
        <p className='smBottomP'>28.14%</p>
       </div>
        </div>
        <div className="incomecardTwo">
                <div className="sCardContent">
               <div className='contentText'>Profit</div>
               <h5 className='textH'>624k</h5>
              </div>
               <div className="incomeboxTwoGraph">
                <IncomeChat></IncomeChat>
               </div>
         
        </div>
        <div className="incomecardThree">
            <div className="incomecardTop">Expenses</div>
            <div className="incomecardTPie">
                <IncomePie></IncomePie>
            </div>
            <div className="incomecardtxt">$2k Expenses more</div>
            <div className="incomecardtxtdown">than last month</div>
        </div>

        <div className="incomecardFour">
        <div className="smTop">
            <div className="topPic">
                <img className='smTopPic' src="https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/stats-vertical-card.png" alt="" />
            </div>
            <div className="logoMenu">
                <LongMenu></LongMenu>
            </div>
        </div>
        <div className="sCardContent">
          <div className='contentText'>Transactions</div>
          <h5 className='textH'>$14,854</h5>
       </div>
       <div className="smBottom">
        <ArrowUpwardIcon style={{color:'rgb(113, 221, 55)',fontSize:'16px',marginTop:'3px'}}></ArrowUpwardIcon>
        <p className='smBottomP'>17.53%</p>
       </div>
        </div>
    </div>
  )
}
