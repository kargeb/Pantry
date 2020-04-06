import React from 'react';
import styled from 'styled-components';
import Product from '../product/Product';

const ProductList = ({
  products,
  addProductQuantity,
  subtractProductQuantity,
  deleteProduct,
  editProduct,
}) => (
  <ul>
    {products.map(item => {
      const { name, quantity, unit, id, min } = item;
      return (
        <li key={name}>
          <Product
            id={id}
            name={name}
            min={min}
            quantity={quantity}
            unit={unit}
            addProductQuantity={addProductQuantity}
            subtractProductQuantity={subtractProductQuantity}
            deleteProduct={deleteProduct}
            editProduct={editProduct}
          />
        </li>
      );
    })}
  </ul>
);

export default ProductList;
