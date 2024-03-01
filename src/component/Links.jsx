import React from 'react'
import './link.css'
import { FaWhatsappSquare,FaInstagram, FaLinkedin ,FaFacebookSquare } from "react-icons/fa";



function Links() {
  return (
    <div className='lib'>
        
      <div className=" li">
        <a href="tel:6372770485">
            <FaWhatsappSquare className='wp '/>
        </a>
      
      </div>
      <div className=" li">
        <a href="https://www.instagram.com/webmasterslearning2023/" target='blank'>
        <FaInstagram className='ins'/>
        </a>
      </div>
      <div className=" li">
        <a href="jsjjs">
      <FaLinkedin className='linkd'/>
      </a>

      </div>
      <div className=" li">
        <a href="hswhhw">
      <FaFacebookSquare className='face' />
      </a>
      </div>
    </div>
  )
}

export default Links
