import React from 'react'
import HeroSectionHeader from './HeroSectionHeader'
import HeroSectionFooter from './HeroSectionFooter'

const HeroSection = () => {
  return (
    <div className=' w-full bg-[#F2F0F1] mx-auto items-center flex flex-col'>
        <HeroSectionHeader/>
        <HeroSectionFooter/>
    </div>
  )
}

export default HeroSection