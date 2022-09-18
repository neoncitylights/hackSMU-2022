import React from 'react';
import img from "../assets/polyester.jpg";


export default function Polyester() {
  return (
   <div >

      <img src={img} alt="fluffy cotton" width="100%"/>
            <h1 style={{color: 'green'}}>Polyester</h1>
      <p style={{color: 'black'}}>Polyester is NOT biodegradable, so if not recycled it will remain in the ecosystems and will keep poisoning the environment, the ocean, and wildlife for hundreds of years.</p>
    </div>);
}

