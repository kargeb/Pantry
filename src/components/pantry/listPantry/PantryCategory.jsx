import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import PantryProduct from './PantryProduct';

const CategoriesItem = styled.li`
  @media (min-width: ${({ theme }) => theme.smallScreen}) {
    margin-bottom: 10px;
    margin: 0 5px 10px 5px;
    border: 1px solid ${({ theme }) => theme.grey20};
  }
`;

const StyledCategoryLabel = styled.div`
  padding: 5px 0 5px 20px;
  font-style: normal;
  font-weight: ${({ theme }) => theme.medium};
  font-size: ${({ theme }) => theme.heading2};
  line-height: 23px;
  color: ${({ theme }) => theme.primary};

  @media (min-width: ${({ theme }) => theme.smallScreen}) {
    text-align: center;
  }
`;

const ProductItem = styled.li`
  &:nth-child(odd) {
    background-color: ${({ theme }) => theme.primary20};
  }
`;

const ProductsList = styled.ul``;

const PantryCategory = ({ currentCategory, productsInCurrentCategory }) => (
  <CategoriesItem key={currentCategory}>
    <StyledCategoryLabel>{currentCategory}</StyledCategoryLabel>
    <ProductsList>
      {productsInCurrentCategory.map(currentProduct => (
        <ProductItem key={currentProduct.id}>
          <PantryProduct product={currentProduct} />
        </ProductItem>
      ))}
    </ProductsList>
  </CategoriesItem>
);

// PantryCategory.defaultProps = {
//     currentCategory: "",
//     productsInCurrentCategory: [],
//   };

PantryCategory.propTypes = {
  currentCategory: PropTypes.string.isRequired,
  productsInCurrentCategory: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      min: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      unit: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default PantryCategory;
