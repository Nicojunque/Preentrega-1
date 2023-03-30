import React from 'react'
import './CartWidget.css'

const CartWidget = () => {
    const imgCarrito = "https://th.bing.com/th/id/OIP.LfOVEHQ1p7QJ3F5a36pLeQHaD4?pid=ImgDet&rs=1"
    return (
    <div>
        <img className='imgCarrito' src ={imgCarrito} alt="Carrito"></img>
        <strong>3</strong>
    </div>
  )
}

export default CartWidget