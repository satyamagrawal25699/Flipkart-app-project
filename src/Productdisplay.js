import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { getProductsListById } from './actions/product';
import Shopcart from './Shopcart';
//import { addToCart } from './actions/cartReduceraction';
import Cart from './Cart';
import { increment, addToCart, decrement } from './actions/cartReduceraction';

const Productdisplay = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const productDetails = useSelector(state => state.product.list3);
  const loading = useSelector(state => state.product.loading);

  useEffect(() => {
    dispatch(getProductsListById(id));
  }, [dispatch, id]);

  const onClickIncrement = () => {
    dispatch(increment());
  };

  const onClickDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h1>{productDetails.title} Details</h1>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h3>Category : {productDetails.category}</h3>
          <h3>Price : {productDetails.price}</h3>

          <img
            src={productDetails.image}
            alt="product_img"
            width={300}
            height={300}
          />

          <button
            className="add-to-cart"
            onClick={() => {
              onClickIncrement();
              dispatch(addToCart(productDetails));
            }}
          >
            {' '}
            ADD TO CART{' '}
          </button>
        </div>
      )}
    </div>
  );
};

export default Productdisplay;
