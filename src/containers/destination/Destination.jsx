import './destination.css'
import { DestinationCard } from '../../Components'
import { london, italy, europe } from './import'

const Destination = () => {
  return (
    <section>
      <div className='section-container destination-container'>
        <p className="section-title">TOP SELLING</p>
        <h1>Top Destinations</h1>
        <div className="destinationcard-container">
          <DestinationCard imgUrl={italy} destination='Rome, italy' price='11k' days='10' />
          <DestinationCard imgUrl={london} destination='London, UK' price='4.2k' days='12' />
          <DestinationCard imgUrl={europe} destination='Full Europe' price='15k' days='28' />
        </div>
      </div>
    </section>
  )
}

export default Destination