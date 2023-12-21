import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


export default function VariantAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar sx={{ bgcolor: 'rgba(105, 108, 255, 0.16)' , color:'rgb(105, 108, 255)' }} variant="square">
        $
      </Avatar>
      
    </Stack>
  );
}