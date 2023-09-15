import React, { useEffect, useState } from 'react';
import './Products.css';
import Product from './Product';
import Shopcart from './Shopcart';
import {
  getProductsList,
  getProductsListElectronics,
  getProductsListJwellery,
} from './actions/product';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  // const [items ,setItems] = useState([]);
  // const [electroitems,setelectronics]=useState([]);

  // useEffect (() => {

  //   fetch('https://fakestoreapi.com/products/category/jewelery?limit=4')
  //     .then(res => res.json())
  //     .then(json => {
  //       setItems(json)
  //     })

  //   fetch('https://fakestoreapi.com/products/category/electronics?limit=4')
  //     .then(res => res.json())
  //     .then(json => {
  //       setelectronics(json)
  //     })

  // })

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector(state => state.product.loading);
  const list = useSelector(state => state.product.list);
  const list1 = useSelector(state => state.product.list1);
  const list2 = useSelector(state => state.product.list2);

  useEffect(() => {
    dispatch(getProductsList());
    dispatch(getProductsListElectronics());
    dispatch(getProductsListJwellery());
  }, [dispatch]);

  return (
    <div className="all-products">
      <div className="items">
        {list.map((item, index) => (
          <Product key={index} item={item} />
        ))}
      </div>

      <div className="items">
        {list1.map((item, index) => (
          <Product key={index} item={item} />
        ))}
      </div>

      <div className="items">
        {list2.map((item, index) => (
          <Product key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
