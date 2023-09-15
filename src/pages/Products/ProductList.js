import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsList } from '../../actions/product';

const ProductList = () => {
  const dispatch = useDispatch();

  const list = useSelector(state => state.product.list);
  const loading = useSelector(state => state.product.loading);

  useEffect(() => {
    dispatch(getProductsList());
  }, [dispatch]);

  return (
    <div>
      ProductList
      {loading && <div>Loading .....</div>}
      {list.map((product, index) => (
        <div key={index}>{product.title}</div>
      ))}
    </div>
  );
};

export default ProductList;
