import React,{useState} from 'react'
import './contact.css'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function Contact() {
    let URI="https://webmasterbackend-1.onrender.com"
  let [form,setForm]=useState({
    name:'',
    email:'',
    number:'',
    message:''

})
function change(g){
    setForm({...form,[g.target.name]:g.target.value})

}

async function click(e){
    e.preventDefault()
    // setForm()
    // console.log(form)
    let responce=await fetch(`${URI}/api/user/contact`,{
        method:'POST',
        body:JSON.stringify(form),
        headers:{
            'Content-Type':'application/json'
        },
        

    })
    if (! responce.ok) {
        toast.error('message sending faild')
        
    }
    else{
        let cont=await responce.json()
        localStorage.setItem('contact',JSON.stringify(cont))
        toast.success('message send successfully')

    }
   

    
}
  return (
    <div className='container-fluid contact1'>
    <ToastContainer/>
        <h1 className='conhead'>Contact Us</h1>
        <div className="row">
            <div className="col-lg-6 form">
                <form action="" className='form1' onSubmit={click}>
                    <input type="text" name="name" id="" className='contactinp' placeholder='Your Name' required onChange={change}/><br />
                    <input type="email" name="email" id="" className='contactinp' placeholder='Your Email' required onChange={change}/><br />
                    <input type="number" name="number" id="" className='contactinp' placeholder='Your Contact Number' required onChange={change}/><br />
                    {/* <input type="text" name="" id="" pl /> */}
                    <textarea name="message" id="" cols="30" rows="10" placeholder='comments' className='contactinp2' required onChange={change}></textarea>
                    <button className='contactbtn'>Send</button>
                </form>
            </div>
            <div className="col-lg-6 form">
            <iframe width="100%" height="470" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Electronic%20City+(WebMasrers%20Learning)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps tracker sport</a></iframe>

            </div>
        </div>
       
       
        
      
    </div>
  )
}

export default Contact
