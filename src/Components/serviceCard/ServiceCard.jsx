import React from 'react'
import './servicecard.css'

const ServiceCard = ({ imgUrl, title, details }) => {
  return (
    <div className='servicecard'>
      <div className="card-image">
        <img src={imgUrl} alt="category-icon" className='card-icon'/>
      </div>
      <div className="card-info">
        <h4 className="card-title">{title}</h4>
        <p className="card details">{details}</p>
      </div>
    </div>
  )
}

export default ServiceCard