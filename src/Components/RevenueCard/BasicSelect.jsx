import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 110 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">2023</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="2023"
          className='selectbass'
          onChange={handleChange}
        >
          <MenuItem value={10}>2023</MenuItem>
          <MenuItem value={20}>2022</MenuItem>
          <MenuItem value={30}>2021</MenuItem>
        </Select>
      </FormControl >
    </Box>
  );
}