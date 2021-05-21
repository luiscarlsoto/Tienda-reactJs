import React, {useState, useEffect} from 'react'
import axios from 'axios'

const ProductsContext = React.createContext()

const ProductProvider = (props) => {
    const [loading, setLoading] = useState(false)
    const [productList, setProductList] = useState(null);
    const [cartIsOpen, toggleCart] = useState(false)
// eslint-disable-next-line
      useEffect(() => {
        const getProductList = async (search="", category="") =>{
            let config = {
              search,
              category
            }
            try {
                setLoading(true)
                let {data} = await axios.post(`http://localhost:5000/product`,config)
                setProductList(data.response)
            } catch (error) {
                console.error(error)
                return error.response
            }
            finally{
                console.log('finally')
                setLoading(false);
            }
          }    
          getProductList()
      }, []);

      const toggleCartModal = () =>{
        toggleCart(!cartIsOpen)
        document.body.style.overflowY = cartIsOpen ? 'overlay': 'hidden'
      }

      const contextValues = {
        productList,
        loading,
        toggleCartModal,
        cartIsOpen
    } 
      return <ProductsContext.Provider value={contextValues} {...props} />
    }

    export const useProduct = () =>{
        const context = React.useContext(ProductsContext)
        if(!context) {
            throw new Error('useProducto no está dentro del proveedor')
        } 
        return context;
    }

export default ProductProvider;
