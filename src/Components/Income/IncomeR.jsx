import React from 'react'
import './IncomeR.css'
import IncomeAreaLine from './IncomeAreaLine'
import LongMenu from '../Chat/LongMenu'
export default function IncomeR() {
  return (
    <div className='IncomeR'>
        <div className="incomeRl">
            <div className="incrltitle">Total Income</div>
            <div className="incrlcontent">Yearly report overview</div>
            <div className="incrGra">
                <IncomeAreaLine></IncomeAreaLine>
            </div>
        </div>
        
        <div className="incomeRr">
        <div className="incomeRrTop">
        <div className="rrtopContent">
            <div className="rrtoptop">Report</div>
            <div className="rrtopdow">Monthly Avg. $45.578k</div>
        </div>
        <div className="logoMenu">
                <LongMenu></LongMenu>
            </div>
        </div>
         <div className="incomeList">
            <div className="inListContent">
                <div className="lisConPic">
                    <img width={20} height={22} src="https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/paypal-primary.png" alt="" />
                </div>
                <div className="lisCOnRight">
                    <div className="lisConData">
                        <div className="lisdatatop">Income</div>
                        <div className="lisdatadown">$42,845</div>
                    </div>
                    <div className="lisConIcon">
                        <p className='lisConP'>+2.7k</p>
                    </div>
                </div>
            </div>
            <div className="inListContent">
            <div className="lisConPic">
                    <img width={20} height={22} src="https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/shopping-bag.png" alt="" />
                </div>
                <div className="lisCOnRight">
                    <div className="lisConData">
                        <div className="lisdatatop">Expense</div>
                        <div className="lisdatadown">$38,658</div>
                    </div>
                    <div className="lisConIcon">
                        <p className='lisConPtwo'>-1.15k</p>
                    </div>
                </div>
            </div>
            <div className="inListContent">
            <div className="lisConPic">
                    <img width={20} height={22} src="https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/wallet-info.png" alt="" />
                </div>
                <div className="lisCOnRight">
                    <div className="lisConData">
                        <div className="lisdatatop">Profit</div>
                        <div className="lisdatadown">$18,220</div>
                    </div>
                    <div className="lisConIcon">
                        <p className='lisConP'>+1.34k</p>
                    </div>
                </div>
            </div>
         </div>


        </div>
        
    </div>
  )
}
