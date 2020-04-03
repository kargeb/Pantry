import React from "react";
import Product from "../product/Product";

const ProductList = ({ products, addProductQuantity, subtractProductQuantity }) => (
  <ul>
    {products.map(item => {
      const { name, number, unit } = item;
      return (
        <li key={name}>
          <Product
            name={name}
            number={number}
            unit={unit}
            addProductQuantity={addProductQuantity}
            subtractProductQuantity={subtractProductQuantity}
          />
        </li>
      );
    })}
  </ul>
);

export default ProductList;
