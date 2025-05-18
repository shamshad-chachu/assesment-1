import React from 'react'
import './page.css'
function page() {
  return (
    <div className="row page text-dark max-vh-100 p-5 ">
          <hr className='border border-2 border-secondary'></hr>
          <ul className='d-flex justify-content-evenly  fw-bolder fs-4 text-primary list-unstyled'>
          <li >Front End</li>
            <li >Back End</li>
            <li >Data Base</li>
            <li >Career Path</li>
          </ul>
          <hr className='border border-2 border-secondary' />
          <h1 className='text-center fw-bolder'>Benifits of Working at KLAY</h1>
          <hr className='border border-2 border-secondary' />
          <p className='fs-5 text-center '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam maxime nulla consequuntur, repudiandae quisquam consectetur? Iure ipsam reprehenderit velit, nihil voluptatibus veniam mollitia officiis, dolor aspernatur sit ducimus quae eligendi. voluptatum dicta magnam laborum, repellendus minus, iste id</p>
          <hr className='border border-2 border-secondary' />
          <ul className='d-md-flex justify-content-md-evenly text-center text-md-start fs-5 fw-bold list-unstyled d-block '>
            <li>Staff Child Care</li>
            <li>Medical Insurance/ESI</li>
            <li>Provident Fund</li>
            <li>Annual Bonnus</li>
            <li>Attendance</li>
          </ul>
          <hr className='border border-2 border-secondary' />
          <p className='fs-5 m-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nemo perferendis quasi voluptatibus corporis esse a, culpa eius debitis, cupiditate ratione explicabo, molestiae nihil voluptatem veniam placeat delectus eum impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nemo perferendis quasi voluptatibus corporis esse a, culpa eius debitis, cupiditate ratione explicabo, molestiae nihil voluptatem veniam placeat delectus eum impedit.</p>
    </div>
  )
}

export default page