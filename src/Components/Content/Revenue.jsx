import React, { useState } from 'react'
import './Revenue.css'
import ReactApexChart from 'react-apexcharts'
import BasicSelect from '../RevenueCard/BasicSelect'
import Growth from '../RevenueCard/Growth'
import VariantAvatars from '../RevenueCard/VariantAvatars'
export default function Revenue() {
 const [state,setState] = useState({
    series: [
        {
          name: 'Q1 Budget',
          group: 'budget',
          data: [44000, 55000, 41000, 67000, 22000, 43000]
        },
        {
          name: 'Q1 Actual',
          group: 'actual',
          data: [48000, 50000, 40000, 65000, 25000, 40000]
        },
        {
          name: 'Q2 Budget',
          group: 'budget',
          data: [13000, 36000, 20000, 8000, 13000, 27000]
        },
        {
          name: 'Q2 Actual',
          group: 'actual',
          data: [20000, 40000, 25000, 10000, 12000, 28000]
        }
      ],
      options: {
        
        chart: {
          type: 'bar',
          height: 350,
          stacked: true,
          
        },
        stroke: {
          width: 1,
          colors: ['#fff']
        },
        dataLabels: {
          formatter: (val) => {
            return val / 1000 + 'K'
          },
          
        },
        plotOptions: {
          bar: {
            horizontal: false
            
          }
        },
      
        xaxis: {
          categories: [
            'Online advertising',
            'Sales Training',
            'Print advertising',
            'Catalogs',
            'Meetings',
            'Public relations'
          ]
        },
        fill: {
          opacity: 1
        },
        colors: [ 'rgba(105, 108, 255, 0.16)','rgb(105, 108, 255)','#80c7fd', 'rgb(3, 195, 236)'],
        yaxis: {
          labels: {
            formatter: (val) => {
              return val / 1000 + 'K'
            }
          }
        },
        legend: {
          position: 'top',
          horizontalAlign: 'left'
        }
      }
    
    
    }
 )

  return (
    <div className='Revenue'>
        <div className="totalRevenue">
        <h5 className='textHRe'>Total Budget</h5>
          <ReactApexChart 
          options={state.options} 
          series={state.series} 
          type="bar" height={350} 
          />
        </div>
        <div className="revenueShow">
            <div className="BasicSelect">
            <BasicSelect></BasicSelect>
            </div>
           <div className="Growth">
            <Growth></Growth>
           </div>
           <div className="reData">
            <div className="reDataLeft">
                <div className="avater">
                <VariantAvatars></VariantAvatars>
                </div>
               
           <div className="dataContent">
              <div className='dataText'>2023</div>
               <h5 className='dataH'>$32.5k</h5>
            </div>
            </div>
            <div className="reDataRight">
            <div className="dataTop">
              <div className="topPic">
                <img className='dataTopPic' src="https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/stats-vertical-wallet.png" alt="" />
            </div> 
               </div>
               <div className="dataContentR">
              <div className='dataText'>2022</div>
               <h5 className='dataH'>$41.2k</h5>
            </div>
            </div>
           </div>
        </div>
    </div>
  )
}
 
