import React from 'react'
import { Button } from '../UI/button'
import Link from 'next/link'
import Image from 'next/image'
import { StatisticsData } from '@/staticData/AllStaticData'
import plusIcon from "../../../public/assets/images/plusIcon.svg"
import modelImg from "../../../public/assets/logos/modeIcon.png"

const HeroSectionHeader = () => {
  return (
    <div className='flex flex-col lg:flex-row lg:mx-24 overflow-hidden'>
       
      {/* left div */}
      <div className='max-w-[750px] my-auto flex flex-col gap-8 items-center lg:items-start text-center lg:text-left '>
        <h1 className='text-5xl text-primary font-black max-w-[600px]'>
          FIND CLOTHES THAT MATCHES YOUR STYLE...
        </h1>

        <p className='font-light text-textGray max-w-[500px]'>
          Explore our curated collection of crafted apparel, designed to showcase your uniqueness and elevate your style.
        </p>

        <div>
          <Button className='w-[280px] h-[45px] rounded-full' variant="default">
            <Link href="#" className='p-5 text-white'>Shop Now</Link>
          </Button>
        </div>

        <div className='flex items-center p-2 flex-wrap lg:flex-nowrap justify-center lg:justify-start gap-3 '>
          {
            StatisticsData && StatisticsData.map((statItem, index) => (
              <React.Fragment key={statItem.id}>
                <div className='w-full flex flex-col items-center text-center '>
                  <div className='flex items-center'>
                    <h1 className='text-5xl font-extrabold dark:text-black '>{statItem.value}</h1>
                    <Image
                      src={plusIcon}
                      alt='Plus Icon'
                      className='mt-[15px]'
                      width={28}
                      height={28}
                    />
                  </div>
                  <p className='text-textGray font-light'>{statItem.label}</p>
                </div>

                {index < StatisticsData.length - 1 && (
                  <div className='hidden lg:block mx-5 w-[2px] h-[80px] bg-[#0000001A]'></div>
                )}
              </React.Fragment>
            ))
          }
        </div>
      </div>

      {/* right image */}
      <div className='flex justify-center lg:mb-0 '>
        <Image 
          src={modelImg} 
          alt="Image of Models" 
          className='' 
        />
      </div>
    </div>
  )
}

export default HeroSectionHeader;
