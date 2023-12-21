import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const CusGra = () => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: "Session Duration",
        data: [45, 52, 38, 24, 33, 26, 21]
      },
      {
        name: "Page Views",
        data: [35, 41, 62, 42, 13, 18, 29]
      },
      
    ],
    options: {
      chart: {
        height: 200,
        width: 400,
        type: 'line',
        zoom: {
          enabled: false
        },
      },
      yaxis: {
        show: false, // 隐藏 Y 轴
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: [5, 7, 5],
        curve: 'straight',
        dashArray: [0, 8, 5],
        colors: ['rgb(105, 108, 255)', '#ddd',], // 设置线的颜色数组
      },
      title: {
        text: '',
        align: 'left'
      },
      toolbar: {
        show: false, // 设置图表工具栏不显示
      },
      legend: {
        tooltipHoverFormatter: function (val, opts) {
          return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
        }
      },
      markers: {
        size: 0,
        hover: {
          sizeOffset: 6
        },

      },
      xaxis: {
        categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul'
        ],
      },
      tooltip: {
        y: [
          {
            title: {
              formatter: function (val) {
                return val + " (mins)"
              }
            }
          },
          {
            title: {
              formatter: function (val) {
                return val + " per session"
              }
            }
          },
          {
            title: {
              formatter: function (val) {
                return val;
              }
            }
          }
        ]
      },
      grid: {
        borderColor: 'rgb(255, 255, 255)',

      }
    },
  });

  return (
    <div id="CusGra">
      <ReactApexChart options={chartData.options} series={chartData.series} type="line" height={247} />
    </div>
  );
}

export default CusGra;
