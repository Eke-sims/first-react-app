import './header.css'
import banner from '../../assets/Group 3.png'

const Header = () => {
  return (
    <section>
      <div id='Header' className='header-container section-container'>

        <div className="header-content">

          <h4>Best Destinations around the world</h4>
          <h1>
            Travel, enjoy
            and live a new
            and full life
          </h1>
          <p>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>


          <div className="action">

            <button>Find Out More</button>
            <div className='demo'>
              <div className="red-btn">
                <div className="white"></div>
              </div>
              <span>Play Demo</span>
            </div>

          </div>

        </div>

        <div className="image-container">
          <img src={banner} alt="happy traveller" className='header-image'/>
        </div>

      </div>
    </section>
  )
}

export default Header