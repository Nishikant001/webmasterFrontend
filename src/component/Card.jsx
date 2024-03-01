import React from 'react'
import './card.css'
import { Link } from 'react-router-dom'

// import contacts from '../contact'

function Card(props) {
  return (

    
     
      <div className="card1">
        <div className="card2" >
        <img src={props.image} alt="" height={100} width={100} />
        </div>
        <div className="card3">
          <div className="sub">
          <h6>{props.sub}</h6>
          </div>
          <div className="dur">
            <h6 id='b'> Duration- {props.duration}</h6>
          </div>
         
        <h5>{props.name1}</h5>
        </div>
        <div className="card4">
          <b><h5>Rs- {props.price}</h5></b>
          <Link to="/enroll" className='link'>
          
              <div class="modal-dialog modal-dialog-scrollable  xyz">
                Enroll Now
              </div>
          </Link>

        </div>

      </div>  
        

        

      
    
  )
}

export default Card
