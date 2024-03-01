import React, { useEffect, useState } from 'react'
import './about.css'
import abimg from './component/images/aboutimg.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaBook } from "react-icons/fa";
import { motion } from "framer-motion"
import { PiCertificateDuotone } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { Link } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function About() {
  useEffect(()=>{
    AOS.init({
      offset: 200,
      duration: 300,
      easing: 'ease-in-sine',
      delay: 100,
    });
  })

  let [input,setInput]=useState('')
  let [todolist,setTodolist]=useState([])

  let handleInput=(e)=>{
    setInput(e.target.value)
  }
  let handleAddtodo=()=>{
    if(input.trim()!==''){
      setTodolist([...todolist,input])
      setInput('')
    }else{
      toast.warning(`please don't give empty comments`)
    }
  }


  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(todolist));
}, [todolist])

useEffect(() => {
    const data = JSON.parse(localStorage.getItem('todolist'));
    if(data){
        setTodolist(data)
    }
    
}, [])
  return (
    <div className='container-fluid a1'>
      <div className="row " >
        <div className="col-12 col-3-md text-white  abou1" >
          <p>About Us &#8594;</p>

        </div>
        <div className="row " >
          <div className="col-lg-6  abou2"  data-aos="fade-right">
            <img src={abimg} alt="" height={500} width={500} />
          </div>
          <div className="col-lg-6  abou3" data-aos="zoom-in">
            <h5>LEARN ANYTHING</h5>
            <h2>Benefits About Online Learning Expertise</h2>
            <div className="row ">
              <motion.div whileHover={{
    scale: 1.07,
    transition: { duration: 1 },
    color:'white',
    backgroundColor:'darkcyan'
  }} className="col-12 abou4" >
              <FaBook className='ico1' size={70}/>
              <div className="row over">
                <div className="col-12">
                  <p className='ico2'>Online Courses</p>
                  <p className='ico3'>Master coding fundamentals in WEB: Beginner-friendly course covers basics to advanced concepts.</p>
                  </div>
              </div>
              


              </motion.div>
              < motion.div className="col-12 abou4"  whileHover={{
    scale: 1.07,
    transition: { duration: 1 },
    color:'white',
    backgroundColor:'darkcyan'
  }}>
    <PiCertificateDuotone className='ico1' size={70}/>
    <div className="row over">
                <div className="col-12">
                  <p className='ico2'>Earn A Certificates</p>
                  <p className='ico3'>Obtain a Web Technology Certification: Learn HTML, CSS, JavaScript, and more for modern web development.</p>
                  </div>
              </div>


  </motion.div>
              <motion.div className="col-12 abou4"  whileHover={{
    scale: 1.07,
    transition: { duration: 1 },
    color:'white',
    backgroundColor:'darkcyan'
  }}>
    <FaChalkboardTeacher className='ico1' size={70}/>
    <div className=" over">
                <div className="col-12">
                  <p className='ico2'>
Learn with Expert</p>
                  <p className='ico3'>Learn with industry experts: Gain practical insights and knowledge from seasoned professionals.</p>
                  </div>
              </div>
    


  </motion.div>
            </div>
          </div>
        </div>
        
      </div>

      <div className="row todo">
        <div className="col-12">
          <ToastContainer  className="toast-position"
        position="top-center"/>
          <input type="text" name="" value={input} id="x" size={110}  placeholder='comments' onChange={handleInput}/>
          <button className='btn' onClick={handleAddtodo}>+</button>
         
        </div>
        
        <ul className='todomenu' type="none">
          {todolist.map((todo,index)=>{
            return(
            
            <li key={index}>{todo}</li>
            )
            
          })}

        </ul>
        
      </div>
      <div className="row">
        <div className="col-12">
        <Link to="/contact" className='cou6  btn2'>
                <button>Next</button>
            </Link>
        </div>
      </div>



      
    </div>
    
  )
}

export default About

