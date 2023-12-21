import React from 'react'
import './ActCardOne.css'
import LongMenu from '../Chat/LongMenu'
import BasicTimeline from '../Material UI/BasicTimeline'
export default function ActCardOne() {
  return (
    <div className='ActCardOne'>
        <div className="actTitle">
            <div className="actText">Activity Timeline</div>
            <div className="logoMenu">
                <LongMenu></LongMenu>
            </div>
        </div>
        <div className="actTimeline">
            <div className="timelineMark">
            <BasicTimeline></BasicTimeline>
            </div>
            
        </div>
    </div>
  )
}
