import Image from 'next/image'
import React from 'react'
import Styles from '../styles/product.module.css'
import Link from 'next/link'

const Productdetails = ({product}) => {
    const {image, price, id, title, description} = product;
  return (
    <div className= {Styles.product}  key={id}>
      <Image src={image} height={300} width={300} alt='image'/>
      <ul> 
        <li>{title}</li>
        <li>{price} $</li>
        <li>{description}</li>
      </ul>
      <Link  legacyBehavior href={`/products/${id}`} >
        <a> more details</a>
      </Link>
    </div>
  )
}

export default Productdetails
