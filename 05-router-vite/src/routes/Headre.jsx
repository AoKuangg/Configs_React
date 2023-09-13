import React from 'react'
import { Link, Outlet } from "react-router-dom"

export default function Headre() {
  return (
    <>
        <ul>
            <li>
                <Link to={`/Myformulario`}>Formulario</Link>
            </li>
        </ul>
    </>
  )
}
