import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import loadingGif from '../../../images/loading_dots.gif';
import withProductsAndCategories from '../../../hoc/withProductsAndCategories';
import ShoppingCategory from './ShoppingCategory';
import HeaderShoppingList from './HeaderShoppingList';

const CategoriesList = styled.ul`
  @media (min-width: ${({ theme }) => theme.smallScreen}) {
    width: 600px;
    margin: 0 auto;
  }
`;

const ShoppingList = ({ shoppingProducts, shoppingCategories }) => {
  shoppingCategories.sort();

  return (
    <div>
      {shoppingProducts.length ? (
        <>
          <HeaderShoppingList />
          <CategoriesList>
            {shoppingCategories.map(currentCategory => {
              const productsInCurrentCategory = shoppingProducts.filter(
                product => product.category === currentCategory,
              );
              return (
                <li key={currentCategory}>
                  <ShoppingCategory
                    currentCategory={currentCategory}
                    productsInCurrentCategory={productsInCurrentCategory}
                  />
                </li>
              );
            })}
          </CategoriesList>
        </>
      ) : (
        <img src={loadingGif} alt="Loading gif" />
      )}
    </div>
  );
};

ShoppingList.defaultProps = {
  shoppingProducts: [],
  shoppingCategories: [],
};

ShoppingList.propTypes = {
  shoppingProducts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      min: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      unit: PropTypes.string.isRequired,
    }),
  ),
  shoppingCategories: PropTypes.arrayOf(PropTypes.string),
};

export default withProductsAndCategories(ShoppingList);
