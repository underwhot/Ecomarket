import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import App from './App.jsx';
import { Root } from './routes/Root.jsx';
import { ErrorPage } from './routes/ErrorPage.jsx';
import { Home } from './routes/Home.jsx';
import { About } from './routes/About.jsx';
import { Contacts } from './routes/Contacts.jsx';
import { Blog } from './routes/Blog.jsx';
import { Shop } from './routes/Shop.jsx';
import { Product } from './routes/Product.jsx';
import { Cart } from './routes/Cart.jsx';
import { Favourites } from './routes/Favourites.jsx';
import { Categories } from './routes/Categories.jsx';

import './null.css';
import './index.scss';

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'shop',
        element: <Shop />,
      },
      {
        path: 'shop/search',
        element: <Shop />,
      },
      {
        path: 'shop/categories/:category',
        element: <Shop />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'favourites',
        element: <Favourites />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contacts',
        element: <Contacts />,
      },
      {
        path: 'blog',
        element: <Blog />,
      },
      {
        path: 'shop/product',
        element: <Product />,
      },
      {
        path: 'shop/categories',
        element: <Categories />,
      },
      {
        path: 'shop/:id',
        element: <Product />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
