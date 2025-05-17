import React, { useEffect, useState } from 'react'
import img1 from './assets/user-1.png'
import img2 from './assets/user-2.png'
import img3 from './assets/user-3.png'

import './about.css'
function about() {
  const [width ,setWidth] = useState(window.innerWidth)
  useEffect(()=>{
    window.addEventListener('resize',()=>{
      setWidth(window.innerWidth)
    })


    return ()=>{
      window.removeEventListener('resize',()=>{
        setWidth(window.innerWidth)
      })
    }
},[])
  return (
  <div className="container-fluid py-3">
      <div className="row about">
          <div className="col-12 col-md-7 about-col">
              <h2>Enriching and Fun Early Years <br/> Matter Preschool Curriculum</h2>
              <hr/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, autem? Officiis quo eveniet tempora. Facilis placeat aut, vitae nemo dolorem ipsa ad eos natus perferendis. Quaerat accusantium similique nemo laboriosam?
              Exercitationem, nihil molestiae officia beatae ex, ullam, totam eos accusamus excepturi magni repudiandae.</p>
          </div>
          <div className="col-12 col-md-5 about-col-img">
              <img src={img1} alt="user-1" className='about-img'/>
          </div>
      </div>

      <div className="row about">
        <div className={`col-12 col-md-5 ${width<768?'about-col':'about-col-img'} `} >
        {width<768?<>
        <h2>Enriching and Fun Early Years 
          <br/> Matter Preschool Curriculum</h2>
            <hr/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, 
              autem? Officiis quo eveniet tempora. Facilis placeat aut, vitae nemo dolorem ipsa 
              ad eos natus perferendis.</p>
              </>:<img src={img2} alt="user-2" className='about-img'/>}


          {/* <img src={img2} alt="user-2" className='about-img'/> */}
        </div>
        <div className={`col-12 col-md-7  ${width<768?'about-col-img':'about-col'}`}>
        {width<768?
        <img src={img2} alt="user-2" className='about-img'></img>
        :<><h2>Enriching and Fun Early Years 
          <br/> Matter Preschool Curriculum</h2>
            <hr/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, 
              autem? Officiis quo eveniet tempora. Facilis placeat aut, vitae nemo dolorem ipsa 
              ad eos natus perferendis.</p>
              </>}


        {/* <h2>Enriching and Fun Early Years <br/> Matter Preschool Curriculum</h2>
            <hr/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, autem? Officiis quo eveniet tempora. Facilis placeat aut, vitae nemo dolorem ipsa ad eos natus perferendis.</p> */}
        </div>
      </div>

      <div className="row about">
          <div className="col-12 col-md-7 about-col">
          <h2>Enriching and Fun Early Years <br/> Matter Preschool Curriculum</h2>
            <hr/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, autem? Officiis quo eveniet tempora. Facilis placeat aut, vitae nemo dolorem ipsa ad eos natus perferendis.</p>

          </div>
          <div className="col-12 col-md-5 about-col-img">
            <img src={img3} alt="user-3" className='about-img' />
          </div>
      </div>
  </div>
  )
}

export default about