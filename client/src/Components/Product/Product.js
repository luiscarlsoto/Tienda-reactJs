import React, { useContext } from 'react'
import './Product.css'
import { FaCartPlus } from 'react-icons/fa';
import { CartContext } from '../../contexts/CartContext';
const Post = (product) => {
    const { addProduct, cartItems, increase } = useContext(CartContext);
    const priceDiscountDiv = (<>
            <div className="oldPrice price">{product.price}$</div>
            <div className="newPrice price">{product.price-((product.price*product.discount)/100)}$</div></>)
    const isInCart = product => {
        return !!cartItems.find(item => item.id === product.id);
    }
    return (
        <div className="post">
                <div className="post-img">
                    {product.discount > 0 ? <div className="discount">{'-'+product.discount+'%'}</div> : ""}
                    <img  alt={product.id} src={product.url_image || "https://lh3.googleusercontent.com/proxy/COMUiFKuewzFk5o3vQ3hdl2MrvBlwC1ztuzF96vBLBVI0EzBRc4q26z4TmAenDYojrH1M-lTjXsM98tpJlgSqdNibSjTCDkXfkm3-Vpz94gECUaX"}/>
                </div>
                <div className="post-info">
                    <div className="post-text">
                        <div className="title">{product.name}</div>
                        <div className="post-botton">
                            { isInCart(product) && <FaCartPlus  onClick={() => increase(product)} className="addCart-button"/>}
                            { !isInCart(product) && <FaCartPlus  onClick={() => addProduct(product)} className="addCart-button"/>}
                            <div>
                                { product.discount > 0 ? priceDiscountDiv : <div className="newPrice price"><br/>{product.price}$</div>}
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Post
