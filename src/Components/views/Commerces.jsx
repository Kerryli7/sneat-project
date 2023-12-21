import React from 'react'
import './Commerces.css'
import BestSeller from '../Visitor/BestSeller'
import NewVisitor from '../Visitor/NewVisitor'
import IncomeL from '../Income/IncomeL'
import IncomeR from '../Income/IncomeR'
import PerformanceOne from '../Performance/PerformanceOne'
import Conversion from '../Performance/Conversion'
import PerformCards from '../Performance/PerformCards'
import Footer from '../Footer/Footer'
import BalanceL from '../Balance/BalanceL'
import BalanceR from '../Balance/BalanceR'
export default function Commerces() {
  return (
    <div className='Commerces'>
       <div className="visitor">
        <BestSeller></BestSeller>
        <NewVisitor></NewVisitor>
       </div>
       <div className="income">
        <IncomeL></IncomeL>
        <IncomeR></IncomeR>
       </div>
       <div className="Performance">
        <PerformanceOne></PerformanceOne>
        <Conversion></Conversion>
        <PerformCards></PerformCards>
       </div>
       <div className="Balance">
        <BalanceL></BalanceL>
        <BalanceR></BalanceR>
       </div>
       <div className="Footer">
          <Footer></Footer>
        </div>
    </div>
  )
}
