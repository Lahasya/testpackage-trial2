import React from 'react';
   import './card.css';

   const Card2 = (props) => {
     return (
       <div className="card">
         <div>React Pacakge11</div> <br/>
         <span>Hello :</span> {props.children}
       </div>
     );
   };

   export default Card2;
