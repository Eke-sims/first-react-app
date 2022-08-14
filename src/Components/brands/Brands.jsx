import React from 'react'
import './brands.css'
import { alitalia, axon, expedia,jetstar, qantas } from './import'

const brands = [ axon, jetstar, expedia, qantas, alitalia]


const Brands = () => {
  return (
    <div className='section-container brands'>
        {brands.map((brand, key) => {
            return <img src={brand} alt='brand logo' className='brand-logo' />
        })}
    </div>
  )
}

export default Brands