export const GET_PRODUCTS_LIST_LOADING = '@@product/GET_PRODUCTS_LIST_LOADING';
export const GET_PRODUCTS_LIST_SUCCESS = '@@product/GET_PRODUCTS_LIST_SUCCESS';
export const GET_PRODUCTS_LIST_FAILURE = '@@product/GET_PRODUCTS_LIST_FAILURE';

export const getProductsList = () => async dispatch => {
  try {
    dispatch({
      type: GET_PRODUCTS_LIST_LOADING,
    });

    const response = await fetch(
      'https://fakestoreapi.com/products?limit=4'
    ).then(res => res.json());

    dispatch({
      type: GET_PRODUCTS_LIST_SUCCESS,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: GET_PRODUCTS_LIST_FAILURE,
    });
  }
};

export const GET_PRODUCTS_LIST_ELECTRONICS_LOADING =
  '@@product/GET_PRODUCTS_LIST_ELECTRONICS_LOADING';
export const GET_PRODUCTS_LIST_ELECTRONICS_SUCCESS =
  '@@product/GET_PRODUCTS_LIST_ELECTRONICS_SUCCESS';
export const GET_PRODUCTS_LIST_ELECTRONICS_FAILURE =
  '@@product/GET_PRODUCTS_LIST_ELECTRONICS_FAILURE';

export const getProductsListElectronics = () => async dispatch => {
  try {
    dispatch({
      type: GET_PRODUCTS_LIST_ELECTRONICS_LOADING,
    });

    const response = await fetch(
      'https://fakestoreapi.com/products/category/electronics?limit=4'
    ).then(res => res.json());

    dispatch({
      type: GET_PRODUCTS_LIST_ELECTRONICS_SUCCESS,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: GET_PRODUCTS_LIST_ELECTRONICS_FAILURE,
      payload: err,
    });
  }
};

export const GET_PRODUCTS_LIST_JWELLERY_LOADING =
  '@@product/GET_PRODUCTS_LIST_JWELLERY_LOADING';
export const GET_PRODUCTS_LIST_JWELLERY_SUCCESS =
  '@@product/GET_PRODUCTS_LIST_JWELLERY_SUCCESS';
export const GET_PRODUCTS_LIST_JWELLERY_FAILURE =
  '@@product/GET_PRODUCTS_LIST_JWELLERY_FAILURE';

export const getProductsListJwellery = () => async dispatch => {
  try {
    dispatch({
      type: GET_PRODUCTS_LIST_JWELLERY_LOADING,
    });

    const response = await fetch(
      'https://fakestoreapi.com/products/category/jewelery?limit=4'
    ).then(res => res.json());

    dispatch({
      type: GET_PRODUCTS_LIST_JWELLERY_SUCCESS,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: GET_PRODUCTS_LIST_JWELLERY_FAILURE,
      payload: err,
    });
  }
};

export const GET_PRODUCTS_LIST_BYID_LOADING =
  '@@product/GET_PRODUCTS_LIST_BYID_LOADING';
export const GET_PRODUCTS_LIST_BYID_SUCCESS =
  '@@product/GET_PRODUCTS_LIST_BYID_SUCCESS';
export const GET_PRODUCTS_LIST_BYID_FAILURE =
  '@@product/GET_PRODUCTS_LIST_BYID_FAILURE';

export const getProductsListById = id => async dispatch => {
  try {
    dispatch({
      type: GET_PRODUCTS_LIST_BYID_LOADING,
    });

    const response = await fetch(
      `https://fakestoreapi.com/products/${id}`
    ).then(res => res.json());

    dispatch({
      type: GET_PRODUCTS_LIST_BYID_SUCCESS,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: GET_PRODUCTS_LIST_BYID_FAILURE,
      payload: err,
    });
  }
};
