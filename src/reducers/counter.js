import { DECREMENT, INCREMENT } from '../actions/counter';

const initialState = {
  count: 0,
};

export default function (state = initialState, action) {
  const { type } = action;
  switch (type) {
    case DECREMENT: {
      return {
        ...state,
        count: state.count - 1,
      };
    }

    case INCREMENT: {
      return {
        ...state,
        count: state.count + 1,
      };
    }

    default:
      return state;
  }
}
