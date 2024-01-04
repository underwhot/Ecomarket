import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './App.jsx';
import { Root } from './routes/Root.jsx';
import { ErrorPage } from './components/ErrorPage/ErrorPage.jsx';
import { Home } from './routes/Home.jsx';
import { About } from './routes/About.jsx';
import { Contacts } from './routes/Contacts.jsx';
import { Blog } from './routes/Blog.jsx';
import { Shop } from './routes/Shop.jsx';
import { Product } from './routes/Product.jsx';

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
        path: 'shop/product',
        element: <Product />,
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
