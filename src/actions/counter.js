export const DECREMENT = 'DECREMENT';
export const decrement = () => async dispatch => {
  dispatch({
    type: DECREMENT,
  });
};

export const INCREMENT = 'INCREMENT';
export const increment = () => async dispatch => {
  dispatch({
    type: INCREMENT,
  });
};
