import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/scss/main.scss'
import { RouterProvider } from 'react-router-dom'
import MyRoute from './Routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={MyRoute} />
  </React.StrictMode>
)
