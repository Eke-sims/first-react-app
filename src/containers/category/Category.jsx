import './category.css'
import { group48,group49,group51 } from './import'
import { ServiceCard } from '../../Components'


const Category = () => {

  return (
    <section>
      <div className="section-container category-container">
        <p className='section-title'>CATEGORY</p>
        <h1 className='category-title'>We Offer Best Services</h1>
        <div className='servicecard-container'>
          <ServiceCard imgUrl={group48} title='calculated weather' details='Engrossed listening. Park gate sell they west hard for the.'/>
          <ServiceCard imgUrl={group51} title='best flight' details='Engrossed listening. Park gate sell they west hard for the.'/>
          <ServiceCard imgUrl={group48} title='local event' details='Engrossed listening. Park gate sell they west hard for the.'/>
          <ServiceCard imgUrl={group49} title='customizations' details='Engrossed listening. Park gate sell they west hard for the.'/>
        </div>
      </div>
    </section>
  )
}

export default Category