import React from 'react'
import img1 from "./assets/category-3.jpg";
import './home.css'

function home() {
  return (
    <div className="row px-5 py-4 vh-100">
      <div className="col mt-5">
      <h3 className='fw-bold mb-4'>Kids Learning Center</h3>
        <h1 className='fw-bolder'>New Approach To <br/>Kids Education</h1>
        <hr className='my-3'></hr>
        <p class="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis illum eaque, perspiciatis molestiae neque consequatur dicta voluptate praesentium possimus iure, soluta id corporis? Recusandae obcaecati inventore dolor. Corporis, laborum molestiae?
        Quia hic nam earum modi quasi a sit fugit et, ut impedit corporis officia nulla illum praesentium expedita? Quos tempora qui voluptate earum cum sit quia iusto tenetur aspernatur consequuntur.</p>
        <hr className='my-3'/>
        <button class="border-3 rounded-pill text-light px-3">Learn More</button>

      </div>
      <div className="col d-flex align-items-center">
      <img src={img1} alt="" id="img" class='rounded-circle ms-5' />
      </div>
    </div>
  )
}

export default home