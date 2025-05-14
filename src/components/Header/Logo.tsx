import React from 'react'
import Link from 'next/link';

const Logo = () => {
  return (
    <div className='font-playfair font-bold text-3xl'>
      <Link href="/">
        FABRIX.IO
      </Link>
    </div>
  )
}

export default Logo