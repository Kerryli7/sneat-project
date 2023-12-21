import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const IncomePie = () => {
  const [chartData] = useState({
    series: [76],
    options: {
      chart: {
        type: 'radialBar',
        offsetY: -20,
        sparkline: {
          enabled: true,
        },
      },
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          track: {
            background: "#e7e7e7",
            strokeWidth: '97%',
            margin: 5,
            dropShadow: {
              enabled: true,
              top: 2,
              left: 0,
              color: '#876',
              opacity: 1,
              blur: 2,
            },
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              offsetY: -2,
              fontSize: '20px',
              color:'rgba(50, 71, 92, 0.87)',
            },
          },
        },
      },
      grid: {
        padding: {
          top: -10,
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'rgb(105, 108, 255)',
          shadeIntensity: 0.8,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 53, 91],
        },
      },
      labels: ['Average Results'],
    },
  });

  return (
    <div id="IncomePie">
      <ReactApexChart options={chartData.options} series={chartData.series} type="radialBar" />
    </div>
  );
}

export default IncomePie;
