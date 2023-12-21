import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


export default function IconAvater() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar sx={{ bgcolor: 'rgba(255, 171, 0, 0.16)' , color:'rgb(255, 171, 0)' ,width:'100px', height:'40px', fontSize:'0.8125rem',borderRadius:'6px'}} variant="square">
        YEAR 2023
      </Avatar>
      
    </Stack>
  );
}