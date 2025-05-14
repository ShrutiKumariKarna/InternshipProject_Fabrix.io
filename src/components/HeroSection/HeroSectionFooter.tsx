import React from 'react'
import Image from 'next/image'
import versace from "../../../public/assets/logos/versace-logo.png"
import zara from "../../../public/assets/logos/zara-logo.png"
import gucci from "../../../public/assets/logos/gucci-logo.png"
import parada from "../../../public/assets/logos/prada-logo.png"
import calvinklein from "../../../public/assets/logos/calvin-klein-logo.png" 

const HeroSectionFooter = () => {
  return (
    <div className='bg-primary h-auto flex justify-center w-full py-5'>
        <div className='mx-24 w-full flex  flex-wrap justify-center gap-y-4 gap-x-8 sm:justify-between'>
            <Image
                src={versace}
                alt="Versace Logo"
            />

            <Image
                src={zara}
                alt="Zara Logo"
            />

            <Image
                src={gucci}
                alt="Gucci Logo"
            />

            <Image
                src={parada}
                alt="Parada Logo"
            />

            <Image
                src={calvinklein}
                alt="Calvin Klein Logo"
            />
        </div>
    </div>
  )
}

export default HeroSectionFooter