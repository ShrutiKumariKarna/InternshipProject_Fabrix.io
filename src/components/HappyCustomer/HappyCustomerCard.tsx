import React from 'react';
import { Card, CardContent, CardDescription, CardTitle } from "@/components/UI/card"; 
import StarRating from '../CommonElement/StarRating';
import Image from 'next/image';
import greenTick from "../../../public/assets/logos/greenTick.png";
import { HappyCustomerDataProps } from '@/staticData/AllStaticData';

const HappyCustomerCard: React.FC<HappyCustomerDataProps> = ({ title, rating, desc }) => {
  return (
    <Card className="w-full max-w-[420px] h-[220px] p-5 ">
      <CardContent className="flex flex-col gap-2">
        <StarRating rating={rating} />
        <CardTitle className="flex gap-2 items-center">
          <p className="text-primary dark:text-white  text-xl font-bold">{title}</p>
          <Image src={greenTick} alt="Verified Customer" width={20} height={20} />
        </CardTitle>
        <CardDescription>
          <p className="text-textGray dark:text-white  font-medium leading-6">{desc}</p>
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default HappyCustomerCard;
