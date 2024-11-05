import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
const Card = (props) => {

  return (
    <div className='card' style={{border: `4px solid ${props.color}` }}>
            <img src={`https://robohash.org/${props.id}${props.name}${props.speed}${props.color}`} alt="Crewmate" style={{margin:'20px'}}/>            
            <h2>{props.name}</h2>
            <p>Speed: {props.speed}</p>
            <p>Color: {props.color}</p>
        <button className='btn btn-info'><Link to={`/edit/${props.id}`}> Edit Crewmate</Link></button>
    </div>
  )
}

export default Card
