import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
    <div className='footerMain'> 
        <div className='FooterL'>
           © 2023, Made with
           <span className='footicon'>❤️</span>
           by
           <a className='footerlA' href="https://themeselection.com/">ThemeSelection</a>
        </div>
        <div className='FooterR'>
            <a className='ftA' href="https://themeselection.com/license/">License</a>
            <a className='ftA' href="https://themeselection.com/">More Themes</a>
            <a className='ftA' href="https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/documentation/">Documentation</a>
            <a className='ftAlast' href="https://themeselection.com/support/">Support</a>
        </div> 
    </div>
   
  )
}
