import React, { useEffect } from 'react';
import './Categories.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMenuList } from './actions/header';
import { useDispatch } from 'react-redux';

function Categorycomponent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const routes = useSelector(state => state.header.routes);

  useEffect(() => {
    dispatch(getMenuList());
  }, [dispatch]);

  const onClick = routes => {
    navigate(routes.to);
  };

  const categoriList = routes.map((routes, i) => (
    <div>
      <div className="categorysubclass" onClick={() => onClick(routes)}>
        <div id="categoryimg">
          <img src={routes.src} style={{ width: 65 }} />
        </div>
        <div id="categorytext">{routes.title}</div>
      </div>
    </div>
  ));

  return <div className="cateGoriesclass">{categoriList}</div>;
}

export default Categorycomponent;
