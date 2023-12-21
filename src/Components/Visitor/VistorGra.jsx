import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,

  CartesianGrid,

  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Mo',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Tu',
    uv: 3000,
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

const VistorGra = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={270}
        height={160}
        data={data}
        margin={{
          top: 5,
          
          left: 20,
          bottom: 5,
        }}
        barSize={20}
      >
        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
        {/* <Tooltip />
        <Legend /> */}
        <CartesianGrid strokeDasharray="3 " />
        <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} legendType="none"/>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default VistorGra;
