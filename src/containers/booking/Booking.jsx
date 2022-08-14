import './booking.css'
import { Tips } from '../../Components'
import { group12,group11, group7 } from './import'
import image from '../../assets/Group 5.png'

const Booking = () => {

  const tips =[{imgUrl:group7, title:'Choose Destination', desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. "}, 
  {imgUrl:group12, title:'Make payment', desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. "}, 
  {imgUrl:group11, title:'Reach Airport on Selected Date', desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. "}]

  return (
    <section>
      <div className="section-container booking-container">
        <div className="booking-tips">
          <div className='title-container'>
            <p className="section-title">Easy And Fast</p>
            <h1>Book Your Next Trip</h1>
          </div>
          <div className="tips-container">
            {tips.map((tip, key ) => {
              return <Tips imgUrl={tip.imgUrl}  title={tip.title} desc={tip.desc} /> 
            })}
          </div>
        </div>
        <div className="booking-card">
          <img src={image} alt="booking card" />
        </div>
      </div>
    </section>
  )
}

export default Booking