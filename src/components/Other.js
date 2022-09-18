import React from 'react';
import img from "../assets/other.jpg";



export default function Other() {
  return (
   <div >

      <img src={img} alt="fluffy cotton" width="100%"/>
            <h1 style={{color: 'green'}}>Other</h1>
      <p style={{color: 'black'}}>This will hold other items in the future and is currently just a placeholder</p>
    </div>);
}

