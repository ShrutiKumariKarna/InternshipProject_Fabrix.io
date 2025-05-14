import React from 'react'
// import filterIcon from "../../../public/assets/logos/filterIcon.png"
// import arrow from "../../../public/assets/images/expandarrowIcon.svg"
// import upArrow from "../../../public/assets/images/upwardExpandableIcon.svg"
// import Image from 'next/image'
import { SlidersHorizontal } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import { ChevronUp } from 'lucide-react';
import { Button } from '@/components/UI/button'

const FilterSection = () => {
    const Dress = ["T-Shirt", "Shorts", "Shirts", "Hoodie", "Jeans"];
    const DressStyle = ["Casual", "Formal", "Party", "Gym"];
  return (
    <div className='border-2 rounded-lg w-[350px] p-4'>
            {/* Heading with filter icon */}
            <div className='flex justify-between items-center'>
                <h2 className='text-xl font-semibold text-primary dark:text-white'>Filter</h2>
                {/* <Image src={filterIcon} alt="Filter Icon"/> */}
                <SlidersHorizontal/>
            </div>

            <hr className='my-5'/>

            {/* Dress Section */}
            <div className='space-y-4'>
                {
                    Dress.map((element)=>(
                        <div key={element} className='flex justify-between'>
                            <p className='text-textGray dark:text-white'>{element}</p>
                            {/* <Image src={arrow} alt="Expandable Arrow"/> */}
                            <ChevronRight/>
                        </div>
                    ))
                }
            </div>

            <hr className='my-5'/>

            {/* Range Section */}
            <div className='space-y-2'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-xl font-semibold text-primary dark:text-white'>Price</h2>
                    {/* <Image src={upArrow} alt="Filter Icon"/> */}
                    <ChevronUp/>
                </div>

                <div className="relative h-10">
                    {/* Gray Line */}
                    <div className="absolute top-1/2 left-0 right-0 h-2 bg-secondary rounded-full -translate-y-1/2" />

                    {/* Black active range */}
                    <div className="absolute top-1/2 left-[20%] right-[20%] h-2 bg-primary dark:bg-white  rounded-full -translate-y-1/2" />

                    {/* Left black circle */}
                    <div className="absolute top-1/2 left-[20%] w-5 h-5 bg-primary dark:bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />

                    {/* Right black circle */}
                    <div className="absolute top-1/2 right-[20%] w-5 h-5 bg-primary dark:bg-white rounded-full translate-x-1/2 -translate-y-1/2" />

                    <div className="absolute top-7 left-[20%] text-base text-primary dark:text-white -translate-x-1/2">
                    $50
                    </div>

                    <div className="absolute top-7 right-[20%] text-base text-primary dark:text-white translate-x-1/2">
                    $200
                    </div>
                 </div>
                
            </div>

            <hr className='mb-5 mt-8'/>

            {/* Color Section */}
            <div className='space-y-2'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-xl font-semibold text-primary dark:text-white'>Color</h2>
                    {/* <Image src={upArrow} alt="Filter Icon"/> */}
                    <ChevronUp/>
                </div>
                <div className='grid grid-cols-4 gap-3'>
                    {
                        ['bg-red-500', 'bg-yellow-400', 'bg-green-500', 'bg-blue-500', 'bg-pink-500', 'bg-purple-600','bg-orange-400','bg-teal-500'].map(
                            (color,idx)=>(
                                <div key={idx} className={`w-10 h-10 rounded-full border ${color} cursor-pointer`} />
                            )
                        )
                    }
                </div>
                
            </div>

            <hr className='my-5'/>

            {/* Size Section */}
            <div className='space-y-2'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-xl font-semibold text-primary dark:text-white'>Size</h2>
                    {/* <Image src={upArrow} alt="Filter Icon"/> */}
                    <ChevronUp/>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    {
                        ['XX-Small','X-small','Small','Medium','Large','X-Large','XX-Large','3X-Large','4X-Large'].map((text,indx)=>(
                            <Button variant="outline" className='rounded-full bg-secondary dark:bg-black hover:bg-primary hover:text-white' key={indx}>{text}</Button> 
                        ))
                    }
                    
                </div>
                
            </div>

            <hr className='mt-8 mb-5'/>

            {/* Dress STyle */}
            <div className='space-y-5'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-xl font-semibold text-primary dark:text-white'>Dress Style</h2>
                    {/* <Image src={upArrow} alt="Filter Icon"/> */}
                    <ChevronUp/>
                </div>
                
                <div className='space-y-4'>
                {
                    DressStyle.map((element)=>(
                        <div key={element} className='flex justify-between'>
                            <p className='text-textGray dark:text-white'>{element}</p>
                            {/* <Image src={arrow} alt="Expandable Arrow"/> */}
                            <ChevronRight/>
                        </div>
                    ))
                }
            </div>
                
            </div>

            <Button className='w-full h-11 rounded-full mt-10 text-white font-light text-lg'>Apply Filter</Button>
        </div>
  )
}

export default FilterSection