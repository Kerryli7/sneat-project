import React from 'react'
import './SmallCard.css'
import Cardine from './CardLine'
export default function SmallCard() {
  return (
    <div className='SmallCard'>
       <div className="sCardContent">
          <div className='contentText'>Order</div>
          <h5 className='textH'>276k</h5>
       </div>
       <div className="SmallGra">
        <Cardine></Cardine>
       </div>
    </div>
  )
}
