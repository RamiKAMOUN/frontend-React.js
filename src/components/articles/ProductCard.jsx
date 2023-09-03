import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductItemsCard from './ProductItemsCard'

const ProductCard = () => {

  const [products,setProducts]=useState([]);
  
  useEffect(()=>{
  getProduct()
  },[]);

  const getProduct=()=>{
  axios.get("http://localhost:5000/api/articles")
  .then(res=>setProducts(res.data))
  .catch(error=>console.log(error))
  }
  return (
    <div>
      <ProductItemsCard products={products}/>
    </div>
  )
}

export default ProductCard


