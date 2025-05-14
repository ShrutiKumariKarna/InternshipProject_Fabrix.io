// /* eslint-disable @typescript-eslint/no-explicit-any */
// export const dynamic = 'force-dynamic';

// import StarRating from "@/components/CommonElement/StarRating";
// import Image from "next/image";
// import { notFound } from "next/navigation";
// import { SlidersHorizontal } from 'lucide-react';
// import { Button } from "@/components/UI/button";
// import { ChevronDown } from 'lucide-react';
// import { dummyReviews } from "@/staticData/AllStaticData";
// import APICard from "@/app/arrivals/APICard";


// type ProductPageProps = {
//   params: {
//     productId: string;
//   };
// };

// export default async function ProductPage({ params }: ProductPageProps) {
//   const res = await fetch(`https://dummyjson.com/products/${params.productId}`);

//   if (!res.ok) return notFound();

//   const product = await res.json();

//   // For suggested product 
//   const topSellingProductsRes = await fetch('https://dummyjson.com/products/category/tops');
//   const topSellingProductsData = await topSellingProductsRes.json();
//   const suggestedProducts = topSellingProductsData.products;

//   return (
//     <div className="p-4 max-w-7xl mx-auto">
//       {/* Top Section */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         {/* Left Image side */}
//         <div className="flex gap-5 ">
//           {/* Small Thumbnails */}
//           <div className="w-[150px] flex flex-col gap-4">
//             {product.images?.slice(0, 3).map((img: string, i: number) => (
//               <Image
//                 key={i}
//                 src={img}
//                 alt={`Preview ${i + 1} of ${product.title}`}
//                 width={250}
//                 height={250}
//                 className="w-full h-full object-cover rounded-md border cursor-pointer bg-secondary"
//               />
//             ))}
//           </div>

//           {/* Main Image */}
//           <Image
//             src={product.thumbnail}
//             alt={product.title}
//             width={400}
//             height={300}
//             className="rounded-xl shadow object-cover bg-secondary"
//           />
//         </div>

//         {/* Right side info section */}
//         <div className="space-y-4 ">
//           {/* Title */}
//           <h1 className="text-3xl font-black text-primary dark:text-white">
//             {product.title}
//           </h1>

//           {/* Star Rating */}
//           <StarRating rating={product.rating} />

//           {/* Description */}
//           <p className="text-lg text-textGray dark:text-white">{product.description}</p>

//           {/* Pricing */}
//           <div className="flex items-center gap-2">
//             <p className="text-xl font-bold text-primary dark:text-white">
//               ${product.price}
//             </p>
//             <p className="text-base font-semibold text-textGray dark:text-white line-through">
//               ${Math.floor(product.price * 1.2)}
//             </p>
//             <span className="text-sm text-white bg-red-400 rounded-full px-4 py-2">
//               ({Math.floor(100 - (product.price / (product.price * 1.2)) * 100)}% OFF)
//             </span>
//           </div>

//           <hr className="my-4" />

//           <div className="space-y-1">
//             <p className="text-textGray dark:text-white">Choose Color</p>
//             <div className="flex gap-4">
//               {['bg-[#4F4631]', 'bg-[#314F4A]', 'bg-[#31344F]'].map((color, idx) => (
//                 <div
//                   key={idx}
//                   className={`w-10 h-10 rounded-full border ${color} cursor-pointer`}
//                 />
//               ))}
//             </div>
//           </div>

//           <hr className="my-4" />

//           {/* Sizes */}
//           <div className="space-y-1">
//             <p className="text-textGray dark:text-white">Choose Size</p>
//             <div className="flex gap-5">
//               {["Small", "Medium", "Large", "X-Large"].map((size) => (
//                 <button
//                   key={size}
//                   className="border px-4 py-2 rounded-full bg-secondary dark:bg-primary hover:bg-primary hover:text-white"
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <hr className="my-4" />

//           {/* Quantity & Cart */}
//           <div className="flex items-center gap-4">
//             <div className="flex items-center gap-2 bg-secondary  dark:bg-black rounded-full">
//               <button className="px-6 py-3">-</button>
//               <span>1</span>
//               <button className="px-6 py-3">+</button>
//             </div>

//             <div className="">
//               <button className="w-80 bg-primary text-white px-6 py-3 rounded-full">
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="mt-12 space-y-6">
//         {/* Tabs Section */}
//         <div className="border-b border-gray-200 flex justify-between">
//           <div className="flex gap-8">
//             <button className="border-b-2 border-black pb-2 font-medium">
//               Rating & Reviews
//             </button>
//             <button className="text-gray-500 pb-2">Product Details</button>
//             <button className="text-gray-500 pb-2">FAQs</button>
//           </div>

//           <div className="flex items-center gap-5">
//             <div className="bg-secondary h-12 w-12 relative rounded-full dark:bg-black">
//               <SlidersHorizontal className="text-textGray dark:text-white absolute top-3 left-3" />
//             </div>
//             <Button variant="secondary" className="dark:text-white dark:bg-black hover:bg-black hover:text-white">
//               Latest
//               <ChevronDown />
//             </Button>
//             <Button variant="secondary" className="dark:text-white dark:bg-black hover:bg-black hover:text-white">
//               Write a review
//             </Button>
//           </div>
//         </div>

//         {/* Reviews */}
//         <div className="grid md:grid-cols-2 gap-4">
//           {dummyReviews.map((review, idx) => (
//             <div
//               key={idx}
//               className="p-5 border rounded-xl space-y-2 shadow-sm bg-white dark:bg-black"
//             >
//               <div className="font-semibold ml-1 text-lg">{review.username}</div>
//               <StarRating rating={review.rating} />
//               <p className="">{review.comment}</p>
//               <p className="text-sm text-gray-500">Posted on August 18, 2023</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Suggested Products */}
//       <div className="mt-12">
//         <h1 className="text-4xl font-bold mb-5">Suggested Products</h1>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//           {suggestedProducts.map((item: any) => (
//             <APICard
//               key={item.id}
//               id={item.id}
//               name={item.title}
//               img={item.thumbnail}
//               rating={item.rating}
//               price={item.price}
//               originalPrice={Math.round(item.price / (1 - item.discountPercentage / 100))}
//               discount={`-${Math.round(item.discountPercentage)}%`}
//             />
//          ))}
//        </div>
//      </div>
//     </div>
//   );
// }




export const dynamic = 'force-dynamic';

import StarRating from "@/components/CommonElement/StarRating";
import Image from "next/image";
import { notFound } from "next/navigation";
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { Button } from "@/components/UI/button";
import { dummyReviews } from "@/staticData/AllStaticData";
import APICard from "@/app/arrivals/APICard";

// Define the type for ProductPageProps
interface ProductPageProps {
  params: { productId: string };
}

// Update this line to correctly type the params
export default async function ProductPage({ params }: ProductPageProps) {
  // Fetch product data based on productId
  const res = await fetch(`https://dummyjson.com/products/${params.productId}`);

  if (!res.ok) return notFound();

  const product = await res.json();

  // Define a type for suggested products
  type SuggestedProduct = {
    id: number;
    title: string;
    thumbnail: string;
    rating: number;
    price: number;
    discountPercentage: number;
  };
  
  const topSellingProductsRes = await fetch('https://dummyjson.com/products/category/tops');
  const topSellingProductsData = await topSellingProductsRes.json();
  const suggestedProducts: SuggestedProduct[] = topSellingProductsData.products;

  return (
    <div className="p-4 max-w-7xl mx-auto">
      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Image side */}
        <div className="flex gap-5">
          {/* Small Thumbnails */}
          <div className="w-[150px] flex flex-col gap-4">
            {product.images?.slice(0, 3).map((img: string, i: number) => (
              <Image
                key={i}
                src={img}
                alt={`Preview ${i + 1} of ${product.title}`}
                width={250}
                height={250}
                className="w-full h-full object-cover rounded-md border cursor-pointer bg-secondary"
              />
            ))}
          </div>

          {/* Main Image */}
          <Image
            src={product.thumbnail}
            alt={product.title}
            width={400}
            height={300}
            className="rounded-xl shadow object-cover bg-secondary"
          />
        </div>

        {/* Right info section */}
        <div className="space-y-4">
          <h1 className="text-3xl font-black text-primary dark:text-white">
            {product.title}
          </h1>

          <StarRating rating={product.rating} />

          <p className="text-lg text-textGray dark:text-white">{product.description}</p>

          <div className="flex items-center gap-2">
            <p className="text-xl font-bold text-primary dark:text-white">${product.price}</p>
            <p className="text-base font-semibold text-textGray dark:text-white line-through">
              ${Math.floor(product.price * 1.2)}
            </p>
            <span className="text-sm text-white bg-red-400 rounded-full px-4 py-2">
              ({Math.floor(100 - (product.price / (product.price * 1.2)) * 100)}% OFF)
            </span>
          </div>

          <hr className="my-4" />

          {/* Colors */}
          <div className="space-y-1">
            <p className="text-textGray dark:text-white">Choose Color</p>
            <div className="flex gap-4">
              {['bg-[#4F4631]', 'bg-[#314F4A]', 'bg-[#31344F]'].map((color, idx) => (
                <div key={idx} className={`w-10 h-10 rounded-full border ${color} cursor-pointer`} />
              ))}
            </div>
          </div>

          <hr className="my-4" />

          {/* Sizes */}
          <div className="space-y-1">
            <p className="text-textGray dark:text-white">Choose Size</p>
            <div className="flex gap-5">
              {["Small", "Medium", "Large", "X-Large"].map((size) => (
                <button
                  key={size}
                  className="border px-4 py-2 rounded-full bg-secondary dark:bg-primary hover:bg-primary hover:text-white"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <hr className="my-4" />

          {/* Quantity & Add to Cart */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-secondary dark:bg-black rounded-full">
              <button className="px-6 py-3">-</button>
              <span>1</span>
              <button className="px-6 py-3">+</button>
            </div>
            <button className="w-80 bg-primary text-white px-6 py-3 rounded-full">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-12 space-y-6">
        <div className="border-b border-gray-200 flex justify-between">
          <div className="flex gap-8">
            <button className="border-b-2 border-black pb-2 font-medium">Rating & Reviews</button>
            <button className="text-gray-500 pb-2">Product Details</button>
            <button className="text-gray-500 pb-2">FAQs</button>
          </div>
          <div className="flex items-center gap-5">
            <div className="bg-secondary h-12 w-12 relative rounded-full dark:bg-black">
              <SlidersHorizontal className="text-textGray dark:text-white absolute top-3 left-3" />
            </div>
            <Button variant="secondary" className="dark:text-white dark:bg-black hover:bg-black hover:text-white">
              Latest <ChevronDown />
            </Button>
            <Button variant="secondary" className="dark:text-white dark:bg-black hover:bg-black hover:text-white">
              Write a review
            </Button>
          </div>
        </div>

        {/* Reviews */}
        <div className="grid md:grid-cols-2 gap-4">
          {dummyReviews.map((review, idx) => (
            <div key={idx} className="p-5 border rounded-xl space-y-2 shadow-sm bg-white dark:bg-black">
              <div className="font-semibold ml-1 text-lg">{review.username}</div>
              <StarRating rating={review.rating} />
              <p>{review.comment}</p>
              <p className="text-sm text-gray-500">Posted on August 18, 2023</p>
            </div>
          ))}
        </div>
      </div>
      {/* Suggested Products */}
      <div className="mt-12">
        <h1 className="text-4xl font-bold mb-5">Suggested Products</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {suggestedProducts.map((item: SuggestedProduct) => (
            <APICard
              key={item.id}
              id={item.id}
              name={item.title}
              img={item.thumbnail}
              rating={item.rating}
              price={item.price}
              originalPrice={Math.round(item.price / (1 - item.discountPercentage / 100))}
              discount={`-${Math.round(item.discountPercentage)}%`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
