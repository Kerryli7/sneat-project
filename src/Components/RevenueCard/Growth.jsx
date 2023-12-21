import React,{useState} from 'react'
import './Growth.css'
import ReactApexChart from 'react-apexcharts'
export default function Growth() {
    const [state,setState] = useState({
        series: [78],
            options: {
              chart: {
                height: 125,
                type: 'radialBar',
                offsetY: -10,
                color: 'rgba(50, 71, 92, 0.6)',
                
              },
              plotOptions: {
                radialBar: {
                  startAngle: -135,
                  endAngle: 135,
                  dataLabels: {
                    name: {
                      fontSize: '16px',
                      color: 'rgba(50, 71, 92, 0.6)',
                      offsetY: 120
                    },
                    value: {
                      offsetY: 76,
                      fontSize: '22px',
                      color: undefined,
                      formatter: function (val) {
                        return val + "%";
                      }
                    }
                  }
                }
              },
              fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    shadeIntensity: 0.15,
                    inverseColors: false,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 50, 65, 91],
                },
              },
              stroke: {
                dashArray: 4
              },
              labels: ['62% Company Growth'],
              color : ['rgba(50, 71, 92, 0.6)']
            },

    })
        
    


  return (
<div id="chart">
  <ReactApexChart 
  options={state.options} 
  series={state.series} 
  type="radialBar" 
  height={240}
  width={230}
  
   />
</div>
  )
}



  
