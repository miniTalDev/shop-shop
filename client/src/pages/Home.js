import React, { useState } from "react";
import ProductList from "../components/ProductList/index";
import CategoryMenu from "../components/CategoryMenu/index";

const Home = () => {
  const [currentCategory, setCategory] = useState("");

  return (
    <div className="container">
      <CategoryMenu setCategory={setCategory} />
      <ProductList currentCategory={currentCategory} />
    </div>
  );
};

export default Home;
