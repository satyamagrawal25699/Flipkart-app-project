export const GET_MENU_LIST_LOADING = '@@header/GET_MENU_LIST_LOADING';
export const GET_MENU_LIST_SUCCESS = '@@header/GET_MENU_LIST_SUCCESS';
export const GET_MENU_LIST_FAILURE = '@@header/GET_MENU_LIST_FAILURE';

export const getMenuList = () => async dispatch => {
  try {
    dispatch({
      type: GET_MENU_LIST_LOADING,
    });

    // we will call api here once available.
    // We are using array here for now.

    const routes = [
      {
        src: 'https://rukminim1.flixcart.com/fk-p-flap/128/128/image/178cf5a874cd697a.png?q=100',
        title: 'Top offers',
        to: '/Products',
      },

      {
        src: 'https://rukminim1.flixcart.com/fk-p-flap/128/128/image/e2268d56d09df684.png?q=100',
        title: 'Mobile & Tablets',
        to: '/Products',
      },

      {
        src: 'https://rukminim1.flixcart.com/fk-p-flap/128/128/image/6e3e1efa83bc56c3.png?q=100',
        title: 'Electronics',
        to: '/Products',
      },

      {
        src: 'https://rukminim1.flixcart.com/fk-p-flap/128/128/image/b3e1225e6bda1c9e.png?q=100',
        title: 'TVs & Appliances',
        to: '/Products',
      },
      {
        src: 'https://rukminim1.flixcart.com/fk-p-flap/128/128/image/a11d5d13e54bf964.png?q=100',
        title: 'Fashion',
        to: '/Products',
      },

      {
        src: 'https://rukminim1.flixcart.com/fk-p-flap/128/128/image/5f09b2d254acb48a.png?q=100',
        title: 'Beauty',
        to: '/Products',
      },

      {
        src: 'https://rukminim1.flixcart.com/fk-p-flap/128/128/image/5972d5da375c81c7.png?q=100',
        title: 'Home & Kitchen',
        to: '/Products',
      },

      {
        src: 'https://rukminim1.flixcart.com/fk-p-flap/128/128/image/1cfc2d91f717510a.png?q=100',
        title: 'Flights',
        to: '/Products',
      },

      {
        src: 'https://rukminim1.flixcart.com/fk-p-flap/128/128/image/d154c0b4d536c1cf.png?q=100',
        title: 'Grocery',
        to: '/Products',
      },
    ];

    dispatch({
      type: GET_MENU_LIST_SUCCESS,
      payload: routes,
    });
  } catch (err) {
    dispatch({
      type: GET_MENU_LIST_FAILURE,
    });
  }
};
