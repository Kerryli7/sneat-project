import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import Analytics from '../views/Analytics'
import CRM from '../views/CRM'
import Commerces from '../views/Commerces'
import Home from '../views/Home'
import Chat from '../views/Chat/Chat';
import EmailManage from "../views/Email/Email";
import Typography from '../views/Typography/Typography'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
export default function Routers() {
   const navigate = useNavigate()
   useEffect (()=>{
     navigate('/analytics')
   },[])
  return (
     <Routes>
        <Route path='/' element={<Home></Home>}>
            <Route path='analytics' element={<Analytics></Analytics>}></Route>
            <Route path='CRM' element={<CRM></CRM>}></Route>
            <Route path='Commerces' element={<Commerces></Commerces>}></Route>
            <Route path={'Chat'} element={<Chat />}></Route>
            <Route path={'Email'} element={<Navigate to={'inbox'}/>} />
            <Route path={'Email/:type'} element={<EmailManage />} />
            <Route path={'Typography'} element={<Typography />} />
        </Route>
     </Routes>
  )
}
