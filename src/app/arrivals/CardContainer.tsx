// With static data
// import React from 'react'
// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuTrigger,
//   } from "@/components/UI/dropdown-menu"

//   import {
//     Pagination,
//     PaginationContent,
//     PaginationEllipsis,
//     PaginationItem,
//     PaginationLink,
//     PaginationNext,
//     PaginationPrevious,
//   } from "@/components/UI/pagination"

// import Image from "next/image";
// import dropDownArrow from "../../../public/assets/images/dropdownIcon.svg";
// import { Button } from "@/components/UI/button"
  

// const CardContainer = () => {
//   return (
//     <div className='w-full flex flex-col'>
//         <div className='flex justify-between my-2'>
//             <p className='font-bold text-2xl'>ProductS</p>
//             <p className='text-textGray'>Showing 1-10 of 100 Products <span className='ml-2'>Sort by:<span className='inline-block ml-1 '>
//                 <DropdownMenu>
//                     <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-black">
//                         Most Popular
//                         <Image
//                         src={dropDownArrow}
//                         alt="dropDownArrow"
//                         height={20}
//                         width={20}
//                         />
//                     </DropdownMenuTrigger>

//                     <DropdownMenuContent>
//                         <DropdownMenuItem>Latest</DropdownMenuItem>
//                         <DropdownMenuItem>Old</DropdownMenuItem>
//                     </DropdownMenuContent>
//                 </DropdownMenu>
//             </span> </span></p>
//         </div>
//         <div className='border border-red-900 my-4 p-3 h-[950px]'>Div2</div>
//         <hr className='my-5'/>
//         <div className='my-2'>
//             <Pagination>
//             <PaginationContent>
//                 <PaginationItem>
//                 <Button variant="outline" >
//                     <PaginationPrevious href="#" />
//                 </Button>
                
//                 </PaginationItem>
//                 <PaginationItem>
//                 <PaginationLink href="#">1</PaginationLink>
//                 </PaginationItem>
//                 <PaginationItem>
//                 <PaginationLink href="#" isActive>
//                     2
//                 </PaginationLink>
//                 </PaginationItem>
//                 <PaginationItem>
//                 <PaginationLink href="#">3</PaginationLink>
//                 </PaginationItem>
//                 <PaginationItem>
//                 <PaginationEllipsis />
//                 </PaginationItem>
//                 <PaginationItem>
//                 <Button variant="outline">
//                     <PaginationNext href="#" />
//                 </Button>
                
//                 </PaginationItem>
//             </PaginationContent>
//             </Pagination>
//         </div>
//     </div>
//   )
// }

// export default CardContainer


// With dynamic data 
'use client';
import React, { useEffect, useState } from 'react';
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/UI/dropdown-menu";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious} from "@/components/UI/pagination";
// import Image from "next/image";
// import dropDownArrow from "../../../public/assets/images/dropdownIcon.svg";
import { ChevronDown } from 'lucide-react';
import { Button } from "@/components/UI/button";
import APICard from "./APICard";

type Product = {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
  rating: number;
  discountPercentage: number;
};

const CardContainer = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchProducts = async () => {
      const resData = await fetch('https://dummyjson.com/products');
      const data = await resData.json();
      setProducts(data.products);
    };

    fetchProducts();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  return (
    <div className='w-full flex flex-col'>
      {/* Header */}
      <div className='flex justify-between my-2'>
        <p className='font-bold text-2xl'>Products</p>
        <p className='text-textGray  dark:text-white hidden lg:block'>
          Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, products.length)} of {products.length} Products
          <span className='ml-2'>
            Sort by:
            <span className='inline-block ml-1 '>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-black  dark:text-white">
                  Most Popular
                  {/* <Image src={dropDownArrow} alt="dropDownArrow" height={20} width={20} /> */}
                  <ChevronDown className='height={20} width=[20]'/>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='dark:bg-black'>
                  <DropdownMenuItem>Latest</DropdownMenuItem>
                  <DropdownMenuItem>Old</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </span>
          </span>
        </p>
      </div>

      {/* Card Grid */}
      <div className='my-4 p-0 md:p-3'>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentItems.map((product) => {
            const originalPrice = Math.round(product.price / (1 - product.discountPercentage / 100));
            const discount = `-${product.discountPercentage.toFixed(0)}%`;

            return (
              <APICard
                key={product.id}
                id={product.id}
                name={product.title}
                img={product.thumbnail}
                rating={product.rating}
                price={product.price}
                originalPrice={originalPrice}
                discount={discount}
              />
            );
          })}
        </div>
      </div>

      {/* Pagination */}
      <hr className='my-5 ' />
      <div className='my-2'>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <Button
                variant="outline"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                <PaginationPrevious href="#" />
              </Button>
            </PaginationItem>

            {Array.from({ length: totalPages }, (_, i) => (
              <PaginationItem key={i}>
                <PaginationLink
                  href="#"
                  isActive={currentPage === i + 1}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(i + 1);
                  }}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>

            <PaginationItem>
              <Button
                variant="outline"
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                <PaginationNext href="#" />
              </Button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default CardContainer;
