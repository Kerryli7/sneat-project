import React,{useState} from 'react'
import ReactApexChart from 'react-apexcharts'
export default function MiddlePie() {
    const [state,setState] = useState({
        series: [70],
        options: {
          chart: {
            type: 'radialBar',
            
          },
          plotOptions: {
            radialBar: {
              hollow: {
                size: '70%',
              }
            },
          },
          labels: ['Cricket'],

        },
      
      
      
        

    })
        
    


  return (
    <div id="chart">
  <ReactApexChart options={state.options} series={state.series} type="radialBar" height={140} width={140}/>
</div>
 
  )
}