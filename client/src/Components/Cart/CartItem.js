import React, { useContext } from 'react';
import { FaPlusCircle, FaMinusCircle, FaTrashAlt } from 'react-icons/fa'
import { CartContext } from '../../contexts/CartContext';


const CartItem = ({product}) => {

    const { increase, decrease, removeProduct } = useContext(CartContext);

    return ( 
        <div className="item">
            <div className="item-img">
                <img
                alt={product.name}
                style={{margin: "0 auto", maxHeight: "50px"}} 
                src={product.url_image}/>
            </div>
            <div className="item-text">
                <h5 className="mb-1">{product.name}</h5>
                <p className="mb-1">Price: {product.price}$ </p>
            </div>
            <div className="item-quantity ">
                 <p className="mb-0">Qty: {product.quantity}</p>
            </div>
            <div className="item-buttons">
                 <FaPlusCircle onClick={() => increase(product)} className="FaPlusCircle"/>
                 {
                     product.quantity > 1 &&
                     <FaMinusCircle onClick={() => decrease(product)} className="FaMinusCircle"/>
                 }

                {
                     product.quantity === 1 &&
                     <FaTrashAlt onClick={() => removeProduct(product)}/>
                 }
                 
            </div>
        </div>
     );
}
 
export default CartItem;