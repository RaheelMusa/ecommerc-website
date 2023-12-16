'use client'
import React, { useState } from 'react'
import ProductList from '../../components/ProductList'

const Product = () => {
  return (
    <div className='my-10'>
      {/* <div className='float-left fixed'>
      <Category />
      </div>  */}
     <div>
    

      <ProductList />

     
      </div> 
{/*       
      <Link to='/products/1'>View Product 1</Link> */}
    </div>
  )
}

export default Product
