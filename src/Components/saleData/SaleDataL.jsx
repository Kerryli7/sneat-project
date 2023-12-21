import React from 'react'
import './SaleDataL.css'
import BasicSelect from '../RevenueCard/BasicSelect'
import HeatmapChart from './HeatmapChart'
export default function SaleDataL() {
  return (
    <div className='SaleDataL'>
        <div className="sadaLTop">
            <div className="sadatopText">
                <div className="sadatopTextFi">Sales Analytics</div>
               <div className="sadatxtData">
                <div className="txtdataleft">+42.6%</div>
                <div className="txtdataright">Than last year</div>
               </div>
            </div>
            <div className="sadatopIcon">
                <div className="selectBox">
                <BasicSelect></BasicSelect>
                </div>
            </div>
        </div>
        <div className="sadaLdown">
            <HeatmapChart></HeatmapChart>
        </div>
    </div>
  )
}
