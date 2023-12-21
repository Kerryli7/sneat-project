import React,{useState} from 'react'
import ReactApexChart from 'react-apexcharts'
export default function TotalExpress() {
    const [state,setState] = useState({
        series: [70],
        options: {
          chart: {
            height: 350,
            type: 'radialBar',
          },
          plotOptions: {
            radialBar: {
              hollow: {
                size: '70%',
              },
              dataLabels: {

                value: {
                  show: false,
                },
              },
            },
          },
          colors: ['rgb(105, 108, 255)'], // 设置图表颜色为紫色
          labels: ['7.2K'],
        },
      
    })
        
    


  return (
    <div id="TotalEchart">
  <ReactApexChart options={state.options} series={state.series} type="radialBar" height={130}  />
</div>
  )
}