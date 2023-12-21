import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TeamPie from './TeamPie';

function createData(NO, BROWSER, VISITS, DATAINPERCENTAGE,IMAGE_URL,COLOR,SHOW) {
  return { NO, BROWSER, VISITS, DATAINPERCENTAGE,IMAGE_URL,COLOR,SHOW };
}

const rows = [
    createData('Nathan Wagner', 'iOS Developer', '87/135', 'ZIPCAR', 'https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/avatars/17.png', 'rgb(105, 108, 255)','rgba(105, 108, 255, 0.16)'),
    createData('Emma Bowen', 'UI/UX Designer', '340/420', 'BITBANK', 'https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/avatars/8.png', 'rgb(255, 62, 29)','rgba(255, 62, 29, 0.16)'),
    createData('Adrian McGuire', 'React developer', '50/82', 'PAYERS', 'https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/avatars/12.png', 'rgb(255, 171, 0)','rgba(255, 171, 0, 0.16)'),
    createData('Alma Gonzalez', 'Product Manager', '98/260', 'BRANDI', 'https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/avatars/2.png', 'rgb(3, 195, 236)','rgba(3, 195, 236, 0.16)'),
    createData('Travis Collins', 'VueJs developer', '12/25', 'AVIATO', 'https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/avatars/11.png' ,'rgb(133, 146, 163)','rgba(133, 146, 163, 0.16)'),
];

export default function TeamTable() {


  return (
    <TableContainer component={Paper} sx={{boxShadow:'none' , width:"500px"}}>
      <Table aria-label="simple table" >
        <TableHead>
          <TableRow >
            <TableCell width={88} sx={{border:'none',color:'rgba(50, 71, 92, 0.6)',fontSize:"0.8rem",fontWeight:"600",lineHeight:'1.5'}}>NAME</TableCell>
            <TableCell sx={{border:'none',color:'rgba(50, 71, 92, 0.6)',fontSize:"0.8rem",fontWeight:"600",lineHeight:'1.5'}} align="right">PROJECT</TableCell>
            <TableCell sx={{border:'none',color:'rgba(50, 71, 92, 0.6)',fontSize:"0.8rem",fontWeight:"600",lineHeight:'1.5'}} align="right">TASKS</TableCell>
            <div className="rowfour">
            <TableCell sx={{border:'none',color:'rgba(50, 71, 92, 0.6)',fontSize:"0.8rem",fontWeight:"600",lineHeight:'1.5',marginLeft:'10px'}} align="left">PROGRESS</TableCell>
            </div>
          </TableRow>
        </TableHead>
        <TableBody >
          {rows.map((row) => (
            <TableRow
              key={row.NO}
              sx={{marginTop:'10px'}}
             
            >
              <TableCell  component="th" scope="row" sx={{border:'none',color:'rgba(50, 71, 92, 0.6)',letterSpacing:'0.25px',padding:"10px",marginTop:'0px'}}>
                <div className="TeamName">
                    <div className="namePic">
                        <img  width={38} height={38} src={row.IMAGE_URL} alt="" style={{borderRadius:'50%'}} />
                    </div>
                    <div className="NameDiscr">
                        <div className="TeamNameAll">{row.NO}</div>
                        <div className="JobTitle">{row.BROWSER}</div>
                    </div>
                </div>
              </TableCell>
              <TableCell sx={{border:'none',color:'rgba(50, 71, 92, 0.6)',fontSize:"1rem",fontWeight:"400",lineHeight:'1.5',display:'flex',padding:"10px",marginTop:'-10px'}} align="left">
                <div className="nameProject">
                    <span className='nameSpan' style={{color:row.COLOR , backgroundColor:row.SHOW}} >{row.DATAINPERCENTAGE}</span>
                </div>
                </TableCell>
              <TableCell sx={{border:'none' ,color:'rgba(50, 71, 92, 0.6)',fontSize:"0.875rem",fontWeight:"500",lineHeight:'1.43',marginLeft:"110px",padding:"10px" , position:'absolute'}} align="left">{row.VISITS}</TableCell>
              <TableCell sx={{border:'none',color:'rgba(50, 71, 92, 0.6)',fontSize:"0.875rem",fontWeight:"500",lineHeight:'1.43',display:'flex',padding:"10px"}} align="left">
              
              <div className="tableDatateam">
                <TeamPie color={row.COLOR}></TeamPie>
              </div>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}