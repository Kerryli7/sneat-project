import * as React from 'react';
import OutlinedButtons from './OutlinedButtons';
import './Card.css'
export default function MultiActionAreaCard() {
  return (
    <div className="boxOne">
       <div className="boxOneLeft">
          <h5>Congratulations John! 🎉</h5>
          <div className='leftContentTop'>You have done 72% more sales today.</div>
          <div className='leftContentBo'>Check your new badge in your profile.</div>
          <OutlinedButtons></OutlinedButtons>
       </div>
       <div className="boxOneRight">
        <img className='boxOneRight' src="https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/illustration-john-light.png" alt="Congratulations John" />
       </div>
     </div>
   
  );
}