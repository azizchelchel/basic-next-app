import Image from 'next/image'
import React from 'react'
import Styles from '../styles/product.module.css'
import Link from 'next/link'

const Product = ({product}) => {
    const {image, price, id, title} = product;
  return (
    <div className= {Styles.product}  key={id}>
      <Image src={image} height={200} width={200} alt='image'/>
      <ul> 
        <li>{title}</li>
        <li>{price} $</li>
      </ul>
      <Link  legacyBehavior href={`/products/${id}`} >
        <a> more details</a>
      </Link>
    </div>
  )
}

export default Product
