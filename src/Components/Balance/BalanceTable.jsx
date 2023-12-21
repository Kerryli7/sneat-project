import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import LongMenu from '../Chat/LongMenu';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import TvIcon from '@mui/icons-material/Tv';
import MouseIcon from '@mui/icons-material/Mouse';
function createData(NO, BROWSER, VISITS, DATAINPERCENTAGE,IMAGE_URL,COLOR,SHOW,PAY,ICON,BG,ICOLOR,STATUS,PRICE,FULL) {
    return { NO, BROWSER, VISITS, DATAINPERCENTAGE,IMAGE_URL,COLOR,SHOW,PAY,ICON,BG,ICOLOR,STATUS,PRICE,FULL };
  }


const rows = [
  createData('OnePlus 7Pro', 'OnePlus', 'Smart Phone', 'CONFIRMED','https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/oneplus-7pro-light.png' , 'rgb(105, 108, 255)','rgba(105, 108, 255, 0.16)','https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/mastercard-light.png',<PhoneIphoneIcon></PhoneIphoneIcon>,'rgba(105, 108, 255, 0.16)','rgb(105, 108, 255)','Partially Paid','$120','/$499'),
  createData('Magic Mouse', 'Apple', 'Mouse', 'COMPLETED', 'https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/apple-magic-mouse-light.png', 'rgb(113, 221, 55)','rgba(113, 221, 55, 0.16)','https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/visa-light.png',<MouseIcon></MouseIcon>,'rgba(255, 171, 0, 0.16)','rgb(255, 171, 0)','Fully Paid','$120'),
  createData('iMac Pro', 'Apple', 'Computer', 'CANCELLED', 'https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/apple-iMac-pro-light.png','rgb(255, 62, 29)','rgba(255, 62, 29, 0.16)','https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/visa-light.png',<DisplaySettingsIcon></DisplaySettingsIcon>,'rgba(3, 195, 236, 0.16)','rgb(3, 195, 236)','Unpaid','','$0/$899'),
  createData('Note 10', 'Samsung', 'Smart Phone', 'COMPLETED', 'https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/samsung-note-10-light.png', 'rgb(113, 221, 55)','rgba(113, 221, 55, 0.16)','https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/paypal-light.png',<PhoneIphoneIcon></PhoneIphoneIcon>,'rgba(105, 108, 255, 0.16)','rgb(105, 108, 255)','Fully Paid','$169'),
  createData('iPhone 11 Pro', 'Apple', 'Smart Phone', 'COMPLETED', 'https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/apple-iPhone-11-pro-light.png' ,'rgb(113, 221, 55)','rgba(113, 221, 55, 0.16)','https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/mastercard-light.png',<PhoneIphoneIcon></PhoneIphoneIcon>,'rgba(105, 108, 255, 0.16)','rgb(105, 108, 255)','Fully Paid','$399'),
  createData('Mi Led TV 4X', 'Xiaomi', 'Smart TV', 'CONFIRMED', 'https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/mi-led-tv-4x-light.png' ,'rgb(105, 108, 255)','rgba(105, 108, 255, 0.16)','https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/paypal-light.png',<TvIcon></TvIcon>,'rgba(255, 62, 29, 0.16)','rgb(255, 62, 29)','Partially Paid','$349','/$2599'),
  createData('Logitech MX', 'Logitech', 'Mouse', 'COMPLETED', 'https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/logitech-mx-light.png' ,'rgb(113, 221, 55)','rgba(113, 221, 55, 0.16)','https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/paypal-light.png',<MouseIcon></MouseIcon>,'rgba(255, 171, 0, 0.16)','rgb(255, 171, 0)','Fully Paid','$89')
];

export default function BalanceTable() {
  return (
    <TableContainer component={Paper} sx={{boxShadow:'none'}}>
      <Table sx={{ minWidth: 650 , height:'450px'}} aria-label="simple table" >
        <TableHead>
        <TableRow >
            <TableCell sx={{color:'rgba(50, 71, 92, 0.87)',fontSize:"0.75rem",fontWeight:"600",lineHeight:'1.1'}}>PRODUCT</TableCell>
            <TableCell sx={{color:'rgba(50, 71, 92, 0.87)',fontSize:"0.75rem",fontWeight:"600",lineHeight:'1.1'}} align="left">CATEGORY</TableCell>
            <TableCell sx={{color:'rgba(50, 71, 92, 0.87)',fontSize:"0.75rem",fontWeight:"600",lineHeight:'1.1'}} align="left">PAYMENT</TableCell>
            <TableCell sx={{color:'rgba(50, 71, 92, 0.87)',fontSize:"0.75rem",fontWeight:"600",lineHeight:'1.1'}} align="left">ORDER STATUS</TableCell>
            <TableCell sx={{color:'rgba(50, 71, 92, 0.87)',fontSize:"0.75rem",fontWeight:"600",lineHeight:'1.1'}} align="left">ACTIONS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.NO}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
            <TableCell  component="th" scope="row" sx={{color:'rgba(50, 71, 92, 0.6)',letterSpacing:'0.25px',padding:"10px",marginTop:'0px'}}>
                <div className="TeamNameRight">
                    <div className="namePic">
                        <img  width={38} height={38} src={row.IMAGE_URL} alt="" style={{borderRadius:'50%'}} />
                    </div>
                    <div className="NameDiscr">
                        <div className="TeamBrand">{row.NO}</div>
                        <div className="BrandModel">{row.BROWSER}</div>
                    </div>
                </div>
              </TableCell>

              <TableCell sx={{color:'rgba(50, 71, 92, 0.6)',fontSize:"1rem",fontWeight:"600",lineHeight:'1.5',marginLeft:"110px",padding:"10px"}} align="left">
                <div className="balanceVisit">
                    <div className="balenceIcon">
                    <Stack className='iconBox' direction="row" spacing={2}>
                   <Avatar sx={{fontSize:'16px', bgcolor:row.BG , color:row.ICOLOR, width:'30px', height:'30px' ,borderRadius:'50%'} } variant="square">
                                {row.ICON}
                   </Avatar>
                </Stack>
                    </div>
                    <div className="iconName">
                        {row.VISITS}
                    </div>
                </div>
              </TableCell>
              
              <TableCell sx={{color:'rgba(50, 71, 92, 0.6)',fontSize:"1rem",fontWeight:"600",lineHeight:'1.5',marginLeft:"110px",padding:"10px"}} align="left">
                    <div className="payment">
                        <div className="paymentTop">
                            <p className='pyTopL'>{row.PRICE}</p>
                            <p className='pyTopR'>{row.FULL}</p>
                        </div>
                        <div className="paymentDown">
                            <p className='paymentStatus'>
                                {row.STATUS}
                            </p>
                        </div>
                    </div>
              </TableCell>
              <TableCell sx={{color:'rgba(50, 71, 92, 0.6)',fontSize:"1rem",fontWeight:"600",lineHeight:'1.5',marginLeft:"110px",padding:"10px"}} align="left">
              <span style={{color:row.COLOR , backgroundColor:row.SHOW}} className='balanceTablespan'>{row.DATAINPERCENTAGE}</span>
              </TableCell>

              <TableCell sx={{color:'rgba(50, 71, 92, 0.6)',fontSize:"1rem",fontWeight:"600",lineHeight:'1.5',marginLeft:"110px",padding:"10px"}} align="left">
              <div className="teamlogoMenu">
                <LongMenu></LongMenu>
            </div>

              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}