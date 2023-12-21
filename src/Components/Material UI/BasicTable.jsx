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
    createData(1, 'Chrome', '8.92k', '64.91%', 'https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/chrome.png', 'rgb(113, 221, 55)','80%'),
    createData(2, 'Safari', '1.29k', '19.03%', 'https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/safari.png', 'rgb(105, 108, 255)','39%'),
    createData(3, 'Firefox', 328, '3.26%', 'https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/firefox.png', 'rgb(3, 195, 236)','30%'),
    createData(4, 'Edge', 142, '3.99%', 'https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/edge.png', 'rgb(255, 171, 0)','21%'),
    createData(5, 'Opera', 85, '2.12%', 'https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/opera.png', 'rgb(255, 62, 29)','25%'),
    createData(6, 'Brave', 36, '1.06%', 'https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/brave.png', 'rgb(3, 195, 236)','23%'),
];

export default function BasicTable() {


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