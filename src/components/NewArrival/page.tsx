// With Static data 
// import React from 'react';
// import { Button } from '../UI/button';
// import Link from 'next/link';
// import ProductList from '../CommonElement/ProductList';
// import { NewArrivalSData } from '@/staticData/AllStaticData';

// const NewArrival = () => {
//   return (
//     <div className="mx-4 sm:mx-10 lg:mx-24 my-16 flex flex-col justify-center items-center">
//       <h1 className="text-5xl text-primary font-black mb-6 text-center">
//         New Arrivals
//       </h1>

//       {/* Product Cards */}
//       <ProductList products={NewArrivalSData} />

//       {/* View All Button */}
//       <Link href="/arrivals" className="mt-5 w-full sm:w-auto flex justify-center">
//         <Button
//           variant={'outline'}
//           className="w-full sm:w-[190px] h-[40px] text-textGray rounded-full"
//         >
//           View All
//         </Button>
//       </Link>
//     </div>
//   );
// };

// export default NewArrival;


// With api....

'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '../UI/button';
import Link from 'next/link';
import ProductList from '../CommonElement/ProductList';
import { NewArrivalsDataProps } from '@/staticData/AllStaticData';


// Used to fetch real (or dummy) data dynamically instead of relying on hardcoded/static data.
type DummyJsonProduct = {
  id: number;
  title: string;
  price: number;
  rating: number;
  discountPercentage: number;
  thumbnail: string;
};

const NewArrival = () => {
  const [products, setProducts] = useState<NewArrivalsDataProps[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('https://dummyjson.com/products/category/mens-shirts');
      const data = await res.json();

      const transformed = data.products.slice(0, 4).map((item: DummyJsonProduct) => ({
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
      <h1 className="text-5xl text-primary dark:text-white font-black mb-6 text-center">New Arrivals</h1>
      <ProductList products={products} />
      <Link href="/arrivals" className="mt-7 w-full sm:w-auto flex justify-center">
        <Button variant="outline" className="w-full sm:w-[190px] h-[40px] text-textGray dark:text-white  rounded-full ">
          View All
        </Button>
      </Link>
    </div>
  );
};

export default NewArrival;
