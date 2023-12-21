import React from 'react'
import './CRM.css'
import CustomRat from '../Rating/CustomRat'
import Overview from '../Rating/Overview'
import CusR from '../Rating/CusR'
import TotalSaleCard from '../Sale/TotalSaleCard'
import Earning from '../Sale/earning'
import SaleDataL from '../saleData/SaleDataL'
import SaleDataM from '../saleData/SaleDataM'
import SaleDataR from '../saleData/SaleDataR'
import TeamLeft from '../Team/TeamLeft'
import TeamRight from '../Team/TeamRight'
import Footer from '../Footer/Footer'
export default function CRM() {
  return (
    <div className='crm'>
          <div className="rating">
            <CustomRat></CustomRat>
            <Overview></Overview>
            <CusR></CusR>
          </div>
          <div className="sale">
            <TotalSaleCard></TotalSaleCard>
            <Earning></Earning>
          </div>
          <div className="saleData">
             <SaleDataL></SaleDataL>
             <SaleDataM></SaleDataM>
             <SaleDataR></SaleDataR>
          </div>
          <div className="Team">
            <TeamLeft></TeamLeft>
            <TeamRight></TeamRight>
          </div>
          <div className="crmFooter">
          <Footer></Footer>
        </div>
    </div>
  )
}

