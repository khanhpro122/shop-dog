import React, { useContext, useState } from 'react'
import './dogs.css'
import {CartContext} from '../../Contexts/CartContext'

export default function DogsCard(props) {
    let { id, name, breed, description, price, img } = props
    const {addToCart, setTotal} = useContext(CartContext)
    const [isAdded, setAdded] = useState(false)
    const handlerClick = () => {
        setAdded(true)
        const newItems = {
            name: name,
            price: price,
            img: img
        }
        addToCart((item) => [...item, newItems])
        setTotal((total) => total += Number(price))
    }
    return (
        <>
            <section className="dogs">
                <div className="dogs-info">
                    <p>{breed}</p>
                    <p>{name}</p>
                </div>
                <div className="dogs-img-container">
                    <img src={img} alt={`pictureof ${name}`} className="dog-img" />
                </div>
                <div className="dog-desc">{description}</div>
                <div className="dog-price">{price}$</div>
                {isAdded ? (
                    <button className="dogs-btn-disabled" onClick={handlerClick}>ADDED</button>

                ) : (
                    <button className="dogs-btn" onClick={handlerClick}>ADD TO CART</button>
                    )}      
            </section>
        </>
    )
}
