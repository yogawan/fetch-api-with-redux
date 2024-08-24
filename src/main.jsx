import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/main.scss';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import App from './components/utilities/App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);