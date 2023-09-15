import React from 'react';
import Shopcart from './Shopcart';
import { useNavigate } from 'react-router-dom';

function Product({ item, index }) {
  const navigate = useNavigate();

  const onClick = item => {
    navigate(`/productdisplay/${item.id}`);
  };

  return (
    <div className="data-img">
      <a className="nav-link" onClick={() => onClick(item)}>
        <img src={item.image} alt="nav" width={200} height={200} />
        <p className="data-txt"> {item.title} </p>
      </a>
      <Shopcart />
      <div></div>
    </div>
  );
}

export default Product;
