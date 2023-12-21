import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function OutlinedButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" style={{color:'rgb(105, 108, 255)',borderColor:'rgb(105, 108, 255)',marginTop:'12px'}}>View Badges</Button>
    </Stack>
  );
}