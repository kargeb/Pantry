import React from 'react';
import styled from 'styled-components';
import Product from '../product/Product';

const StyledList = styled.ul`
  list-style-type: none;
`;

const ProductList = ({
  products,
  addProductQuantity,
  subtractProductQuantity,
  deleteProduct,
}) => (
  <StyledList>
    {products.map((item) => {
      const { name, quantity, unit } = item;
      return (
        <li key={name}>
          <Product
            name={name}
            quantity={quantity}
            unit={unit}
            addProductQuantity={addProductQuantity}
            subtractProductQuantity={subtractProductQuantity}
            deleteProduct={deleteProduct}
          />
        </li>
      );
    })}
  </StyledList>
);

export default ProductList;
