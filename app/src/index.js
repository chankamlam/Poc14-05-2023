import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LoginPage from './page/LoginPage';
import RegisterPage from './page/RegisterPage';
import MainPanel from './page/MainPage';
import reportWebVitals from './reportWebVitals';
import Store from "./store/Store"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const store = new Store();
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage store={store.user.listModel}/>,
  },
  {
    path: "/user",
    // element: <MainPanel store={store.user.listModel}/>,
    children: [
      {
        path: "/user/list",
        element: <MainPanel store={store.user.listModel}/>,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
