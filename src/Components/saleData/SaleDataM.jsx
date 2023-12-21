import React from 'react'
import './SaleDataM.css'
import LongMenu from '../Chat/LongMenu'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
export default function SaleDataM() {
  return (
    <div className='SaleDataM'>
        <div className="leftTop">
            <div className="lefttopcontenttext">
            <div className="saletoptext">Sales by Countries</div>
            <div className="saledowntext">Monthly Sales Overview</div>
            </div>
            <div className="logoMenu">
                <LongMenu></LongMenu>
            </div>
        </div>
        <div className="saledataList">
            <div className="listContent">
                <div className="salistIcon">
                <div className="topPic">
                  <img className='salesmTopPic' src="https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/usa.png" alt="" />
               </div>
                </div>
                <div className="ListRight">
                <div className="lrContent">
                    <div className="listrightcontent">
                    <div className="listrightTop">$8,656k</div>
                    <div className="contenttexicon">
                             <KeyboardArrowUpIcon style={{color:'rgb(113, 221, 55)',fontSize:'16px', marginTop:'3px'}}></KeyboardArrowUpIcon>
                             <span className='texticonspan'>25.8%</span>
                         </div>
                    </div>
                        <div className="salelistdown">United states of america</div>
                </div>
                    <div className="satrData">
                    <div className='saleDtatTextright'>894K</div>
                    </div>
                </div>
            </div>

            <div className="listContent">
                <div className="salistIcon">
                <div className="topPic">
                  <img className='salesmTopPic' src="https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/brazil.png" alt="" />
               </div>
                </div>
                <div className="ListRight">
                <div className="lrContent">
                    <div className="listrightcontent">
                    <div className="listrightTop">$2,415k</div>
                    <div className="contenttexicon">
                             <KeyboardArrowDownIcon style={{color:'rgb(255, 62, 29)',fontSize:'16px', marginTop:'3px'}}></KeyboardArrowDownIcon>
                             <span className='texticonspanup'>-6.2%</span>
                         </div>
                    </div>
                        <div className="salelistdown">Brazil</div>
                </div>
                    <div className="satrData">
                    <div className='saleDtatTextright'>645k</div>
                    </div>
                </div>
            </div>

            <div className="listContent">
                <div className="salistIcon">
                <div className="topPic">
                  <img className='salesmTopPic' src="https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/india.png" alt="" />
               </div>
                </div>
                <div className="ListRight">
                <div className="lrContent">
                    <div className="listrightcontent">
                    <div className="listrightTop">$865k</div>
                    <div className="contenttexicon">
                             <KeyboardArrowUpIcon style={{color:'rgb(113, 221, 55)',fontSize:'16px', marginTop:'3px'}}></KeyboardArrowUpIcon>
                             <span className='texticonspan'>12.4%</span>
                         </div>
                    </div>
                        <div className="salelistdown">India</div>
                </div>
                    <div className="satrData">
                    <div className='saleDtatTextright'>148k</div>
                    </div>
                </div>
            </div>

            <div className="listContent">
                <div className="salistIcon">
                <div className="topPic">
                  <img className='salesmTopPic' src="https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/australia.png" alt="" />
               </div>
                </div>
                <div className="ListRight">
                <div className="lrContent">
                    <div className="listrightcontent">
                    <div className="listrightTop">$745k</div>
                    <div className="contenttexicon">
                             <KeyboardArrowDownIcon style={{color:'rgb(255, 62, 29)',fontSize:'16px', marginTop:'3px'}}></KeyboardArrowDownIcon>
                             <span className='texticonspanup'>-11.9%</span>
                         </div>
                    </div>
                        <div className="salelistdown">Australia</div>
                </div>
                    <div className="satrData">
                    <div className='saleDtatTextright'>86k</div>
                    </div>
                </div>
            </div>

            <div className="listContent">
                <div className="salistIcon">
                <div className="topPic">
                  <img className='salesmTopPic' src="https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/belgium.png" alt="" />
               </div>
                </div>
                <div className="ListRight">
                <div className="lrContent">
                    <div className="listrightcontent">
                    <div className="listrightTop">$45k</div>
                    <div className="contenttexicon">
                             <KeyboardArrowUpIcon style={{color:'rgb(113, 221, 55)',fontSize:'16px', marginTop:'3px'}}></KeyboardArrowUpIcon>
                             <span className='texticonspan'>16.2%</span>
                         </div>
                    </div>
                        <div className="salelistdown">Belgium</div>
                </div>
                    <div className="satrData">
                    <div className='saleDtatTextright'>42k</div>
                    </div>
                </div>
            </div>

            <div className="listContent">
                <div className="salistIcon">
                <div className="topPic">
                  <img className='salesmTopPic' src="https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/china.png" alt="" />
               </div>
                </div>
                <div className="ListRight">
                <div className="lrContent">
                    <div className="listrightcontent">
                    <div className="listrightTop">$12k</div>
                    <div className="contenttexicon">
                             <KeyboardArrowUpIcon style={{color:'rgb(113, 221, 55)',fontSize:'16px', marginTop:'3px'}}></KeyboardArrowUpIcon>
                             <span className='texticonspan'>$12k</span>
                         </div>
                    </div>
                        <div className="salelistdown">China</div>
                </div>
                    <div className="satrData">
                    <div className='saleDtatTextright'>8k</div>
                    </div>
                </div>
            </div>
            
            
            


        </div>
    </div>
  )
}
