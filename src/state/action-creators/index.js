export const Add = amount => {
  return dispatch => {
    dispatch({
      type: 'deposit',
      payload: amount,
    });
  };
};

export const Remove = amount => {
  return dispatch => {
    dispatch({
      type: 'withdraw',
      payload: amount,
    });
  };
};
