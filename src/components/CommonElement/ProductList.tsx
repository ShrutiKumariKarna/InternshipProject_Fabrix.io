import React from "react";
import ProductCard from "./ProductCard";
import { NewArrivalsDataProps } from "@/staticData/AllStaticData";

export type ProductListProps = {
  products: NewArrivalsDataProps[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9 place-items-center">
      {products && products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          img={product.img}
          name={product.name}
          rating={product.rating}
          price={product.price}
          originalPrice={product.originalPrice}
          discount={product.discount}
        />
      ))}
    </div>
  );
};

export default ProductList;
