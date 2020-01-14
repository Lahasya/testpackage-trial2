import React from 'react';
   import './card.css';

   const Card1 = (props) => {
     return (
       <div className="card">
         <div>React Pacakge</div> <br/>
         <span>Hello :</span> {props.children}
       </div>
     );
   };

   export default Card1;
