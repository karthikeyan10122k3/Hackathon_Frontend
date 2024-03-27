import React from "react";
import ProductCard from "./ProductCard.jsx";
import { useLocation } from "react-router-dom";
import { Header, Footer } from "../../../assets/Layout/Navbar.jsx";
import { productData } from "../../../hardcoded_data/product_data.js";

const ProductContainer = () => {
  const location = useLocation();
  const loggedIn = location.state && location.state.loggedIn;
  return (
    <>
      <Header loggedIn={loggedIn}/>

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
