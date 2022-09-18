import React from 'react';
import img from "../assets/paper.jpg";


export default function Paper() {
  return (
   <div >
      <h1 style={{color: 'black'}}>Paper</h1>
      <img src={img} alt="fluffy cotton" width="600"/> 
      <p style={{color: 'black'}}>paper is a highly recycleble material it is currently over consumed, however it can easily be turned into pulp and recycled into other paper based materials.
</p>
    </div>);
}
