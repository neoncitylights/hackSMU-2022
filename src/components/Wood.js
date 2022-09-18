import React from 'react';
import img from "../assets/wood.jpg";



export default function Wood() {
  return (
   <div >

      <img src={img} alt="fluffy cotton" width="100%"/>
            <h1 style={{color: 'green'}}>Wood</h1>
      <p style={{color: 'black'}}>Wood is fully sustainable since you can replant all the trees you grow to offset any impact on the footprint that was caused from its harvesting.</p>
    </div>);
}
