import React from 'react';
import './Shopcart.css';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';
import { useSelector } from 'react-redux';
import BannerImage from './components/BannerImage';

const Shopcart = () => {
  const balance = useSelector(state => state.amount);
  const dispatch = useDispatch();
  const { Add, Remove } = bindActionCreators(actionCreators, dispatch);

  return (
    <div>
      {balance ? (
        <div>
          <button onClick={() => Remove(1)}>Remove</button>
          <button onClick={() => Add(1)}>Add</button>
        </div>
      ) : (
        <button onClick={() => Add(1)}>Add</button>
      )}
    </div>
  );
};

export default Shopcart;
