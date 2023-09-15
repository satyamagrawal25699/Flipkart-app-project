// cartReducer.js
import {
  CART_COUNTER_INCREMENT,
  CART_COUNTER_DCREMENT,
  REMOVE_FROM_CART,
} from '../actions/cartReduceraction';
import {
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAILURE,
  ADD_TO_CART_LOADING,
} from '../actions/cartReduceraction';
import {
  REMOVE_FROM_CART_FAILURE,
  REMOVE_FROM_CART_SUCCESS,
  REMOVE_FROM_CART_LOADING,
} from '../actions/cartReduceraction';

const initialState = {
  loading: false,
  cart: [],
  counter: 0,
};

const fun = (data, Id) => {
  const res = data.filter(val => {
    if (val.id !== Id) return val;
  });

  return res;
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_TO_CART_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case ADD_TO_CART_SUCCESS: {
      return {
        ...state,
        loading: false,
        cart: [...state.cart, payload],
      };
    }
    case ADD_TO_CART_FAILURE:
      {
        return {
          ...state,
          loading: false,
        };
      }

      const updatedCart = state.cart.filter(item => item.id !== payload);

    case REMOVE_FROM_CART: {
      return {
        ...state,
        cart: fun(state.cart, payload),
      };
    }

    case CART_COUNTER_INCREMENT: {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }
    case CART_COUNTER_DCREMENT: {
      return {
        ...state,
        counter: state.counter - 1,
      };
    }

    default:
      return state;
  }
}
