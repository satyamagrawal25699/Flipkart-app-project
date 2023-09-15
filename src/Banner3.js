import React from 'react';
import Carousel from 'react-multi-carousel';
import './Banner3.css';
import 'react-multi-carousel/lib/styles.css';
import BannerImage from './components/BannerImage';
import Shopcart from './Shopcart';

function Banner3() {
  const bannerData = [
    {
      tag: 'Iphone 14/14 plus',
      offer: ' incl of offers',
      price: ' from 67,999',
      url: 'https://rukminim2.flixcart.com/image/200/200/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70',
    },
    {
      tag: 'Oppo Reno BT',
      offer: ' incl of offers',
      price: ' from 10000',
      url: 'https://rukminim2.flixcart.com/image/200/200/xif0q/mobile/x/r/n/-original-imagmgy5jk8ytxnw.jpeg?q=70',
    },
    {
      tag: 'Punjabi dress',
      offer: ' incl of offers',
      price: ' from 1000',
      url: 'https://rukminim2.flixcart.com/image/200/200/kl5hh8w0/fabric/3/o/z/yes-unstitched-parth-dres-flower-60-spela-original-imagycdjqncupcee.jpeg?q=70',
    },
    {
      tag: 'Samsung Galaxy plus',
      offer: ' incl of offers',
      price: ' from 23000',
      url: 'https://rukminim2.flixcart.com/image/200/200/xif0q/mobile/t/u/m/-original-imaggsuehy3nyj3b.jpeg?q=70',
    },
    {
      tag: 'Monitors',
      offer: ' incl of offers',
      price: ' from 8000',
      url: 'https://rukminim2.flixcart.com/image/200/200/ku2zjww0/monitor/w/f/w/xg2405-full-hd-xg2405-viewsonic-original-imag7a3zk9xs6hm7.jpeg?q=70',
    },
    {
      tag: 'Printers',
      offer: ' incl of offers',
      price: ' from 8000',
      url: 'https://rukminim2.flixcart.com/image/200/200/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70',
    },
    {
      tag: 'Premium Powerbank',
      offer: ' incl of offers',
      price: ' from 8000',
      url: 'https://rukminim2.flixcart.com/image/200/200/xif0q/power-bank/d/a/f/-original-imagky3e8yp5ebvr.jpeg?q=70',
    },
    {
      tag: 'Monitors',
      offer: ' incl of offers',
      price: ' from 8000',
      url: 'https://rukminim2.flixcart.com/image/200/200/l5ld8y80/monitor/l/k/s/-original-imagg897ufhyvwqq.jpeg?q=70',
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <Carousel responsive={responsive}>
        {bannerData.map((banner, index) => (
          <BannerImage key={index} banner={banner} />
        ))}
      </Carousel>
    </div>
  );
}

export default Banner3;
