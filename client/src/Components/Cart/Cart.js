import React, { useContext } from 'react'
import './Profile.css'
import { CartContext } from '../../contexts/CartContext';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import { useProduct } from '../../contexts/ProductsContext';

const Cart = () => {

    const { cartItems } = useContext(CartContext);
    const { toggleCartModal} = useProduct()

    return (
        <div className="content-profile background-blur center">
           <div className="profile-card center">
                <div className="cart-title">
                    <h1>Cart</h1>
                    <p>Este es el contenido de tu Cart</p>
                </div>
                    <div className="cart-items">
                        {cartItems.length  > 0 ? cartItems.map(product => <CartItem key={product.id} product={product}/>) : <div className="cart-empty">No hay productos en el Cart</div>}
                    </div>
                    <div className="center cart-footer">
                        <div className="">
                            <p>Procesar compra como:</p>
                        </div> 
                        <div style={{marginTop: '10px' }}>
                            <Link to="/payment" onClick={() => toggleCartModal(false)} className="cart-footer-btn">Usuario</Link>
                            <Link to="/payment"  onClick={() => toggleCartModal(false)} className="cart-footer-btn">Invitado</Link>

                           
                        </div>
                    </div>
            </div>

        </div>
    )
}

export default Cart
