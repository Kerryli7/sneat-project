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
    createData(1, 'USA', '87.24k', '38.12%', 'https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/usa.png', 'rgb(113, 221, 55)','55%'),
    createData(2, 'Brazil', '42.69k', '28.23%', 'https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/brazil.png', 'rgb(105, 108, 255)','48%'),
    createData(3, 'India', '12.58k', '13.82%', 'https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/india.png', 'rgb(3, 195, 236)','33%'),
    createData(4, 'Australia', '4.13k', '12.72%', 'https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/australia.png', 'rgb(255, 171, 0)','30%'),
    createData(5, 'China', '2.21k', '7.11%', 'https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/china.png', 'rgb(255, 62, 29)','27%'),
    createData(6, 'France', '1.56k', '6.59%', 'https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/france.png', 'rgb(3, 195, 236)','25%'),
];

export default function BasicTableThree() {


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