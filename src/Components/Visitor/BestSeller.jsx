
import './BestSeller.css'
import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
export default function BestSeller() {
  return (
    <div className='BestSeller'>
        <div className="bestsellertxt">
            <div className="bestselltitle">Congratulations Katie!</div>
            <div className="bestsellcontent">Best seller of the month</div>
            <h5 className='bestsellH'>$48.9k</h5>
            <div className="bestsellper">78% of target</div>
            <div className="bestsellicon">
            <Stack direction="row" spacing={2}>
              <Button variant="contained" sx={{color:"rgb(255, 255, 255)",backgroundColor:'rgb(105, 108, 255)'}}>View Sales</Button>
            </Stack>
            </div>
        </div>
        <div className="bestsellerimg">
            <img className='sellimg' width={100} height={159} src="https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/misc/trophy.png" alt="" />
        </div>
    </div>
  )
}
