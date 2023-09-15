import {
  GET_PRODUCTS_LIST_SUCCESS,
  GET_PRODUCTS_LIST_FAILURE,
  GET_PRODUCTS_LIST_LOADING,
} from '../actions/product';
import {
  GET_PRODUCTS_LIST_ELECTRONICS_LOADING,
  GET_PRODUCTS_LIST_ELECTRONICS_SUCCESS,
  GET_PRODUCTS_LIST_ELECTRONICS_FAILURE,
} from '../actions/product';
import {
  GET_PRODUCTS_LIST_JWELLERY_LOADING,
  GET_PRODUCTS_LIST_JWELLERY_SUCCESS,
  GET_PRODUCTS_LIST_JWELLERY_FAILURE,
} from '../actions/product';
import {
  GET_PRODUCTS_LIST_BYID_LOADING,
  GET_PRODUCTS_LIST_BYID_SUCCESS,
  GET_PRODUCTS_LIST_BYID_FAILURE,
} from '../actions/product';
/* eslint-disable import/no-anonymous-default-export */
const initialState = {
  loading: false,
  list: [],
  list1: [],
  list2: [],
  list3: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PRODUCTS_LIST_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }

    case GET_PRODUCTS_LIST_SUCCESS: {
      return {
        ...state,
        loading: false,
        list: payload,
      };
    }

    case GET_PRODUCTS_LIST_FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }

    case GET_PRODUCTS_LIST_ELECTRONICS_LOADING: {
      return {
        ...state,
        loading: false,
      };
    }

    case GET_PRODUCTS_LIST_ELECTRONICS_SUCCESS: {
      return {
        ...state,
        loading: false,
        list1: payload,
      };
    }

    case GET_PRODUCTS_LIST_ELECTRONICS_FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }

    case GET_PRODUCTS_LIST_JWELLERY_LOADING: {
      return {
        ...state,
        loading: false,
      };
    }

    case GET_PRODUCTS_LIST_JWELLERY_SUCCESS: {
      return {
        ...state,
        loading: false,
        list2: payload,
      };
    }

    case GET_PRODUCTS_LIST_JWELLERY_FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }

    case GET_PRODUCTS_LIST_BYID_LOADING: {
      return {
        ...state,
        loading: false,
      };
    }

    case GET_PRODUCTS_LIST_BYID_SUCCESS: {
      return {
        ...state,
        loading: false,
        list3: payload,
      };
    }

    case GET_PRODUCTS_LIST_BYID_FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }

    default:
      return state;
  }
}
