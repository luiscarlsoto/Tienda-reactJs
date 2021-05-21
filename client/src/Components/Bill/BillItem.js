import React from 'react';


const BillItem = ({product}) => {
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
        </div>
     );
}
 
export default BillItem;