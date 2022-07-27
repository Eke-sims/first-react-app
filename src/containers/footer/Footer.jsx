import './footer.css'
import {logo, social, social1, social2, google, store } from './import' 

const companies = ['About', 'Careers', "Mobile"]
const contacts = ['Help/FAQs', 'Press', "Affiliates"]
const mores = ['Airlinefees', 'Airline', "Low fare tips"]

const Footer = () => {
  return (
    <section id='Footer'>
      <div className='section-container footer-container'>
        <div className='footer-links-container'>

          <div className='footer-header'>
            <img src={logo} alt="company logo" className='company-logo' />
            <p className="tagline">Book your trip in minute, get full
              Control for much longer.
            </p>
          </div>

          <div className='footer-header'>
            <h4 className="link-header">Company</h4>
            {companies.map((company) => {
              return <p className="footer-link">{company}</p>
            })}
          </div>

          <div className='footer-header'>
            <h4 className="link-header">Contact</h4>
            {contacts.map((contact) => {
              return <p className="footer-link">{contact}</p>
            })}
          </div>

          <div className='footer-header'>
            <h4 className="link-header">More</h4>
            {mores.map((more) => {
              return <p className="footer-link">{more}</p>
            })}
          </div>

          <div className='footer-header socials'>
            <div className="social-icons">
              <img src={social1} alt="facebook icon" className='social-icon'/>
              <img src={social2} alt="Instagram icon" className='social-icon'/>
              <img src={social} alt="Twitter icon" className='social-icon'/>
            </div>
            <p>Discover our App</p>
            <div className="store-icons">
              <img src={google} alt="Google play icon" />
              <img src={store} alt="Play store icon" />
            </div>
          </div>
        </div>



        <div className='copywrite'>All rights reserved @Jadoo.co</div>
      </div>
    </section>
  )
}

export default Footer