import React from 'react';
import './_card.scss';

const Card2 = (props) => {
  return (
    <div className="card">
      <div>React Pacakge1122</div> <br />
      <span>Hello :</span> {props.children}
    </div>
  );
};

export default Card2;
