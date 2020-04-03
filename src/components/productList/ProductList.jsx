import React from "react";
import Product from "../product/Product";
import styled from "styled-components";

const StyledList = styled.ul`
  list-style-type: none;
`;

const ProductList = ({
  products,
  addProductQuantity,
  subtractProductQuantity
}) => (
  <StyledList>
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
  </StyledList>
);

export default ProductList;
