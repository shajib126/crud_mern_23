import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { readProduct } from '../actions/product'
import './HomePage.css'

const HomePage = () => {
  const dispatch = useDispatch()
  const {loading,products,error} = useSelector((state)=>state.product)
  useEffect(()=>{
    
      dispatch(readProduct()).then(()=>{
        console.log(products);
      })
    
  },[dispatch])
  
  return (
    <div className="homepage">
       {products?products?.map((item,i)=>(
        <div key={i} className="itemCard">
          <img src={item.image} alt="" />
          <h3>{item.productName}</h3>
          <h4>৳{item.totalPrice}</h4>
        </div>
       )):<h1>Loading..</h1>}
    </div>
  )
}

export default HomePage