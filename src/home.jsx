import React from 'react'
import img1 from "./assets/category-3.jpg";
import './home.css'

function home() {
  return (
    <div className="row px-5 py-4 max-vh-100  home">
      <div className="col-12 col-lg-6 mt-5">
      <h3 className='fw-bold mb-4 home-h3'>Kids Learning Center</h3>
      <hr className='my-4'></hr>
        <h1 className='fw-bolder'>New Approach To <br/>Kids Education</h1>
        <p class="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis illum eaque, perspiciatis molestiae neque consequatur dicta voluptate praesentium possimus iure, soluta id corporis? Recusandae obcaecati inventore dolor. Corporis, laborum molestiae?
        Quia hic nam earum modi quasi a sit fugit et, ut impedit corporis officia nulla illum praesentium expedita? Quos tempora qui voluptate earum cum sit quia iusto tenetur aspernatur consequuntur.</p>
        <hr className='my-3'/>
        <button class="border-3 rounded-pill text-light px-3 home-button">Learn More</button>

      </div>
      <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
      <img src={img1} alt="" id="img" class='rounded-circle ms-0 ms-lg-5 home-img'/>
      </div>
    </div>
  )
}

export default home