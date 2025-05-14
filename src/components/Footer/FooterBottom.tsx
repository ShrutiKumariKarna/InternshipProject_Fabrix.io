import React from 'react'
import Image from 'next/image'
import visaCard from "../../../public/assets/logos/Badge.png"
import masterCard from "../../../public/assets/logos/Badge (1).png"
import paypalCard from "../../../public/assets/logos/Badge (2).png"
import applePay from "../../../public/assets/logos/Badge (3).png"
import gpayCard from "../../../public/assets/logos/Badge (4).png"

const FooterBottom = () => {
  return (
    <div className='mx-5 lg:mx-24 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5'>
      <p className='text-textGray dark:text-white '>
        Fabrix.io © 2000-2025, All Rights Reserved
      </p>
      <div className='flex items-center gap-4'>
        <Image src={visaCard} alt="Visa Card" />
        <Image src={masterCard} alt="Master Card" />
        <Image src={paypalCard} alt="PayPal Card" />
        <Image src={applePay} alt="ApplePay Card" />
        <Image src={gpayCard} alt="GPay Card" />
      </div>
    </div>
  )
}

export default FooterBottom
