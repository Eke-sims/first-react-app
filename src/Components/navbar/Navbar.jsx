import './navbar.css'
import React from 'react'
import logo from '../../assets/Logo@2x.png'

const links = ['Destinations', 'Hotels', 'Flights','Bookings']

const Navbar = () => {
  return (
    <nav>
      <div className='navbar-container section-padding'>

        <div className="logo-container">
          <a href="#Header"><img src={logo} alt="logo" /></a>
        </div>

        <div className="nav-links">
          <div className='links'>
            {links.map((link) => {
              return <p>{link}</p>
            })}

          </div>
          <div className='sign'>
            <p>Login</p>
            <button className='SignUp-btn'>Sign Up</button>
            <div className="change-lang">
              <label htmlFor="language">EN</label>
              <select name="EN" id="language">EN</select>
            </div>
          </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar