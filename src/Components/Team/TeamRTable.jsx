import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import LongMenu from '../Chat/LongMenu';
function createData(NO, BROWSER, VISITS, DATAINPERCENTAGE,IMAGE_URL,COLOR,SHOW,PAY) {
    return { NO, BROWSER, VISITS, DATAINPERCENTAGE,IMAGE_URL,COLOR,SHOW,PAY };
  }


const rows = [
//   createData('Henry Barnes', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),

  createData('Henry Barnes', 'jok@puc.co.uk', '$459.65', 'PAID', 'https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/avatars/7.png', 'rgb(113, 221, 55)','rgba(113, 221, 55, 0.16)','https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/mastercard-light.png'),
  createData('Herman Holland', 'sami@lelo.com', '$93.81', 'PENDING', 'https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/avatars/20.png', 'rgb(255, 171, 0)','rgba(255, 171, 0, 0.16)','https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/visa-light.png'),
  createData('Hallie Warner', 'initus@odemi.com', '$934.34', 'PENDING', 'https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/avatars/9.png','rgb(255, 171, 0)','rgba(255, 171, 0, 0.16)','https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/visa-light.png'),
  createData('John Davidson', 'tum@upkesja.gov', '$794.97', 'PAID', 'https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/avatars/14.png', 'rgb(113, 221, 55)','rgba(113, 221, 55, 0.16)','https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/paypal-light.png'),
  createData('Cora Schmidt', 'wipare@tin.com', '$19.49', 'PAID', 'https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/avatars/6.png' ,'rgb(113, 221, 55)','rgba(113, 221, 55, 0.16)','https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/mastercard-light.png'),
  createData('Betty Ross', 'nur@kaomor.edu', '$636.27', 'FAILED', 'https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/avatars/8.png' ,'rgb(255, 62, 29)','rgba(255, 62, 29, 0.16)','https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/paypal-light.png')
];

export default function TeamRTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 , height:'430px'}} aria-label="simple table">
        <TableHead>
        <TableRow >
            <TableCell sx={{color:'rgba(50, 71, 92, 0.6)',fontSize:"0.875rem",fontWeight:"500",lineHeight:'1.43'}}>CUSTOMER</TableCell>
            <TableCell sx={{color:'rgba(50, 71, 92, 0.6)',fontSize:"0.875rem",fontWeight:"500",lineHeight:'1.43'}} align="left">AMOUNT</TableCell>
            <TableCell sx={{color:'rgba(50, 71, 92, 0.6)',fontSize:"0.875rem",fontWeight:"500",lineHeight:'1.43'}} align="left">STATUS</TableCell>
            <TableCell sx={{color:'rgba(50, 71, 92, 0.6)',fontSize:"0.875rem",fontWeight:"500",lineHeight:'1.43'}} align="left">PAID BY</TableCell>
            <TableCell sx={{color:'rgba(50, 71, 92, 0.6)',fontSize:"0.875rem",fontWeight:"500",lineHeight:'1.43'}} align="left">ACTIONS</TableCell>
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
                        <div className="TeamNameAll">{row.NO}</div>
                        <div className="JobTitle">{row.BROWSER}</div>
                    </div>
                </div>
              </TableCell>
              <TableCell sx={{color:'rgba(50, 71, 92, 0.6)',fontSize:"1rem",fontWeight:"600",lineHeight:'1.5',marginLeft:"110px",padding:"10px"}} align="left">{row.VISITS}</TableCell>
              <TableCell sx={{color:'rgba(50, 71, 92, 0.6)',fontSize:"1rem",fontWeight:"600",lineHeight:'1.5',marginLeft:"110px",padding:"10px"}} align="left">
              <span style={{color:row.COLOR , backgroundColor:row.SHOW}} className='teamdatatextspan'>{row.DATAINPERCENTAGE}</span>
              </TableCell>
              <TableCell sx={{color:'rgba(50, 71, 92, 0.6)',fontSize:"1rem",fontWeight:"600",lineHeight:'1.5',marginLeft:"110px",padding:"10px"}} align="left">
              <div className="payPic">
                        <img  width={50} height={29} src={row.PAY} alt=""/>
                    </div>
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