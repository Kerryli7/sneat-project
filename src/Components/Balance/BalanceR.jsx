import React from 'react'
import './BalanceR.css'
import LongMenu from '../Chat/LongMenu'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import BalanceLine from './BalanceLine';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export default function BalanceR() {
  return (
    <div className='BalanceR'>
             <div className="baleftTop">
            <div className="lefttopcontenttext">
            <div className="saletoptext">Performance</div>
            </div>
            <div className="logoMenu">
                <LongMenu></LongMenu>
            </div>
        </div>
        <div className="baiconbox">
        <div className="baicon">
        <div className="listIcon">
                <Stack className='iconBox' direction="row" spacing={2}>
                   <Avatar sx={{ bgcolor: 'rgba(255, 171, 0, 0.16)' , color:'rgb(255, 171, 0)', width:'45px', height:'45px' ,borderRadius:'5px'} } variant="square">
                            $
                   </Avatar>
                </Stack>
        </div>
        <div className="balistxt">
            <h6 className='balisH'>$2.54k</h6>
            <p className='balisP'>Wallet</p>
        </div>
        </div>
        <div className="baiconss">
        <div className="listIcon">
                <Stack className='iconBox' direction="row" spacing={2}>
                   <Avatar sx={{ bgcolor: 'rgba(133, 146, 163, 0.16)' , color:'rgb(133, 146, 163)', width:'45px', height:'45px' ,borderRadius:'5px'} } variant="square">
                            <CreditCardIcon></CreditCardIcon>
                   </Avatar>
                </Stack>
        </div>
        <div className="balistxt">
            <h6 className='balisH'>$2.54k</h6>
            <p className='balisP'>Wallet</p>
        </div>
        </div>
        </div>
        <div className="balanceGra">
            <BalanceLine></BalanceLine>
        </div>
        <div className="balanceTxtDown">
            <div className="balanceTxtDownL">
                <p className='balancetxtTop'>You have done 57.6% more sales.</p>
                <p className='balancetxtTop'>Check your new badge in your profile.</p>
            </div>
            <div className="balanceTxtDownR">
            <Stack className='iconBox' direction="row" spacing={2}>
                   <Avatar sx={{ bgcolor: 'rgba(255, 171, 0, 0.16)' , color:'rgb(255, 171, 0)', width:'40px', height:'40px' ,borderRadius:'5px'} } variant="square">
                            <ArrowForwardIosIcon></ArrowForwardIosIcon>
                   </Avatar>
                </Stack>
            </div>
        </div>
       

        

        
    </div>
  )
}
