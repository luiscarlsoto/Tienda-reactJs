import React from 'react'
import Product from '../Product/Product'
import {Loading} from '../../assets/spinner'
import { useProduct } from '../../contexts/ProductsContext';
import NavBar from '../NavBar/NavBar'
import Cart from '../Cart/Cart'

import './DashBoard.css'
const DashBoard = () => {
    const { productList, loading, cartIsOpen} = useProduct()
    
    return (
        <div className="dashboard">
            <NavBar/>
            <div className="container">
              {loading && <Loading/> }
              {cartIsOpen ? <Cart/> : null}
              {productList && productList.map(product =>(<Product key={product.id} {...product}/>))}
            </div>
        </div>
)}

export default DashBoard
