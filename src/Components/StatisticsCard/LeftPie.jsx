import React, { useState } from 'react';
import {
  PieChart,
  Pie,
  ResponsiveContainer,
  Sector,
  Cell
} from 'recharts';

const data = [
  { name: '38% weekly', value: 38, color: 'rgb(3, 195, 236)' }, // 自定义颜色
  { name: '45 Fashion', value: 45, color: 'rgb(113, 221, 55)' },
  { name: '80 Electric', value: 80, color: 'rgb(105, 108, 255)' },
  { name: '40 Decor', value: 40, color: 'rgb(255, 171, 0)' },
  { name: '20 sports', value: 20, color: 'rgb(133, 146, 163' },
];

const renderActiveShape = (props) => {

  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload, } = props;



  

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
};

const LeftPie = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  return (
    <ResponsiveContainer width={120} height={120}>
      <PieChart width={120} height={120}>
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={45}
          outerRadius={60}
          dataKey="value"
          onMouseEnter={onPieEnter}
         
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default LeftPie;

