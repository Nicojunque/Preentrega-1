import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
const NavBar = () => {
  return (
    <header>
        <h1>Tienda IfixIt</h1>

        <nav>
            <ul>
                <li>Nuevos</li>
                <li>Usados</li>
                <li>Accesorios</li>
            </ul>

        </nav>

        <CartWidget/>

    </header>
  )
}

export default NavBar