import { Spinner } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { readProduct } from '../../actions/product'
import ProductList from '../../pages/ProductList/ProductList'
const Products = () => {
    const dispatch = useDispatch()
    const {error,loading,products} = useSelector((state)=>state.product)
    
    useEffect(()=>{
       dispatch(readProduct())
       
       console.log("Products", products);
    },[dispatch])
   
  return (
    <div>
      <h1 style={{textAlign:"center"}}>Product Lists</h1>
        {loading ? <Spinner/>:<ProductList products={products} />}
    </div>
  )
}

export default Products