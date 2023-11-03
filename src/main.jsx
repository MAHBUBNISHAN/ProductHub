import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main/Main.jsx';
import Home from './Pages/Home/Home.jsx';
import About from './Pages/About/About.jsx';
import Navbar from './Pages/Navbar/Navbar.jsx';
import Blog from './Pages/Blog/Blog.jsx';
import AllProduct from './Pages/AllProduct/AllProduct.jsx';

const router = createBrowserRouter([
  {
    path: "/",
      element:<Main></Main> ,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/login',
          element:<About></About>
        },
        {
          path:'/register',
          element:<Navbar></Navbar>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'/all',
          element:<AllProduct></AllProduct>
        }
      ]
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
