import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './Custom.css'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs  value={value} onChange={handleChange} aria-label="basic tabs example" sx={{height:"81px", color:'white',} } indicatorColor='none' textColor='rgb(255, 255, 255)'>
          <Tab label="INCOME" {...a11yProps(0)} sx={{marginLeft:'20px',marginTop:'20px',fontWeight:'600',borderRadius:'6px' ,backgroundColor: value === 0 ? 'rgb(105, 108, 255)' : 'rgb(255, 255, 255)', color: value === 0 ? 'white' : 'rgba(50, 71, 92, 0.6)',}}/>
          <Tab label="EXPENSES" {...a11yProps(1)} sx={{marginLeft:'20px',marginTop:'20px',fontWeight:'600',borderRadius:'6px',backgroundColor: value === 1 ? 'rgb(105, 108, 255)' : 'inherit', color: value === 1 ? '#fff' : 'rgba(50, 71, 92, 0.6)'}} />
          <Tab label="PROFIT" {...a11yProps(2)} sx={{marginLeft:'20px',marginTop:'20px',fontWeight:'600',borderRadius:'6px',backgroundColor: value === 2 ? 'rgb(105, 108, 255)' : 'inherit', color: value === 2 ? 'rgb(255, 255, 255)' : 'rgba(50, 71, 92, 0.6)'}}/>
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0} >
         <div className="clickBox">
          <div className="cbImg">
            <img width='100%' height='100%' src="https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/wallet-with-bg.png" alt="" />
          </div>
          <div className="cbtext">
            <div className="cbBox">
              <div className='cbTop'>Total Income</div>
              <div className="cbTopDown">
              <h5 className='cbdata'>$459.1k</h5>
              <div className="cbIcon">
              
              <KeyboardArrowUpIcon style={{color:'rgb(113, 221, 55)',fontSize:'16px', marginTop:'3px'}}></KeyboardArrowUpIcon>
              <p className='smBottomP'>28.14%</p>
            </div>
              </div>
            </div>
            
          </div>
         </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <div className="clickBox">
          <div className="cbImg">
            <img width='100%' height='100%' src="https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/paypal.png" alt="" />
          </div>
          <div className="cbtext">
            <div className="cbBox">
              <div className='cbTop'>Total Expenses</div>
              <div className="cbTopDown">
              <h5 className='cbdata'>$316.5k</h5>
              <div className="cbIcon">
              
              <KeyboardArrowUpIcon style={{color:'rgb(113, 221, 55)',fontSize:'16px', marginTop:'3px'}}></KeyboardArrowUpIcon>
              <p className='smBottomP'>27.8%</p>
            </div>
              </div>
            </div>
            
          </div>
         </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <div className="clickBox">
          <div className="cbImg">
            <img width='100%' height='100%' src="https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/chart.png" alt="" />
          </div>
          <div className="cbtext">
            <div className="cbBox">
              <div className='cbTop'>Total Profit</div>
              <div className="cbTopDown">
              <h5 className='cbdata'>$147.9k</h5>
              <div className="cbIcon">
              
              <KeyboardArrowUpIcon style={{color:'rgb(113, 221, 55)',fontSize:'16px', marginTop:'3px'}}></KeyboardArrowUpIcon>
              <p className='smBottomP'>35.1%</p>
            </div>
              </div>
            </div>
            
          </div>
         </div>
      </CustomTabPanel>
    </Box>
  );
}