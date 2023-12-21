import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const PerformPie = () => {
  const [chartData] = useState({
    series: [
      {
        name: 'Income',
        data: [70, 72, 81, 110, 90, 70],
      },
      {
        name: 'Earing',
        data: [80, 67, 65, 70, 75, 110],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'radar',
        dropShadow: {
          enabled: true,
          blur: 1,
          left: 1,
          top: 1,
        },
      },
      title: {
        text: '',
      },
      stroke: {
        width: 2,
      },
      fill: {
        opacity: 0.1,
        type: 'solid',
      },
      markers: {
        size: 0,
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      },
     yaxis:{
        show:false
     },
     colors: ['rgb(105, 108, 255)', 'rgb(3, 195, 236)',],
    },
  });

  return (
    <div id="PerformPie">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="radar"
        height={330}
      />
    </div>
  );
};

export default PerformPie;
