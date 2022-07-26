import React from 'react'
import './destinationCard.css'
import navigation from '../../assets/navigation 1.png'

const DestinationCard = ({imgUrl, destination, price, days}) => {
  return (
    <div className='destinationcard'>
      <img src={imgUrl} alt="destination" className='destination-image'/>
      <div className="destinationcard-info">
        <div className="price-container">
          <p>{destination}</p>
          <p>${price}</p>
        </div>
        <div className="time-container">
          <img src={navigation} alt='nav-icon' /> <span>{days}</span> Days trip
        </div>
      </div>
    </div>
  )
}

export default DestinationCard