import React from 'react';
import img from "../assets/glass.jpg"


export default function Glass() {
  return (
   <div >
      <h1 style={{color: 'Green'}}>Glass</h1>
      <img src={img} alt="fluffy cotton" width="600"/> 
      <p style={{color: 'gray'}}>glass is 100 percent recyceble and easile be broken down by te enviroment. It is one of the most sustainable materials in the world.</p>
    </div>);
}
