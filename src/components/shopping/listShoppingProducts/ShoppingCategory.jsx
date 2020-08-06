import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ShoppingProduct from './ShoppingProduct';

const CategoryLabel = styled.div`
  padding: 5px 0 5px 20px;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  color: ${({ theme }) => theme.primary};

  @media (min-width: 1024px) {
  }
`;

const ShoppingCategory = ({ currentCategory, productsInCurrentCategory }) => (
  <>
    <CategoryLabel>{currentCategory}</CategoryLabel>
    <ul>
      {productsInCurrentCategory.map(currentProduct => (
        <li key={currentProduct.id}>
          <ShoppingProduct
            name={currentProduct.name}
            id={currentProduct.id}
            quantity={currentProduct.quantity}
            min={currentProduct.min}
          />
        </li>
      ))}
    </ul>
  </>
);

ShoppingCategory.propTypes = {
  productsInCurrentCategory: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      min: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
      unit: PropTypes.string.isRequired,
    }),
  ).isRequired,
  currentCategory: PropTypes.string.isRequired,
};

export default ShoppingCategory;
