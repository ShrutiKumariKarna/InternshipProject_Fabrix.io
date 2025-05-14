"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import close from "../../../public/assets/images/close.svg";
import Link from 'next/link';
import ThemeToggle from '../Theme/themeToggle';

const TopBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="w-full h-10 sm:h-[38px] bg-primary flex justify-between items-center relative px-4 sm:px-6">
      <ThemeToggle/>
      <p className="text-white font-light sm:text-base tracking-wide text-center">
        Sign up and get 20% off your first order.{' '}
        <Link
          href="/signUp"
          className="text-white font-medium sm:text-base underline underline-offset-4 hover:scale-105 inline-block"
        >
          Sign Up Now
        </Link>
      </p>

      <button
        className="hidden sm:block  p-2"
        onClick={handleClose}
        aria-label="Close banner"
      >
        <Image
          src={close}
          alt="Close Icon"
          width={20}
          height={20}
          className="w-5 h-5 sm:w-[22px] sm:h-[22px]"
        />
      </button>
    </div>
  );
};

export default TopBanner;