import React from "react";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Payment from "./Components/Payment/Payment";
import DashBoard from './Components/DashBoard/DashBoard'
import ProductsContextProvider from './contexts/ProductsContext';
import CartContextProvider from './contexts/CartContext';
import './App.css'
const App = () => {  
  
  return (
    <Router>
      <div className="app">
      <ProductsContextProvider>
        <CartContextProvider>
            <Switch>
              <Route exact path="/" component={DashBoard} />
              <Route path="/payment" component={Payment} />
              {/* <Route path="*" component={NotFound} /> */}
            </Switch>
        </CartContextProvider>
      </ProductsContextProvider>
      </div>
    </Router>
  );
}

export default App;