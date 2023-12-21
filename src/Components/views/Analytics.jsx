import React from 'react'
import './Analytics.css'
import MultiActionAreaCard from '../Content/MultiActionAreaCard'
import BigCard from '../Card/BigCard'
import Revenue from '../Content/Revenue'
import Report from '../RevenueCard/Report'
import StatisticsLeft from '../StatisticsCard/Statistics'
import StatisticsMiddle from '../StatisticsCard/StatisticsMiddle'
import StatisticsRight from '../StatisticsCard/StatisticsRight'
import ActCardOne from '../Activity/ActCardOne'
import ActCardTwo from '../Activity/ActCardTwo'
import Footer from '../Footer/Footer'
export default function Analytics() {
  return (
    <div className='analyticsAll'>
        <div className="card">
            <MultiActionAreaCard></MultiActionAreaCard>
            <BigCard></BigCard>
        </div>
        <div className="RevenueCard">
           <Revenue></Revenue>

           <Report></Report>
        </div>
        <div className="Statistics">
         <StatisticsLeft></StatisticsLeft>
         <StatisticsMiddle></StatisticsMiddle>
         <StatisticsRight></StatisticsRight>
        </div>
        <div className="Activity">
          <ActCardOne></ActCardOne>
          <ActCardTwo></ActCardTwo>
        </div>
        <div className="Footer">
          <Footer></Footer>
        </div>
    </div>
  )
}
