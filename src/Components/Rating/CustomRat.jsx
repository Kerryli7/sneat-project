import React from 'react'
import './CustomRat.css'
import LongMenu from '../Chat/LongMenu'
import TextRating from '../Material UI/TextRating'
import CusGra from './CusGra'
export default function CustomRat() {
  return (
    <div className='CustomRat'>
        <div className="Topcus">
            <div className="toptext">
            Customer Ratings
            </div>
            <div className="logoMenu">
                <LongMenu></LongMenu>
            </div>
        </div>
         <div className="ratData">
            <div className="topData">
                <h3 className="topDataL">4.0</h3>
                <div className="topDataR">
                    <TextRating></TextRating>
                </div>
            </div>
            <div className="downData">
                <div className="ddL">+5.0</div>
                <div className="ddR">Points from last month</div>
            </div>
            <div className="customGra">
                <CusGra></CusGra>
            </div>
         </div>
    </div>
  )
}
