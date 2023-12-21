import React from 'react'
import './PerformCards.css'
import LongMenu from '../Chat/LongMenu'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ProgressLine from './ProgressLine';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import CompareAre from './CompareAre';
export default function PerformCards() {
  return (
    <div className='PerformCards'>
        <div className="PerformCardsTop">
            <div className="performcard">
            <div className="smTop">
            <div className="topPic">
                <img className='smTopPic' src="https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/stats-vertical-desktop.png" alt="" />
            </div>
            <div className="logoMenu">
                <LongMenu></LongMenu>
            </div>
        </div>
        <div className="sCardContent">
          <div className='contentText'>Revenue</div>
          <h5 className='textH'>$42,389</h5>
       </div>
       <div className="smBottom">
        <ArrowUpwardIcon style={{color:'rgb(113, 221, 55)',fontSize:'16px',marginTop:'3px'}}></ArrowUpwardIcon>
        <p className='smBottomP'>52.76%</p>
       </div>
        </div>

            <div className="performcardss">
                <div className="pfcardsstop">Sales</div>
                <div className="pfcardssmiddle">482k</div>
                <div className="pdcardssdata">
                    <span className='pdcardssSpan'>+34%</span>
                </div>
                <div className="pdcardtitle">Sales Target</div>
                <div className="pdcardssGra">
                    <div className="ProgreeLine">
                    <ProgressLine></ProgressLine>
                    </div>
                    <div className="Progressdata">78%</div>
                    
                </div>
            </div>
        </div>


        <div className="PerformCardsDown">
             <div className="performdownL">
                <div className="performdownTop">Expenses</div>
                <div className="performdownData">
                  <div className="visCLperform">
                    <h4 className='visCLHperform'>$84.7k</h4>
                    <div className="vsBottom">
                           <ArrowDownwardIcon style={{color:'rgb(255, 62, 29)',fontSize:'16px',marginTop:'3px'}}></ArrowDownwardIcon>
                     <p className='smBottomPtwo'>8.2%</p>
                    </div>
                </div>
                </div>
                <div className="performdownyear">
                    <span className='downyearspan'>JULY 2023</span>
                </div>
 
             </div>
             <div className="performdownR">
                <CompareAre></CompareAre>
             </div>
        </div>
    </div>
  )
}
