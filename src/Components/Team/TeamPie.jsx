import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import {useEffect } from 'react';

const TeamPie = ({color, backgroundColor }) => {

  const [chartData, setChartData] = useState({
    series: [75],
    options: {
      chart: {
        width: 60, // 设置宽度
        height: 60, // 设置高度
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '40%',
          },
          dataLabels: {
            show: false, // 将百分比隐藏
          },
        },
      },
      colors: [color], // 设置图表颜色为紫色
      labels: [''],
      
    },
  });
  useEffect(() => {
    setChartData((prevData) => ({
      ...prevData,
      options: {
        ...prevData.options,
        colors: [color],
        // 添加其他样式属性的设置，例如 backgroundColor
      },
    }));
  }, [color, backgroundColor]);


  return (
    <div id="TeamchartPie">
      <ReactApexChart  options={chartData.options} series={chartData.series} type="radialBar" height={107} width={107}  />
    </div>
  );
}

export default TeamPie;