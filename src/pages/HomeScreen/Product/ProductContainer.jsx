import React from "react";
import ProductCard from "./ProductCard.jsx";
import { Header, Footer } from "../../../assets/Layout/Navbar.jsx";
import { productData } from "../../../hardcoded_data/product_data.js";

const ProductContainer = () => {
  return (
    <>
      <Header />

      <div className=" my-3 card-image">
        {productData.map((element, index) => {
          return (
            <>
              <ProductCard productInfo={element} />
            </>
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default ProductContainer;
