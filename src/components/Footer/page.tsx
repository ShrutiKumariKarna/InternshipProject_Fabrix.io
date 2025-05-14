import React from 'react'
import FooterMain from './FooterMain'
import FooterBottom from './FooterBottom'

const Footer = () => {
  return (
    <div className='w-full h-auto bg-secondary relative'>
      <div className='absolute top-36 w-full'>
        <FooterMain />
        <hr className='mt-9 mb-7 border-t-2 border-gray-200 mx-5 lg:mx-24' />
        <FooterBottom />
      </div>
    </div>
  )
}

export default Footer
