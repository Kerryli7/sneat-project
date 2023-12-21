import React from 'react'
import './Conversion.css'
import LongMenu from '../Chat/LongMenu'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ConverLine from './ConverLine';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
export default function Conversion() {
  return (
    <div className='Conversion'>
        <div className="leftTop">
            <div className="lefttopcontenttext">
            <div className="saletoptext">Earning Report</div>
            <div className="saledowntext">Weekly Earnings Overview</div>
            </div>
            <div className="logoMenu">
                <LongMenu></LongMenu>
            </div>
        </div>
        <div className="ConversionData">
            <div className="ConversionDataL">
                <h4 className="ConversionDataPer">8.72%</h4>
                <div className="ConreBottom">
                <KeyboardArrowUpIcon style={{color:'rgb(113, 221, 55)',fontSize:'16px', marginTop:'3px'}}></KeyboardArrowUpIcon>
                 <p className='smBottomP'>68.2%</p>
               </div>
            </div>
            <div className="ConversionDataR">
                <ConverLine></ConverLine>
            </div>
        </div>
        <div className="ConversionList">
            <div className="ConListContent">
                  <div className="ConListContentL">
                    <p className='ConListContentLP'>Impressions</p>
                    <p className='ConListContentLPss'>12.4k Visits</p>
                  </div>

                  <div className="ConListContentR">
                        <div className="trreBottom">
                            <ArrowUpwardIcon style={{color:'rgb(113, 221, 55)',fontSize:'16px',marginTop:'10px'}}></ArrowUpwardIcon>
                            <p className='trsmBottomPss'>28.14%</p>
                        </div>
                  </div>
            </div>

            <div className="ConListContent">
            <div className="ConListContentL">
                    <p className='ConListContentLP'>Added To Cart</p>
                    <p className='ConListContentLPss'>32 Product in cart</p>
                  </div>

                  <div className="ConListContentR">
                        <div className="trreBottom">
                            <ArrowDownwardIcon style={{color:'rgb(255, 62, 29)',fontSize:'16px',marginTop:'10px'}}></ArrowDownwardIcon>
                            <p className='trsmBottomPss'>-8.3%</p>
                        </div>
                  </div>
            </div>
            <div className="ConListContent">
            <div className="ConListContentL">
                    <p className='ConListContentLP'>Checkout</p>
                    <p className='ConListContentLPss'>21 Product checkout</p>
                  </div>

                  <div className="ConListContentR">
                        <div className="trreBottom">
                            <ArrowUpwardIcon style={{color:'rgb(113, 221, 55)',fontSize:'16px',marginTop:'10px'}}></ArrowUpwardIcon>
                            <p className='trsmBottomPss'>9.12%</p>
                        </div>
                  </div>
            </div>
            <div className="ConListContent">
            <div className="ConListContentL">
                    <p className='ConListContentLP'>Purchased</p>
                    <p className='ConListContentLPss'>12 Orders</p>
                  </div>

                  <div className="ConListContentR">
                        <div className="trreBottom">
                            <ArrowUpwardIcon style={{color:'rgb(113, 221, 55)',fontSize:'16px',marginTop:'10px'}}></ArrowUpwardIcon>
                            <p className='trsmBottomPss'>2.24%</p>
                        </div>
                  </div>
            </div>
        </div>
    </div>
  )
}
