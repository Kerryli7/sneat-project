import React from 'react'
import './TeamLeft.css'
import LongMenu from '../Chat/LongMenu'
import TeamTable from './TeamTabl'
export default function TeamLeft() {
  return (
    <div className='TeamLeft'>
            <div className="teamTopcus">
            <div className="toptext">
            Team Members
            </div>
            <div className="logoMenu">
                <LongMenu></LongMenu>
            </div>
        </div>
        <div className="TeamTable">
            <TeamTable></TeamTable>
        </div>
    </div>
  )
}
