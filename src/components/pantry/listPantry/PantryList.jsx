import React from 'react';
import styled from 'styled-components';
import loadingGif from '../../../images/loading_dots.gif';
import PantryCategory from './PantryCategory';
import { AppContext } from '../../../context';

const CategoriesList = styled.ul`
  @media (min-width: ${({ theme }) => theme.mediumScreen}) {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 0 3%;
  }
`;

const PantryList = () => {
  const getCategoriesFromProducts = products => {
    const categories = [];
    products.forEach(product => {
      if (!categories.includes(product.category)) {
        categories.push(product.category);
      }
    });

    return categories;
  };

  return (
    <AppContext.Consumer>
      {({ products, user, handleLogout }) => (
        <div>
          {console.log('Z CONTEXU:', products)}
          {!products.length ? (
            <img src={loadingGif} alt="Loading gif" />
          ) : (
            <div>
              <h1>{user.email}</h1>
              <button type="button" onClick={handleLogout}>
                Wyloguj
              </button>
              <CategoriesList>
                {getCategoriesFromProducts(products)
                  .sort()
                  .map(currentCategory => {
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
            </div>
          )}
        </div>
      )}
    </AppContext.Consumer>
  );
};

export default PantryList;
