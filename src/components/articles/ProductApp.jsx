import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductList from './ProductList'

const ProductApp = () => {
  const [products,setProduct]=useState([])
  useEffect(()=>{
    getProduct()
  },[])
  const getProduct=()=>{
  axios.get("http://localhost:5000/api/articles")
  .then(res=>setProduct(res.data))
  .catch(error=>console.log(error))}

   const addProduct=(newProduct)=>{
    setProduct([...products,newProduct])
   }

   const deleteProduct=(productId)=>{
    setProduct(products.filter((product)=>product.id!==productId))
   }

   const updateProduct=(updateProduct)=>{
    setProduct(products.map((products)=>products.id===updateProduct.id?updateProduct:products))
   }


  return (
    <div>
      <ProductList products={products}
      deleteProduct={deleteProduct}/>
    </div>
  )
}

export default ProductApp
