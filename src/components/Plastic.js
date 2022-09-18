import React from 'react';
import img from "../assets/plastic.jpg";



export default function Plastic() {
  return (
   <div >

      <img src={img} alt="fluffy cotton" width="100%"/>
            <h1 style={{color: 'green'}}>Plastic</h1>
      <p style={{color: 'black'}}>Plastic is not biodegradable and it cannot be recycled easily. However it is durable and tends to last a long time.</p>
    </div>);
}
