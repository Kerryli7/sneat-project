import React from 'react'
import './SmallCard.css'
import LongMenu from '../Chat/LongMenu'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
export default function SmallCardTwo() {
  return (
    <div className='SmallCard'>
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
  )
}
