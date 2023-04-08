import React from 'react'
import Productdetails from '@/components/Productdetails'
export const getStaticProps= async (context) => {
    const id = context.params.id;
    const data = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product = await data.json();
    return{
        props:  {product : product}
    }
}
export const getStaticPaths = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const jsonData = await data.json();
    console.log(jsonData)
    const paths = jsonData.map( product => ({ params: { id: product.id.toString() } }) );
    return{
            paths,
            fallback: false
    }

}
const singleProduct = ({product}) => {
  return (
    <div>
      <Productdetails key={product.id} product={product}/>
    </div>
  )
}

export default singleProduct;

