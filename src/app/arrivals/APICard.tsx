'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardTitle } from '@/components/UI/card';
import StarRating from '../../components/CommonElement/StarRating'; 

type APICardProps = {
  id: number;
  name: string;
  img: string;
  rating: number;
  price: number;
  originalPrice?: number;
  discount?: string;
};

const APICard = ({ id, name, img, rating, price, originalPrice, discount }: APICardProps) => {
  return (
    <Card className="w-[300px] h-[475px] bg-transparent border shadow-sm p-1 overflow-hidden">
      <CardContent className="flex flex-col items-center">
        <div className="relative w-[300px] h-[300px] -mt-2">
          <Image
            src={img}
            alt={name}
            layout="fill"
            className="rounded-2xl object-cover bg-secondary"
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <CardTitle className="text-xl font-black text-primary dark:text-white mb-2">
          <Link href={`/product/${id}`}>{name}</Link>
        </CardTitle>
        <StarRating rating={rating} />
        <div className="flex items-center gap-2">
          <p className="text-lg font-bold text-primary dark:text-white">${price}</p>
          {originalPrice && (
            <>
              <p className="text-base font-semibold text-textGray dark:text-white line-through">
                ${originalPrice}
              </p>
              <span className="text-sm text-textGray dark:text-white bg-red-400 rounded-full px-4 py-1">
                {discount}
              </span>
            </>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default APICard;
