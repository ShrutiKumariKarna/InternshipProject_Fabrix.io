"use client"

import React, { useState } from 'react'
// import Image from 'next/image'
import Link from 'next/link'
// import authIcon from "../../../public/assets/images/authIcon.svg"
import { CircleUserRound } from 'lucide-react';
import { Popover, PopoverTrigger, PopoverContent } from "@/components/UI/popover"
import { Button } from '../UI/button'

const AuthComponent = () => {
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <CircleUserRound className='cursor-pointer' />
        {/* <Image
          src={authIcon}
          alt="User Icon"
          className='cursor-pointer'
        /> */}
      </PopoverTrigger>
      <PopoverContent className="bg-primary border border-gray-700 rounded-md p-8 text-white max-w-[300px]">
        <Button asChild variant={'outline'} className="w-full h-12 rounded-full mt-2 mb-4 hover:bg-white hover:text-black transition">
          <Link href="/signIn" onClick={handleClose}>Sign In</Link>
        </Button>

        <hr />

        <p className="text-sm text-center mt-2">
          Don&apos;t have an account?{" "}
          <Link href="/signUp" className="underline cursor-pointer underline-offset-4" onClick={handleClose}>Sign Up</Link>
        </p>
      </PopoverContent>
    </Popover>
  )
}

export default AuthComponent
