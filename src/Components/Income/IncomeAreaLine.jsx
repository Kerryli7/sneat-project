import React,{useState} from 'react'
import ReactApexChart from 'react-apexcharts'
export default function IncomeAreaLine() {
    const [state,setState] = useState({
        series: [ {
            name: 'series2',
            data: [3.5,3.5,4.8,4.8,2.95,2.95,1.8,1.8,3.75,3.75,5.7,5.7],
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
                  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec'
                  // 在这里添加你的月份
                ],
            },
            yaxis: {
                type: 'category', // 将类型更改为 'category'
                categories: [
                  '1k', '2K', '3K', '4K', '5K', '6K'
                  // 在这里添加你的月份
                ],
                 labels:{
                    formatter:function(value) {
                        return value;
                    }
                 }
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
    <div id="IncomeAreaLine">
    <ReactApexChart options={state.options} series={state.series} type="area" width={610} height={320} />
  </div>
  )
}