import React from 'react';
import {
  FaUser,
  FaBox,
  FaHeart,
  FaTicketSimple,
  FaSuitcase,
} from 'react-icons/fa6';
import { BiSolidPlusCircle } from 'react-icons/bi';
import './Tooltips.css';

function Tooltips() {
  return (
    <div className="logint">
      <div className="login__in">
        <span id="newuser">New customer?</span>
        <span id="signup">Sign Up</span>
      </div>
      <div className="login__in2">
        <span className="Loginicons">
          <FaUser />
        </span>
        <span>My Profile</span>
      </div>

      <div className="login__in2">
        <span className="Loginicons">
          <BiSolidPlusCircle />
        </span>
        <span>FlipKart Plus Zone</span>
      </div>
      <div className="login__in2">
        <span className="Loginicons">
          <FaBox />
        </span>
        <span>Orders</span>
      </div>
      <div className="login__in2">
        <span className="Loginicons">
          <FaHeart />
        </span>
        <span>Wishlist</span>
      </div>
      <div className="login__in2">
        <span className="Loginicons">
          <FaTicketSimple />
        </span>
        <span>Rewards</span>
      </div>
      <div className="login__in2">
        <span className="Loginicons">
          <FaSuitcase />
        </span>
        <span>Gift Cards</span>
      </div>
    </div>
  );
}

export default Tooltips;
