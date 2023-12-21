import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import GenerateData from './GenerateData';

const HeatmapChart = () => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: '1K',
        data: GenerateData(8, { min: 0, max: 90 }),
      },
      {
        name: '2k',
        data:GenerateData(8, { min: 0, max: 90 }),
      },
      {
        name: '3k',
        data:GenerateData(8, { min: 0, max: 90 }),
      },
      {
        name: '4k',
        data:GenerateData(8, { min: 0, max: 90 }),
      },
      {
        name: '5k',
        data:GenerateData(8, { min: 0, max: 90 }),
      },
      {
        name: '6k',
        data:GenerateData(8, { min: 0, max: 90 }),
      },
      {
        name: '7k',
        data:GenerateData(8, { min: 0, max: 90 }),
      },
      {
        name: '8k',
        data:GenerateData(8, { min: 0, max: 90 }),
      },
      
    ],
    options: {
      chart: {
        height: 415,
        type: 'heatmap',
      },
      dataLabels: {
        enabled: false,
      },
      colors: ['#002FFB'],
      title: {
        text: '',
      },
      yaxis: {
        labels: {
          style: {
            fontSize: '14px', // 修改标签的字体大小
          },
        },
      },
      xaxis: {
        categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug'],
        labels: {
          style: {
            fontSize: '16px', // 修改标签的字体大小

          },
        },}
    },
  });

  return (
    <div id="HeatmapChart">
      <ReactApexChart options={chartData.options} series={chartData.series} type="heatmap" height={415} />
    </div>
  );
};

export default HeatmapChart;
