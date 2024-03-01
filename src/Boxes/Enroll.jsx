import React, { useState } from 'react'
import './en.css'
import { json } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Enroll = () => {
    let URI="https://webmasterbackend-1.onrender.com"
    let [form,setForm]=useState({
        name:'',
        email:'',
        number:'',
        course:''

    })
    function change(g){
        setForm({...form,[g.target.name]:g.target.value})

    }

    async function click(e){
        e.preventDefault()
        try {
            let responce1=await fetch(`${URI}/api/user/enroll`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
    
                body:JSON.stringify(form)
               
               
    
            })
            if (! responce1.ok) {
                toast.error('Enrollment faild')
                // console.log(responce1.status)
                
            }else{
                let enn= await responce1.json()
                localStorage.setItem('enroll',JSON.stringify(enn))
                toast.success('Enrollment sucessfully')
            }
            
         
    
           
            
        } catch (error) {
            console.log(error)
            
        }
        // setForm()
        // console.log(form)
        
    }
  return (
    <div className='row en'>
        <div className="col-md-12">
            <form action="" onSubmit={click}>
                <ToastContainer/>
                <input type="text" placeholder='your name' name="name" id="" className='in1' onChange={change} value={form.name} required/><br /> <br />
                <input type="email" placeholder='enter your email' name="email" id="" className='in1' onChange={change} value={form.email} required/><br /><br />
                <input type="number" placeholder='Your number' name="number" id="" className='in1' onChange={change} value={form.number} required/><br /><br />
                <select name="course" id="" className='in1 in2' onChange={change} value={form.course} required>
                    <option value="" selected>Choose Your Course</option>
                    <option value="Web Technology(Html,Css, JavaScript)">Web Technology(Html,Css, JavaScript)</option>
                    <option value="React js">React js</option>
                    <option value="Web Technology + React js">Web Technology + React js</option>
                    <option value="MERN Stack">MERN Stack</option>
                    <option value="MERN With Jquery">MERN With Jquery</option>
                    <option value="Bootstrap, Sass (css frameworks)">Bootstrap, Sass (css frameworks)</option>
                </select>
                <button className='in1 in3'>Submit</button>

            </form>


        </div>

      
    </div>
  )
}

export default Enroll
