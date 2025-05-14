import React from 'react'
// import Image from 'next/image'
// import cart from "../../../public/assets/images/cartIcon.svg"
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link'


const Cart = () => {
  return (
    <div>
      <Link href='/cart'>
        <ShoppingCart/>
      </Link>
    </div>
  )
}

export default Cart