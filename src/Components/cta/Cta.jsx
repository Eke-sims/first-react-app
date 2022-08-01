import './cta.css'
import emailIcon from "../../assets/Group 46.png"
import sendIcon from "../../assets/Telegram.png"

const Cta = () => {
  return (
    <section>

      <div className='section-container cta-container'>
        <div className="cta">

          <img src={sendIcon} alt="send icon" className='sendIcon'/>

          <h4 className='cta-text'>Subscribe to get information, latest news and other <br />
                interesting offers about Cobham
          </h4>

          <div className="input-field-container">
            <div className="input-container">
              <img src={emailIcon} alt="email icon" className="email-icon"/>
              <input type="text" className='input-field'  placeholder='Your Email'/>
            </div>
            <input type="submit" value="Subscribe" className='subscribe-btn'/>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Cta