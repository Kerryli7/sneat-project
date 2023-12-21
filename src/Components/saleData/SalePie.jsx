import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const SalePie = () => {
  const [chartData, setChartData] = useState({
    series: [75],
    options: {
      chart: {
        height: 350,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '70%',
          }
        },
      },
      colors: ['rgb(113, 221, 55)'], // 设置图表颜色为紫色
      labels: ['Sale'],
      
    },
  });

  return (
    <div id="salechartPie">
      <ReactApexChart options={chartData.options} series={chartData.series} type="radialBar" height={350} />
    </div>
  );
}

export default SalePie;
