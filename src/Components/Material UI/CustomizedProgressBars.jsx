import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme, }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? 'rgb(235, 238, 240)' : 'rgb(235, 238, 240)',
  },
}));


export default function CustomizedProgressBars(props) {
    const { value,color,show } = props;

  return (
    <Box sx={{ flexGrow: 1 , marginTop:'5px'}}>
      <BorderLinearProgress variant="determinate" value={value} sx={{
          '& .MuiLinearProgress-bar': {
            backgroundColor: color,
            width: `${show}%`, // 根据传递的 show 控制进度百分比
          },
        }}/>
    </Box>
  );
}