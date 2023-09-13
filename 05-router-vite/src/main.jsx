import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Headre from './routes/Headre'

const root =  createBrowserRouter([
  {
    path: '/',
    element: <Headre/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={root}/>
  </React.StrictMode>,
)
