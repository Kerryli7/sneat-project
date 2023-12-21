import React from 'react';
import {
  AreaChart, Area, Tooltip, ResponsiveContainer, XAxis,
} from 'recharts';

const data = [
  {
    name: 'Mo',
    uv: 2000,
    pv: 2400,
    amt: 1200,
  },
  {
    name: 'Tu',
    uv: 2400,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'We',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Th',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Fr',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Sa',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Su',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const VisitorLine = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={270}
        height={200}
        data={data}
        margin={{
          top: 10,
          left: 0,
          bottom: 0,
        }}
      >
       
        
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="rgb(113, 221, 55)" fill="rgba(113, 221, 55, 0.2)" strokeWidth={2} />
        <XAxis style={{border:'none'}}  dataKey="name" scale="point" axisLine={false}/>
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default VisitorLine;
