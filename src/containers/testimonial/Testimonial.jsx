import './testimonial.css'
import { TestimonialCard } from '../../Components'
import avatar from '../../assets/Image.png'


const Testimonial = () => {
  return (
    <section>
      <div className='section-container testimonial-container'>
        <div className='testimonial-section text-area'>
          <div>
            <h4 className="testimonial-heading">TESTIMONIALS</h4>
            <h1 className="testimonial-title"> What people say</h1>
          </div>
          <div className='page-level'>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
        <div className="testimonialCard-container testimonial-section">
          <TestimonialCard img={avatar} testimonial='“On the Windows talking painted pasture yet its express parties use.
           Sure last upon he same as knew next. Of believed or diverted no.”' name='Mike taylor' location='Lahore, Pakistan'/>
        </div>
      </div>
    </section>
  )
}

export default Testimonial