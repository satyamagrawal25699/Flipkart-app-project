// Cart.js
import React from 'react';
import { useSelector } from 'react-redux';
import './Cart.css';
import { useDispatch } from 'react-redux';
import {
  increment,
  addToCart,
  decrement,
  RemoveFromCart,
} from './actions/cartReduceraction';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cartReducer.cart);
  const onClickDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <div className="Addtocart">
            <div>
              <img
                src={item.image}
                alt="product_img"
                width={300}
                height={300}
              />
              <div>
                {' '}
                key={index}
                {item.title}
              </div>
              <button
                className="removefromcart"
                onClick={() => {
                  onClickDecrement();
                  dispatch(RemoveFromCart(item.id));
                }}
              >
                {' '}
                Remove From Cart
              </button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
