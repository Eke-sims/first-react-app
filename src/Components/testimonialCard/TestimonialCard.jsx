import React from 'react'
import './testimonialcard.css'

const TestimonialCard = ({ imgUrl, testimonial, name, location }) => {
  return (
    <div className='testimonial-container'>
        <img src={imgUrl} alt="" className='avatar' />
        <p className="testimonial">{testimonial}</p>
        <p className="name">{name}</p>
        <p className="location">{location}</p>
    </div>
  )
}

export default TestimonialCard