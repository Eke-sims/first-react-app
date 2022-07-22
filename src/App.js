import React from 'react';
import './App.css';

import { Booking, Category, Destination, Footer, Header, Testimonial } from './containers';
import { Navbar,Cta} from './Components'

function App() {
  return (
    <div className='App'>
      <div className='banner_bg'>
        <Navbar />
        <Header />
      </div>
      <Category />
      <Destination />
      <Booking />
      <Testimonial />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
