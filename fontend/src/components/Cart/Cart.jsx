import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import {CartContext} from '../../Contexts/CartContext'
import './Cart.css'


function Cart() {
    const {myCart, total, setTotal, addToCart} = useContext(CartContext)
    const navigate = useNavigate()
    const handlerCheckout = () => {
        setTotal(0)
        addToCart([{}])
    }
    const handlerHome = () => {
        navigate('/')
    }
    return (
        <div>
            <section className="cart-container">
                <div className="cart-header">CHECKOUT: </div>
                <div className="cart-items">
                    {myCart.slice(1).map((item, index) => {
                        return (
                        <div className="cart-item" key={index}>
                            <img src={item.img} alt='' className="cart-item-img"/>
                            {item.price}$ : {item.name}
                        </div>
                        )
                    })}
                    <div className="cart-total">TOTAL: {total}$</div>
                </div>
                <button className="cart-checkout" onClick={handlerCheckout}>DONE</button>
                <button className="cart-gohome" onClick={handlerHome}>RETURN HOME</button>
            </section>
        </div>
    )
}
export default Cart
