import React from 'react';
import './App.css';

import { Booking, Category, Destination, Footer, Header, Testimonial } from './containers';
import { Navbar, Cta, Brands} from './Components'

function App () {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <Category />
      <Destination />
      <Booking />
      <Testimonial />
      <Brands />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
