import React from 'react';
import { Input } from '../UI/input';
import { Button } from '../UI/button';
import Link from 'next/link';
import Image from 'next/image';
import NewsLetterIcon from "../../../public/assets/images/gmailIcon.svg";

const NewsLetterSection = () => {
  return (
    <div className="bg-primary mx-4 md:mx-12 lg:mx-24 p-6 md:p-10 lg:p-12 flex flex-col lg:flex-row justify-between items-center gap-6 rounded-3xl relative z-10 -mb-28">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-secondary text-center lg:text-left max-w-[600px]">
        STAY UPTO DATE ABOUT OUR LATEST OFFERS
      </h1>

      <div className="flex flex-col gap-4 w-full max-w-[400px]">
        <div className="relative w-full">
          <Image
            src={NewsLetterIcon}
            alt="Mail Icon"
            className="absolute left-4 top-1/2 -translate-y-1/2"
          />
          <Input
            type="text"
            placeholder="Enter your email address"
            className="w-full h-[50px] pl-12"
          />
        </div>

        <Link href="#">
          <Button
            variant="destructive"
            className="rounded-full w-full h-[50px] bg-secondary text-black font-semibold"
          >
            Subscribe to Newsletter
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NewsLetterSection;
