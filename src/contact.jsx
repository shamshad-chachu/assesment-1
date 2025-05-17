import React from 'react'
import './contact.css'
function contact() {
  return (
    <div className="row contact-row p-5 justify-content-center  justify-content-lg-between">
      <div className="col-12 col-md-7">
      <h3 className='mb-5 fs-3 fw-bolder'>Full Stack Developer Training & Placements</h3>
            <hr className='mb-4'/>
            <p className='mb-5 fs-5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis illum eaque, perspiciatis molestiae neque consequatur dicta voluptate praesentium possimus iure, soluta id corporis? <br/> <br/> obcaecati inventore dolor. Corporis, laborum molestiae?
            Quia hic nam earum modi quasi a sit fugit et, ut impedit corporis officia nulla illum praesentium expedita? Quos tempora qui voluptate earum cum sit quia iusto tenetur aspernatur consequuntur.</p>
            <hr/>
            <button id="btn" className='mt-4 contact-button rounded-pill px-3'>Learn More</button>
      </div>
      <div className="col-12 col-md-5 form-container p-5" >
      <form action="" class="form">
            <h2>Fill & Get upto <br/> 25% OFF in <br/> Courses Fees</h2>
            <br/><br/>
            <input type="text" placeholder="Name*"/>
            <br/>
            <input type="number" placeholder="10 Digit Mobile Number*"/>
            <br/>
            <input type="email" placeholder="Email*"/>
            <br/>
            <input type="text" placeholder="message"/>
            <br/>
            <button className='fs-6 fw-lighter contact-btn px-3 py-1 ' >I am intrested. Tell me more..</button>
        </form>

      </div>
    </div>
  )
}

export default contact