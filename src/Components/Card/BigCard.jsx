import React from 'react'
import './BigCard.css'
import SmallCard from './SmallCard'
import SmallCardTwo from './SmallCardTwo'

export default function BigCard() {
  return (
    <div className='BigCard'>
        <SmallCard></SmallCard>
        <SmallCardTwo></SmallCardTwo>
    </div>
  )
}
