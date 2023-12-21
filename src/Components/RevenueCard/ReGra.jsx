import React from 'react';
import {
  LineChart,
  Line,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 1800,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 2698,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 4800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 2908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 2600,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 5200,
    amt: 2500,
  },

];

const ReGra = () => {
  return (
    <ResponsiveContainer width="100%" height="100%" >
      <LineChart width={300} height={100} data={data}>
        <Line  type="monotone" dataKey="pv" stroke="rgb(255, 171, 0)" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ReGra;
