import React, {useContext} from 'react'
import './NavBar.css'
import { CartContext } from '../../contexts/CartContext';
import {FaShoppingCart} from 'react-icons/fa'
import { useProduct } from '../../contexts/ProductsContext';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const {itemCount} = useContext(CartContext);
    const { toggleCartModal } = useProduct()

    return (
            <div className="navbar">
                <Link to="/"> <h2>Store</h2></Link>
                <div onClick={toggleCartModal} className="cart-button"><FaShoppingCart/>Cart({itemCount})</div>
            </div>
    )
}

export default NavBar
