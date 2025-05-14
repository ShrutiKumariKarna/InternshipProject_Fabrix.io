'use client';
import React, { useEffect, useState } from 'react';
import { Button } from '../UI/button';
import Link from 'next/link';
import ProductList from '../CommonElement/ProductList';
import { TopSellingsDataProps } from '@/staticData/AllStaticData';

type DummyJsonProduct = {
  id: number;
  title: string;
  price: number;
  rating: number;
  discountPercentage: number;
  thumbnail: string;
};

const TopSellings = () => {
  const [products, setProducts] = useState<TopSellingsDataProps[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('https://dummyjson.com/products/category/tops');
      const data = await res.json();

      const transformed = data.products.slice(0,4).map((item: DummyJsonProduct) => ({
        id: item.id,
        img: item.thumbnail,
        name: item.title,
        rating: item.rating,
        price: item.price,
        originalPrice: Math.round(item.price / (1 - item.discountPercentage / 100)),
        discount: `-${Math.round(item.discountPercentage)}%`
      }));

      setProducts(transformed);
    };

    fetchProducts();
  }, []);


  return (
    <div className="mx-4 sm:mx-10 lg:mx-24 my-16 flex flex-col justify-center items-center">
      <h1 className="text-5xl text-primary dark:text-white  font-black mb-6 text-center">
        Top Sellings
      </h1>

      {/* Product Cards */}
      <ProductList products={products} />

      {/* View All Button */}
      <Link href="/arrivals" className="mt-7 w-full sm:w-auto flex justify-center">
        <Button
          variant={'outline'}
          className="w-full sm:w-[190px] h-[40px] text-textGray dark:text-white  rounded-full"
        >
          View All
        </Button>
      </Link>
    </div>
  );
};

export default TopSellings;
