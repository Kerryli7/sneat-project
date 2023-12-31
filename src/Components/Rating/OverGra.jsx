import React, { useState } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  {
    name: 'Jan',
    uv: 5000,
    pv: 7400,
    amt: 2400,
  },
  {
    name: 'Feb',
    uv: 3000,
    pv: 4398,
    amt: 2210,
  },
  {
    name: 'Mar',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Apr',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Jun',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Jul',
    uv: 5490,
    pv: 4300,
    amt: 2100,
  },
];

const OverGra = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="name" />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" stackId="a" fill="rgba(105, 108, 255, 0.85)" />
        <Bar dataKey="uv" stackId="a" fill="rgba(50, 71, 92, 0.6)" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default OverGra;
