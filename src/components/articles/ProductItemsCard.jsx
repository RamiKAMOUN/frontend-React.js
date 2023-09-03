import React from 'react'
import ItemCard from './ItemCard'

const ProductItemsCard = ({products}) => {
  return (
    <div className='container'>
      <div style={{"display":"flex", "flexWrap":"wrap","justifyContent":"left"}}>
        {products.map((pr,index)=>(<ItemCard pr={pr}/>))}
      </div>
    </div>
  )
}

export default ProductItemsCard
