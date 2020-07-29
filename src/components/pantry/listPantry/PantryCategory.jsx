import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import PantryProduct from './PantryProduct';
import ButtonAddProduct from '../../atoms/buttons/ButtonAddProduct';

const CategoriesItem = styled.li`
  @media (min-width: ${({ theme }) => theme.smallScreen}) {
    margin-bottom: 10px;
    margin: 0 5px 10px 5px;
    border: 1px solid ${({ theme }) => theme.grey20};
  }
`;

const CategoryLabel = styled.div`
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

const TableHeader = styled.div`
  position: relative;
`;

const ButtonAdd = styled(ButtonAddProduct)`
position: absolute;
top: 0;
right: 0;
margin: 5px;
  width: 23px;
  height: 23px;
  line-height: 23px;
  font-size: 18px;
    font-weight: bold;
    text-align: center;
  /* color: ${({ theme }) => theme.textSecondary}; */

  &:hover {
    font-size: 20px;
    transform: scale(1.2);
    cursor: pointer;
    font-weight: bold;
  }
`;

const ProductItem = styled.li`
  &:nth-child(odd) {
    background-color: ${({ theme }) => theme.primary20};
  }
`;

const PantryCategory = ({ currentCategory, productsInCurrentCategory }) => (
  <CategoriesItem key={currentCategory}>
    <TableHeader>
      <CategoryLabel>{currentCategory}</CategoryLabel>
      <ButtonAdd>+</ButtonAdd>
    </TableHeader>
    <ul>
      {productsInCurrentCategory.map(currentProduct => (
        <ProductItem key={currentProduct.id}>
          <PantryProduct product={currentProduct} />
        </ProductItem>
      ))}
    </ul>
  </CategoriesItem>
);

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
