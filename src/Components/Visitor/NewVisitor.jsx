import React from 'react'
import './NewVisitor.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import VistorGra from './VistorGra';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import VisitorLine from './VisitorLine';
export default function NewVisitor() {
  return (
    <div className='NewVisitor'>
        <div className="visitorL">
            <div className="visitorTitle">
                <div className="visTitL">New Visitors</div>
                <div className="visTitR">Last Week</div>
            </div>
            <div className="visitorContent">
                <div className="visCL">
                    <h4 className='visCLH'>23%</h4>
                    <div className="vsBottom">
                           <ArrowDownwardIcon style={{color:'rgb(255, 62, 29)',fontSize:'16px',marginTop:'3px'}}></ArrowDownwardIcon>
                     <p className='smBottomPtwo'>8.75%</p>
                    </div>
                </div>
                <div className="visCR">
                     <VistorGra></VistorGra>
                </div>
            </div>

        </div>

        <div className="visitorR">
        <div className="visitorTitle">
                <div className="visTitL">Activity</div>
                <div className="visTitR">Last Week</div>
            </div>
            <div className="visitorContent">
                <div className="visCL">
                    <h4 className='visCLH'>82%</h4>
                    <div className="vsBottom">
                    <KeyboardArrowUpIcon style={{color:'rgb(113, 221, 55)',fontSize:'16px', marginTop:'3px'}}></KeyboardArrowUpIcon>
                                    <p className='vsP'>19.6%</p>
                    </div>
                </div>
                <div className="visCR">
                    <VisitorLine></VisitorLine>
                </div>
            </div>
        </div>
    </div>
  )
}
 