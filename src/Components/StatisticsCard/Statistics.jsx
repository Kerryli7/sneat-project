import React from 'react'
import './Statistics.css'
import LongMenu from '../Chat/LongMenu'
import LeftPi from './LeftPie'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import PhoneAndroidSharpIcon from '@mui/icons-material/PhoneAndroidSharp';
import CheckroomSharpIcon from '@mui/icons-material/CheckroomSharp';
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import SportsSoccerOutlinedIcon from '@mui/icons-material/SportsSoccerOutlined';
export default function StatisticsLeft() {
  return (
    <div className='StatisticsLeft'>
        <div className="leftTopsta">
            <div className="leftContent">
            <h5 className='satext'>Order Statistics</h5>
            <br></br>
            <div className='sacontentText'>42.82k Total Sales</div>
            </div>
            <div className="StlogoMenu">
                <LongMenu></LongMenu>
            </div>
        </div>
        <div className="saData">
            <div className="saDataL">
            <h5 className='textL'>8,258</h5>
            <div className='contentText'>Total Orders</div>
            </div>
            <div className="saDataR">
                <LeftPi></LeftPi>
            </div>
        </div>
        <div className="piList">
            <div className="listContent">
                <div className="listIcon">
                <Stack className='iconBox' direction="row" spacing={2}>
                   <Avatar sx={{ bgcolor: 'rgba(105, 108, 255, 0.16)' , color:'rgb(105, 108, 255)', width:'45px', height:'45px' ,borderRadius:'5px'} } variant="square">
                            <PhoneAndroidSharpIcon></PhoneAndroidSharpIcon>
                   </Avatar>
                </Stack>
                </div>
                <div className="ListRight">
                <div className="lrContent">
                <div className="topCon">Electronic</div>
                        <div className="BotCon">Mobile, Earbuds, TV</div>
                </div>
                    <div className="lrDta">
                    <div className='lrDtatText'>82.5K</div>
                    </div>
                </div>
            </div>
            <div className="listContent">
                <div className="listIcon">
                <Stack direction="row" spacing={2}>
                <Avatar sx={{ bgcolor: ' rgba(113, 221, 55, 0.16)' , color:'rgb(113, 221, 55)', width:'45px', height:'45px' ,borderRadius:'5px'} } variant="square">
                            <CheckroomSharpIcon></CheckroomSharpIcon>
                   </Avatar>
                </Stack>
                </div>
                <div className="ListRight">
                <div className="lrContent">
                <div className="topCon">Fashion</div>
                        <div className="BotCon">Tshirt, Jeans, Shoes</div>
                </div>
                    <div className="lrDta">
                    <div className='lrDtatText'>23.8K</div>
                    </div>
                </div>
            </div>
            <div className="listContent">
                <div className="listIcon">
                <Stack direction="row" spacing={2}>
                <Avatar sx={{ bgcolor: 'rgba(3, 195, 236, 0.16)' , color:'rgb(3, 195, 236)', width:'45px', height:'45px' ,borderRadius:'5px'} } variant="square">
                           <HouseOutlinedIcon></HouseOutlinedIcon>
                   </Avatar>
                </Stack>
                </div>
                <div className="ListRight">
                <div className="lrContent">
                <div className="topCon">Decor</div>
                        <div className="BotCon">Fine Art, Dining</div>
                </div>
                    <div className="lrDta">
                    <div className='lrDtatText'>849</div>
                    </div>
                </div>
            </div>
            <div className="listContent">
                <div className="listIcon">
                <Stack direction="row" spacing={2}>
                <Avatar sx={{ bgcolor: 'rgba(133, 146, 163, 0.16))' , color:'rgb(133, 146, 163)', width:'45px', height:'45px' ,borderRadius:'5px'} } variant="square">
                            <SportsSoccerOutlinedIcon></SportsSoccerOutlinedIcon>
                   </Avatar>
                </Stack>
                </div>
                <div className="ListRight">
                    <div className="lrContent">
                        <div className="topCon">Sports</div>
                        <div className="BotCon">Football, Cricket Kit</div>
                    </div>

                    <div className="lrDta">
                    <div className='lrDtatText'>99</div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}
