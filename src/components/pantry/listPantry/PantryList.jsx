import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import loadingGif from '../../../images/loading_dots.gif';
import withProductsAndCategories from '../../../hoc/withProductsAndCategories';
import PantryCategory from './PantryCategory';

const CategoriesList = styled.ul`
  @media (min-width: ${({ theme }) => theme.smallScreen}) {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 0 3%;
  }
`;

const PantryList = ({ products, pantryCategories }) => {
  pantryCategories.sort();

  return (
    <div>
      {products.length ? (
        <CategoriesList>
          {pantryCategories.map(currentCategory => {
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
      ) : (
        <img src={loadingGif} alt="Loading gif" />
      )}
    </div>
  );
};

PantryList.defaultProps = {
  products: [],
  pantryCategories: [],
};

PantryList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      min: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      unit: PropTypes.string.isRequired,
    }),
  ),
  pantryCategories: PropTypes.arrayOf(PropTypes.string),
};

export default withProductsAndCategories(PantryList);
