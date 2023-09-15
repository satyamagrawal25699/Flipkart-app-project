import React from 'react';
import Header from './Header';
import Categorycomponent from './Categorycomponent';
import Banner from './Banner';
import Banner2 from './Banner2';
import Banner3 from './Banner3';
import Products from './Products';
import Footer from './Footer';
import Endfooter from './Endfooter';

function Home() {
  return (
    <div>
      <Categorycomponent />
      <Banner />
      <Banner2 />
      <Banner3 />
      <Products />
    </div>
  );
}

export default Home;
