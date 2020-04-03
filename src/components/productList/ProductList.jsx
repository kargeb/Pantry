import React from "react";
import Product from "../product/Product";

const ProductList = ({ products, addNumber }) => (
  <ul>
    {products.map(item => {
      const { name, number, unit } = item;
      return (
        <li key={name}>
          <Product
            name={name}
            number={number}
            unit={unit}
            addNumber={addNumber}
          />
        </li>
      );
    })}
  </ul>
);

export default ProductList;
