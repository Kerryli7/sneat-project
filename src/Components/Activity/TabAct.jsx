import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './TabAct.css'
import BasicTable from '../Material UI/BasicTable';
import BasicTableTwo from '../Material UI/BasicTableTwo';
import BasicTableThree from '../Material UI/BasicTableThree';
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

export default function TabAct() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs  value={value} onChange={handleChange} aria-label="basic tabs example" sx={{height:"81px", color:'white',} } indicatorColor='none' textColor='rgb(255, 255, 255)'>
          <Tab label="Browser" {...a11yProps(0)} sx={{marginLeft:'20px',marginTop:'20px',fontWeight:'600',borderRadius:'6px' ,backgroundColor: value === 0 ? 'rgb(105, 108, 255)' : 'rgb(255, 255, 255)', color: value === 0 ? 'white' : 'rgba(50, 71, 92, 0.6)',}}/>
          <Tab label="Operating System" {...a11yProps(1)} sx={{marginLeft:'20px',marginTop:'20px',fontWeight:'600',borderRadius:'6px',backgroundColor: value === 1 ? 'rgb(105, 108, 255)' : 'inherit', color: value === 1 ? '#fff' : 'rgba(50, 71, 92, 0.6)'}} />
          <Tab label="Country" {...a11yProps(2)} sx={{marginLeft:'20px',marginTop:'20px',fontWeight:'600',borderRadius:'6px',backgroundColor: value === 2 ? 'rgb(105, 108, 255)' : 'inherit', color: value === 2 ? 'rgb(255, 255, 255)' : 'rgba(50, 71, 92, 0.6)'}}/>
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0} >
         <div className="tabBox">
            <BasicTable></BasicTable>
         </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <div className="tabBox">
            <BasicTableTwo></BasicTableTwo>
         </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <div className="tabBox">
            <BasicTableThree></BasicTableThree>
         </div>
      </CustomTabPanel>
    </Box>
  );
}