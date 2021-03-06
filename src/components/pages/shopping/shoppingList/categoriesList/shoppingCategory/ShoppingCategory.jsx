import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ShoppingProduct from './shoppingProduct/ShoppingProduct';

const CategoryLabel = styled.div`
  padding: 10px 0 5px 0px;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.primary};

  @media (min-width: 1024px) {
  }
`;

const ListItem = styled.li`
  list-style: disc;
  margin-left: 22px;
`;

const ShoppingCategory = ({ currentCategory, productsInCurrentCategory }) => (
  <div>
    <CategoryLabel>{currentCategory}</CategoryLabel>
    <ul>
      {productsInCurrentCategory.map(currentProduct => (
        <ListItem key={currentProduct.id}>
          <ShoppingProduct
            unit={currentProduct.unit}
            name={currentProduct.name}
            id={currentProduct.id}
            quantity={currentProduct.quantity}
            min={currentProduct.min}
          />
        </ListItem>
      ))}
    </ul>
  </div>
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
