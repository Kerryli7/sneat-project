import React from 'react'
import './PerformanceOne.css'
import LongMenu from '../Chat/LongMenu'
import PerformPie from './PerformPie'
export default function PerformanceOne() {
  return (
    <div className='PerformanceOne'>
        <div className="leftTop">
            <div className="lefttopcontenttext">
            <div className="saletoptext">Performance</div>
            </div>
            <div className="logoMenu">
                <LongMenu></LongMenu>
            </div>
        </div>
        <div className="performData">
            <div className="performDatas">Earning:$846.17</div>
            <div className="performDatass">Sales:25.7M</div>
        </div>
        <div className="performGra">
            <PerformPie></PerformPie>
        </div>
    </div>
  )
}
