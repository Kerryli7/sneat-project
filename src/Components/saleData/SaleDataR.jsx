import React from 'react'
import './SaleDataR.css'
import LongMenu from '../Chat/LongMenu'
import SalePie from './SalePie'
export default function SaleDataR() {
  return (
    <div className='SaleDataR'>
        <div className="Topcus">
            <div className="toptext">
            Sales Stats
            </div>
            <div className="logoMenu">
                <LongMenu></LongMenu>
            </div>
        </div>
        <div className="dataRgra">
            <SalePie></SalePie>
            <div className="datarshow">
                <div className="datarshowL">
                    <div className="datashowcircleL"></div>
                    <div className="datashowtxtL">Conversion Ratio</div>
                </div>
                <div className="datarshowR">
                <div className="datashowcircleR"></div>
                    <div className="datashowtxR">Total requirements</div>
                </div>
            </div>
        </div>
    </div>
  )
}
