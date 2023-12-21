import React, { useState } from 'react';
import {
  PieChart,
  Pie,
  ResponsiveContainer,
  Sector,
  Cell
} from 'recharts';

const data = [
  { name: '25% Average', value: 38, color: 'rgba(113, 221, 55, 0.75)' }, // 自定义颜色
  { name: '28% 1st week', value: 45, color: 'rgb(113, 221, 55)' },
  { name: '23% 2nd week', value: 80, color: 'rgba(113, 221, 55, 0.25)' },
  { name: '22% 3rd week', value: 40, color: 'rgba(113, 221, 55, 0.5)' },
 
];

const renderActiveShape = (props) => {

  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload, } = props;
  const fontSize = 14; // 字体大小
  const textColor = 'black'; // 字体颜色


  

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={textColor} fontSize={fontSize}>
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

const CusPie = () => {
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

export default CusPie;