import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import loadingGif from '../../../images/loading_dots.gif';
import withProductsAndCategories from '../../../hoc/withProductsAndCategories';
import PantryCategory from './PantryCategory';

const CategoriesList = styled.ul`
  @media (min-width: ${({ theme }) => theme.mediumScreen}) {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 0 3%;
  }
`;

// props are from HOC, pantryCategories are categories that currently contain products
const PantryList = ({ products, pantryCategories, isLoading }) => (
  <div>
    {isLoading ? (
      <img src={loadingGif} alt="Loading gif" />
    ) : (
      <CategoriesList>
        {pantryCategories.sort().map(currentCategory => {
          const productsInCurrentCategory = products.filter(
            product => product.category === currentCategory,
          );
          return (
            <PantryCategory
              key={currentCategory}
              currentCategory={currentCategory}
              productsInCurrentCategory={productsInCurrentCategory}
            />
          );
        })}
      </CategoriesList>
    )}
  </div>
);

PantryList.defaultProps = {
  products: [],
  pantryCategories: [],
};

PantryList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      min: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
      unit: PropTypes.string.isRequired,
    }),
  ),
  pantryCategories: PropTypes.arrayOf(PropTypes.string),
  isLoading: PropTypes.bool.isRequired,
};

export default withProductsAndCategories(PantryList);
