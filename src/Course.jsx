import React from 'react'
// import { NavLink } from 'react-router-dom'
import Card from './component/Card'
import data from './datas'
import './cou.css'
import { Link } from 'react-router-dom'




function Course() {
   

    // console.log(data)
    return(
        <>
       
        <div className='cor1'>
        <h2>Our Courses</h2>
        
        </div>
        
         <div className="nishi">  
        {data.map((w)=>{
            return(
        
            <Card image={w.image} name1={w.name1} sub={w.sub} price={w.price} duration={w.duration} key={w.id} />
            )

    })}
    </div>
            <Link to="/about" className='cou6'>
                <button>Next</button>
            </Link>
        
        {/* <Card image={datas[0].image} name1={datas[0].name1} sub={datas[0].sub} price={datas[0].price} duration={datas[0].duration}/> 
        <Card image={datas[1].image} name1={datas[1].name1} sub={datas[1].sub} price={datas[1].price} duration={datas[1].duration}/> 
        <Card image={datas[2].image} name1={datas[2].name1} sub={datas[2].sub} price={datas[2].price} duration={datas[2].duration}/>
        <Card image={datas[3].image} name1={datas[3].name1} sub={datas[3].sub} price={datas[3].price} duration={datas[3].duration}/>
        <Card image={datas[4].image} name1={datas[4].name1} sub={datas[4].sub} price={datas[4].price} duration={datas[4].duration}/>
        <Card image={datas[5].image} name1={datas[5].name1} sub={datas[5].sub} price={datas[5].price} duration={datas[5].duration}/> */}
       
       
       </>
        
        
        
        
        
          
       
    )
  
    
  

      
    
  
}

export default Course
