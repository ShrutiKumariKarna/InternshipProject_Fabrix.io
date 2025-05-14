import React from 'react'
import { Input } from '../UI/input'
import Image from 'next/image'
import searchIcon from "../../../public/assets/images/searchicon.svg"

const SearchBox = () => {
  return (
    <div className='flex justify-normal items-center relative'>
      <Image
        src={searchIcon}
        alt="SearchIcon"
        className='absolute left-4'
      />
      <Input type='text' placeholder='Search for the products...'/>
    </div>
  )
}

export default SearchBox