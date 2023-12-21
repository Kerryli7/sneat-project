import React from 'react'
import './earning.css'
import LongMenu from '../Chat/LongMenu'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import MovingIcon from '@mui/icons-material/Moving';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import RevenueData from '../RevenueCard/RevenueData';
export default function Earning() {
  return (
    <div className='earning'>
        <div className="leftTop">
            <div className="lefttopcontenttext">
            <div className="saletoptext">Earning Report</div>
            <div className="saledowntext">Weekly Earnings Overview</div>
            </div>
            <div className="logoMenu">
                <LongMenu></LongMenu>
            </div>
        </div>
        <div className="earnList">
            <div className="listContent">
                <div className="listIcon">
                <Stack className='iconBox' direction="row" spacing={2}>
                   <Avatar sx={{ bgcolor: 'rgba(105, 108, 255, 0.16)' , color:'rgb(105, 108, 255)', width:'45px', height:'45px' ,borderRadius:'5px'} } variant="square">
                            <MovingIcon></MovingIcon>
                   </Avatar>
                </Stack>
               
                </div>
                <div className="earnListRight">
                <div className="lrContent">
                        <div className="earnlist">Net Profit</div>
                        <div className="saledentify">12.4k Sales</div>
                </div>
                    <div className="trData">
                             <div className="eatrRight">
                                <div className="trrightmoney">$1,619</div>
                                <div className="trreBottom">
                                     <KeyboardArrowUpIcon style={{color:'rgb(113, 221, 55)',fontSize:'16px', marginTop:'3px'}}></KeyboardArrowUpIcon>
                                    <p className='trsmBottomP'>28.14%</p>
                                </div>
                             </div>
                    </div>
                </div>
              </div>

            <div className="listContent">
                <div className="listIcon">
                <Stack className='iconBox' direction="row" spacing={2}>
                   <Avatar sx={{ bgcolor: 'rgba(113, 221, 55, 0.16)' , color:'rgb(113, 221, 55)', width:'45px', height:'45px' ,borderRadius:'5px'} } variant="square">
                            $
                   </Avatar>
                </Stack>
               
                </div>
                <div className="earnListRight">
                <div className="lrContent">
                        <div className="earnlist">Net Profit</div>
                        <div className="saledentify">12.4k Sales</div>
                </div>
                    <div className="trData">
                             <div className="eatrRight">
                                <div className="trrightmoney">$1,619</div>
                                <div className="trreBottom">
                                     <KeyboardArrowUpIcon style={{color:'rgb(113, 221, 55)',fontSize:'16px', marginTop:'3px'}}></KeyboardArrowUpIcon>
                                    <p className='trsmBottomP'>28.14%</p>
                                </div>
                             </div>
                    </div>
                </div>
            </div>
            <div className="listContent">
                <div className="listIcon">
                <Stack className='iconBox' direction="row" spacing={2}>
                   <Avatar sx={{ bgcolor: 'rgba(133, 146, 163, 0.16)' , color:'rgb(133, 146, 163)', width:'45px', height:'45px' ,borderRadius:'5px'} } variant="square">
                            <CreditCardIcon></CreditCardIcon>
                   </Avatar>
                </Stack>
               
                </div>
                <div className="earnListRight">
                <div className="lrContent">
                        <div className="earnlist">Net Profit</div>
                        <div className="saledentify">12.4k Sales</div>
                </div>
                    <div className="trData">
                             <div className="eatrRight">
                                <div className="trrightmoney">$1,619</div>
                                <div className="trreBottom">
                                     <KeyboardArrowUpIcon style={{color:'rgb(113, 221, 55)',fontSize:'16px', marginTop:'3px'}}></KeyboardArrowUpIcon>
                                    <p className='trsmBottomP'>28.14%</p>
                                </div>
                             </div>
                    </div>
                </div>
            </div>

            </div>
            <div className="earnListGra">
                <RevenueData></RevenueData>
            </div>
    </div>
  )
}
