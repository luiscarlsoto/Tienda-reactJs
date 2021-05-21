import React, { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext';
import BillItem from './BillItem';
import { Link } from 'react-router-dom';
import './Bill.css'
const Bill = () => {

    const { total, cartItems, itemCount, clearCart } = useContext(CartContext);
    const processBill = () =>{
        clearCart()

    }
    return (
        <div className="content-profile background-blur center">
           <div className="profile-card center">
                <div className="cart-title">
                    <h1>Factura</h1>
                </div>
                    <div className="bill-items">
                        {cartItems.length  > 0 ? cartItems.map(product => <BillItem key={product.id} product={product}/>) : <div className="cart-empty">No hay productos en el Cart</div>}
                    </div>
                    <div className="Total">
                            <label>Unidades totales: {itemCount}</label>
                            <label>Costo total: {total}$</label>
                        </div>

                    <div className="center bill-footer">
                        <div style={{marginTop: '10px' }}>
                            <Link to="/" onClick={() => processBill()}className="cart-footer-btn">Pagar</Link>

                        </div>
                    </div>
            </div>

        </div>
    )
}

export default Bill
