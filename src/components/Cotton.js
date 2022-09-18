import React from 'react';
import img from "../assets/cotton.jpg";
import classNames from "classnames";

export default function Cotton() {
  return (
   <div style={{itemsalign:'center'}}>

       <img src={img} alt="fluffy cotton" width="100%"/> 
             <h1 style={{color:'green'}}>Cotton</h1>
      <p style={{color: 'black'}}>cotton is fully natural material and will normally decompost over time ,however recycled yarn cost is generally higher than standard, virgin cotton yarn costs, and could possibly be cost-prohibitive.</p>
    </div>);
}

