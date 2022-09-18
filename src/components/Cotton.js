import React from 'react';
import img from "../assets/cotton.jpg";
import classNames from "classnames";

export default function Cotton() {
  return (
   <div style={{itemsalign:'center'}}>
      <p >
      Cotton
      </p>
       <img src={img} alt="fluffy cotton" width="600"/> 
      <p style={{color: 'gray'}}>cotton is fully natural material and will normally decompost over time ,however recycled yarn cost is generally higher than standard, virgin cotton yarn costs, and could possibly be cost-prohibitive.</p>
    </div>);
}
