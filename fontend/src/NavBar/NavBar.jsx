import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

export default function NavBar() {
    return (
        <div>
            <nav className="navbar">
                <Link to ="/">Home</Link>
                <Link to ="/dog">Dogs</Link>
                <Link to ="/cart">My Cart</Link>

            </nav>
        </div>
    )
}
