import React,{useState} from 'react'
import ReactApexChart from 'react-apexcharts'
export default function StaGra() {
    const [state,setState] = useState({
        series: [ {
            name: 'series2',
            data: [11, 32, 45, 32, 34, 52, 41],
            color: 'rgb(105, 108, 255)',
          }],
          options: {
            chart: {
              height: 120,
              type: 'area',
              toolbar: {
                show: false, // 设置为false以隐藏功能栏
              },
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'smooth'
            },
            xaxis: {
                type: 'category', // 将类型更改为 'category'
                categories: [
                  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'
                  // 在这里添加你的月份
                ],
            },
            yaxis: {
                show: false, // 设置为false以隐藏Y轴内容
              },
            tooltip: {
              x: {
                format: 'dd/MM/yy HH:mm'
              },
            },
            theme: {
                palette: 'palette1', // 使用定义的调色板
              },
          },
        

    })
        
    


  return (
    <div id="chart">
    <ReactApexChart options={state.options} series={state.series} type="area" width={460} height={240} />
  </div>
  )
}