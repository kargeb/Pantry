import React from 'react';
import styled from 'styled-components';
import loadingGif from '../../../images/loading_dots.gif';
import ShoppingCategory from './ShoppingCategory';
import HeaderShoppingList from './HeaderShoppingList';
import { AppContext } from '../../../context';

const CategoriesList = styled.ul`
  padding: 0px 5px;
  @media (min-width: ${({ theme }) => theme.smallScreen}) {
    width: 600px;
    margin: 0 auto;
  }
`;

const ShoppingList = () => {
  const shoppingProducts = products => products.filter(product => product.onShoppingList);
  const shoppingCategories = products => {
    const productsOnShoppingList = products.filter(product => product.onShoppingList);
    console.log('PRZEFILTORWANE PRODKUTY NA LISCIE ZAKUPOW:', productsOnShoppingList);
    const categoriesWithProducts = [];

    productsOnShoppingList.forEach(product => {
      if (!categoriesWithProducts.includes(product.category)) {
        categoriesWithProducts.push(product.category);
      }
    });
    return categoriesWithProducts;
  };

  return (
    <AppContext.Consumer>
      {({ products }) => (
        <div>
          {!products.length ? (
            <img src={loadingGif} alt="Loading gif" />
          ) : (
            <>
              {!!shoppingCategories(products).length && <HeaderShoppingList />}
              <CategoriesList>
                {shoppingCategories(products).map(currentCategory => {
                  const productsInCurrentCategory = shoppingProducts(products).filter(
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
          )}
        </div>
      )}
    </AppContext.Consumer>
  );
};

export default ShoppingList;
