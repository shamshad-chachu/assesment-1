import React, { useState } from 'react'
import './gallery.css'
import img1 from './assets/category-3.jpg'
import img2 from './assets/gallery-1.jpg'
import img3 from './assets/product-4.jpg'
import img4 from './assets/user-2.png'
import img5 from './assets/user-1.png'
import img6 from './assets/user-2.png'
import img7 from './assets/user-1.png'
import img8 from './assets/category-3.jpg'


function gallery() {
  const Arr = [img1,img2,img3,img4,img5,img6,img7,img8]
  console.log(Arr);
  return <>
  <div className='row p-3'>
    {Arr.map((img,index)=>{
    return <div className='col-12 col-md-4 col-lg-3 mt-4' key={index}>
            <div className='card gallery' > 
              <img src={img} alt={`img ${index}`}  className=' img-fluid gallery-img'/>
            </div>
    </div>
  })}
  </div>
  <div className='row'>
    <p className='display-6 bg-primary text-light text-center '>Get to know us better!</p>
  </div>
  </>
}

export default gallery