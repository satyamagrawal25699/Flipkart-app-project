import { combineReducers } from 'redux';
import counter from './counter';
import product from './product';
import header from './header';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  counter,
  product,
  header,
  cartReducer,
});

export default rootReducer;
