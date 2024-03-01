// import React, { useState } from 'react'
import './con2.css'
import img1 from './images/coding.jpg'
import img2 from './images/img2.jpg'
import { Link } from 'react-router-dom'


function Content2() {
  // const[btn,setBtn]=useState(true)


  return (
    <div className='c2' id=''>
        <div className='c2-1'>
            <h6>Welcome to our Institute</h6>
            <h2 className='q'><q>Best Place To Learn <span> Technology!</span></q></h2>
            <Link to="/courses"  >
                <button >Get Started</button>
            </Link>
        </div>
        <div className="c2-2">
            <img src={img1} alt="" height={200} width={230} id='q' />
            <img src={img2} alt="" height={200} width={230} id='w'  />
        </div>
      
    </div>
  )
}

export default Content2
