import React, { useEffect } from 'react'
import {useRouter} from 'next/router';

const Error404 = () => {
    const router = useRouter();
    useEffect( () => {setTimeout(() => {router.push("/")}, 3000)},[] )
  return (
    <div>
      <h1 style={{color:"red"}}>Page not found </h1>
    </div>
  )
}

export default Error404
