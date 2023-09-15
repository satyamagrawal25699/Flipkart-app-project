import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { AiOutlineSearch, AiOutlineDown } from 'react-icons/ai';
import { FaCartShopping } from 'react-icons/fa6';
import Tooltips from './Tooltips';
import MoreT from './MoreT';
import 'tippy.js/themes/light.css';
import { useSelector } from 'react-redux';
import Loginform from './Loginform';
import cartReducer from './reducers/cartReducer';

const Header = () => {
  const navigate = useNavigate();
  const counter = useSelector(state => state.cartReducer.counter);

  const routes = [
    { label: 'Login', path: '/Loginform' },
    { label: 'Become a Seller', path: '/Products' },
  ];

  const onClick = path => {
    navigate(path);
  };
  const onClick2 = () => {
    navigate('/cart');
  };

  return (
    <div className="header">
      <div className="header__first">
        <img src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" />

        <div className="header__first1">
          <span
            style={{
              fontSize: '11px',
              color: 'white',
              fontStyle: 'italic',
            }}
            id="explore"
          >
            Explore
          </span>
          <span
            style={{
              color: '#f9e107',
              fontSize: '11px',
              fontStyle: 'italic',
            }}
            id="explore"
          >
            {' '}
            Plus
          </span>
          <span>
            <img
              width="10"
              src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
            />
          </span>
        </div>
      </div>

      <div className="header__second">
        <input type="text" placeholder="Search for products, brands and more" />
        <span>
          <AiOutlineSearch />
        </span>
      </div>
      <div className="header__third">
        <button onClick={() => onClick(routes[0].path)}>Login</button>

        {/* <Tippy theme="light" content={<Tooltips/>}  interactive={true}>
              
            </Tippy> */}
      </div>
      <div className="header__fourth">
        <span id="Becomeseller" onClick={() => onClick(routes[1].path)}>
          Become a Seller
        </span>
      </div>
      <div className="header__fifth">
        <Tippy theme="light" content={<MoreT />} interactive={true}>
          <span id="more">
            More{' '}
            <span id="downarrow">
              <AiOutlineDown />
            </span>
          </span>
        </Tippy>
      </div>

      <div className="header__sixth">
        <span id="carticon">
          <FaCartShopping />
        </span>
        <span id="carttext" onClick={onClick2}>
          Cart {counter}
        </span>
      </div>
    </div>
  );
};

export default Header;
