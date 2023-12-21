import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Jan',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Apr',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Jul',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Oct',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },

];

const IncomeChat = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={210}
        height={130}
        data={data}
        margin={{
          top: 20,
          right: 5,

        }}
      >
        <CartesianGrid strokeDasharray='1 1' />
        <XAxis  dataKey="name" axisLine={false}/>
        <Bar dataKey="pv" fill="rgb(113, 221, 55)" />
        <Bar dataKey="uv" fill="rgba(113, 221, 55, 0.2)" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default IncomeChat;
