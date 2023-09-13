import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Headre from './routes/Headre'
import Formulary from "./components/Formulary"
import Error404 from './routes/Error404'
const root =  createBrowserRouter([
  {
    path: '/',
    element: <Headre/>,
    children: [
      {
        path: 'Myformulario/:id?',
        element: <Formulary titulo={"sopas"}/>,
      }
    ],
    errorElement: <Error404/>,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={root}/>
  </React.StrictMode>,
)
