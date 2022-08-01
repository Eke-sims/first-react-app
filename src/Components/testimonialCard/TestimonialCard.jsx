import React from 'react'
import './testimonialcard.css'

const TestimonialCard = (props) => {
  return (
    <div className='testimonialCard'>
        <img src={props.img} alt="" className='avatar' />
        <p className="testimonial">{props.testimonial}</p>
        <p className="name">{props.name}</p>
        <p className="location">{props.location}</p>
    </div>
  )
}

export default TestimonialCard