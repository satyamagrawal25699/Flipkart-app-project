/* eslint-disable import/no-anonymous-default-export */
import {
  GET_MENU_LIST_FAILURE,
  GET_MENU_LIST_LOADING,
  GET_MENU_LIST_SUCCESS,
} from '../actions/header';

const initialState = {
  loading: false,
  routes: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_MENU_LIST_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }

    case GET_MENU_LIST_SUCCESS: {
      return {
        ...state,
        loading: false,
        routes: payload,
      };
    }

    case GET_MENU_LIST_FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }

    default:
      return state;
  }
}
