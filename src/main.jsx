import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout'
import ListPage from './productList/listpage'
import { element } from 'prop-types'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />
  },
  {
    path: '/transport',
    element: <ListPage />
  },
  {
    path: '/couriers',
    element: <ListPage />
  },
  {
    path: '/hospitals',
    element: <ListPage />
  },
  {
    path: '/hotel',
    element: <ListPage />
  },
  {
    path: '/movers',
    element: <ListPage />
  },
  {
    path: '/rentals',
    element: <ListPage />
  },
  {
    path: '/travels',
    element: <ListPage />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
