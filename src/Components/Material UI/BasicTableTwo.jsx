import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CustomizedProgressBars from './CustomizedProgressBars';


function createData(NO, BROWSER, VISITS, DATAINPERCENTAGE,IMAGE_URL,COLOR,SHOW) {
  return { NO, BROWSER, VISITS, DATAINPERCENTAGE,IMAGE_URL,COLOR,SHOW };
}

const rows = [
    createData(1, 'Windows', '475.26k', '61.5%', 'https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/windows.png', 'rgb(113, 221, 55)','83%'),
    createData(2, 'Mac', '89.12k', '15.67%', 'https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/mac.png', 'rgb(105, 108, 255)','35%'),
    createData(3, 'Ubuntu', '38.68k', '5.82%', 'https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/ubuntu.png', 'rgb(3, 195, 236)','28%'),
    createData(4, 'Linux', '30.27k', '5.03%', 'https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/linux.png', 'rgb(255, 171, 0)','25%'),
    createData(5, 'Chrome', '8.34k', '3.25%', 'https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/chrome.png', 'rgb(255, 62, 29)','22%'),
    createData(6, 'Cent', '2.25k', '1.76%', 'https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/cent.png', 'rgb(3, 195, 236)','21%'),
];

export default function BasicTableTwo() {


  return (
    <TableContainer component={Paper} sx={{boxShadow:'none'}}>
      <Table aria-label="simple table" >
        <TableHead >
          <TableRow >
            <TableCell sx={{border:'none',color:'rgba(50, 71, 92, 0.6)',fontSize:"0.875rem",fontWeight:"500",lineHeight:'1.43'}}>NO.</TableCell>
            <TableCell sx={{border:'none',color:'rgba(50, 71, 92, 0.6)',fontSize:"0.875rem",fontWeight:"500",lineHeight:'1.43'}} align="left">BROWSER</TableCell>
            <TableCell sx={{border:'none',color:'rgba(50, 71, 92, 0.6)',fontSize:"0.875rem",fontWeight:"500",lineHeight:'1.43'}} align="left">VISITS</TableCell>
            <TableCell sx={{border:'none',color:'rgba(50, 71, 92, 0.6)',fontSize:"0.875rem",fontWeight:"500",lineHeight:'1.43'}} align="left">DATA IN PERCENTAGE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {rows.map((row) => (
            <TableRow
              key={row.NO}
             
            >
              <TableCell component="th" scope="row" sx={{border:'none',color:'rgba(50, 71, 92, 0.6)',letterSpacing:'0.25px'}}>
                {row.NO}
              </TableCell>
              <TableCell sx={{border:'none',color:'rgba(50, 71, 92, 0.6)',fontSize:"1rem",fontWeight:"400",lineHeight:'1.5',display:'flex'}} align="left">
                <div className="tabCellimg">
                    <img width={24} height={24} src={row.IMAGE_URL} alt="" />
                </div>
                {row.BROWSER}
                </TableCell>
              <TableCell sx={{border:'none' ,color:'rgba(50, 71, 92, 0.6)',fontSize:"1rem",fontWeight:"600",lineHeight:'1.5'}} align="left">{row.VISITS}</TableCell>
              <TableCell sx={{border:'none',color:'rgba(50, 71, 92, 0.6)',fontSize:"0.875rem",fontWeight:"500",lineHeight:'1.43',display:'flex',width:'280px'}} align="left">
              <CustomizedProgressBars color={row.COLOR} value={parseFloat(row.SHOW)} />
              <div className="tableData">
              {row.DATAINPERCENTAGE}
              </div>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

