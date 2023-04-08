import React from 'react'
import Product from '@/components/Product.js';

export const getStaticProps = async () => {
const data = await fetch("https://fakestoreapi.com/products");
const products = await data.json();
  return {
    props: {
      products
    }
  }
}
const index = ({products}) => {
  return (
    <main className='container' >
      <div  className='main'>
      {products.map( product => ( <Product key={product.id} product={product} /> ))}
      </div>
    </main>
  )
}
export default index;
