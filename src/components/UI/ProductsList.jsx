import React from 'react'

import ProductCard from './ProductCard'

const ProductsList = ({data}) => {
  return (
    
    <div className='product_cards_wrapper_home'>
      {
        data?.map(item => (
          <ProductCard  item={item} />
        ))
      }
    </div>
  )
}

export default ProductsList