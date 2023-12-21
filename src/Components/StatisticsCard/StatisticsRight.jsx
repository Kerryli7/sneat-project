import React from 'react'
import './StatisticsRight.css'
import LongMenu from '../Chat/LongMenu'

export default function StatisticsRight() {
  return (
    <div className='StatisticsRight'>
          <div className="rightTop">
            <div className="toptext">
            Transactions
            </div>
            <div className="logoMenu">
                <LongMenu></LongMenu>
            </div>
        </div>
        <div className="taList">
            <div className="listContent">
                <div className="listIcon">
                <div className="topPic">
                  <img className='smTopPic' src="https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/paypal.png" alt="" />
               </div>
                </div>
                <div className="ListRight">
                <div className="lrContent">
                        <div className="trlist">Paypal</div>
                        <div className="trdentify">Send money</div>
                </div>
                    <div className="trData">
                      <div className="trDatanum">+82.6</div>
                    <div className='trDtatText'>USD</div>
                    </div>
                </div>
            </div>
            <div className="listContent">
                <div className="listIcon">
                <div className="topPic">
                  <img className='smTopPic' src="https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/wallet.png" alt="" />
               </div>
                </div>
                <div className="ListRight">
                <div className="lrContent">
                        <div className="trlist">Wallet</div>
                        <div className="trdentify">Mac'D</div>
                </div>
                    <div className="trData">
                      <div className="trDatanum">+270.69</div>
                    <div className='trDtatText'>USD</div>
                    </div>
                </div>
            </div>
            <div className="listContent">
                <div className="listIcon">
                <div className="topPic">
                  <img className='smTopPic' src="https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/chart.png" alt="" />
               </div>
                </div>
                <div className="ListRight">
                <div className="lrContent">
                        <div className="trlist">Transfer</div>
                        <div className="trdentify">Refund</div>
                </div>
                    <div className="trData">
                      <div className="trDatanum">+637.91</div>
                    <div className='trDtatText'>USD</div>
                    </div>
                </div>
            </div>
            <div className="listContent">
                <div className="listIcon">
                <div className="topPic">
                  <img className='smTopPic' src="https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/credit-card.png" alt="" />
               </div>
                </div>
                <div className="ListRight">
                <div className="lrContent">
                        <div className="trlist">Credit Card</div>
                        <div className="trdentify">Ordered Food</div>
                </div>
                    <div className="trData">
                      <div className="trDatanum">-838.71</div>
                    <div className='trDtatText'>USD</div>
                    </div>
                </div>
            </div>
            <div className="listContent">
                <div className="listIcon">
                <div className="topPic">
                  <img className='smTopPic' src="https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/wallet.png" alt="" />
               </div>
                </div>
                <div className="ListRight">
                <div className="lrContent">
                        <div className="trlist">Wallet</div>
                        <div className="trdentify">Starbucks</div>
                </div>
                    <div className="trData">
                      <div className="trDatanum">+203.33</div>
                    <div className='trDtatText'>USD</div>
                    </div>
                </div>
            </div>
            <div className="listContent">
                <div className="listIcon">
                <div className="topPic">
                  <img className='smTopPic' src="https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/atm-card.png" alt="" />
               </div>
                </div>
                <div className="ListRight">
                <div className="lrContent">
                        <div className="trlist">Mastercard</div>
                        <div className="trdentify">Ordered Food</div>
                </div>
                    <div className="trData">
                      <div className="trDatanum">-92.45</div>
                    <div className='trDtatText'>USD</div>
                    </div>
                </div>
            </div>


        </div>
    </div>
  )
}
