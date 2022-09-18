import React from 'react';
import img from "../assets/metal.jpg";



export default function Metal() {
  return (
   <div >
      
      <img src={img} alt="fluffy cotton" width="100%"/>
      <h1 style={{color: 'green'}}>Metal</h1>
      <p style={{color: 'black'}}>Metal is one of the most sustainable materials in the world. It last longer than most materials and cost effective.</p>
    </div>);
}
