import React from 'react';
import img from "../assets/polyester.jpg";


export default function Electronics() {
  return (
   <div >

      <img src={img} alt="fluffy cotton" width="100%"/>
            <h1 style={{color: 'green'}}>Electronics</h1>
      <p style={{color: 'black'}}>The Electronic's materials composition will greatly affect its enviromentally impact. It's design will alsow greatly impact its energy consuption.</p>
    </div>);
}
