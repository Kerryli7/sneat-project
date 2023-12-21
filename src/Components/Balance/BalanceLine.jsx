import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 3398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 2600,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 5908,
    amt: 2000,
  },
  {
    name: 'Page F',
    uv: 2780,
    pv:4908,
    amt: 2000,
  },
  {
    name: 'Page F',
    uv: 2780,
    pv:6908,
    amt: 2000,
  },

];

const BalanceLine = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={410} height={220} data={data}>
        <Line type="monotone" dataKey="pv" stroke="rgb(255, 171, 0)" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default BalanceLine;
