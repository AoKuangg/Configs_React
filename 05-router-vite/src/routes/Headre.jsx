import React from 'react'
import { Link, Outlet } from "react-router-dom"

export default function Headre() {
  const nombre = "sapos"
  return (
    <>
        <ul>
            <li>
                <Link to={`/Myformulario`}>Formulario</Link>
            </li>
        </ul>
        <Outlet context={[nombre]}/>
    </>
  )
}
