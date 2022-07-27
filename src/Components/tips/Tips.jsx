import React from 'react'
import './tips.css'

const Tips = ({imgUrl, title, desc}) => {
  return (
    <div className='tips-card'>
        <div className="img-container">
            <img src={imgUrl} alt="tip icon"/>
        </div>
        <div className="desc-container">
            <h5 className="tip">{title}</h5>
            <p className="desc">{desc}</p>
        </div>
    </div>
  )
}

export default Tips