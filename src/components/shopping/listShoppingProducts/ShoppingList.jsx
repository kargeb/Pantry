import React from 'react';
import styled from 'styled-components';
import loadingGif from '../../../images/loading_dots.gif';
import ShoppingCategory from './ShoppingCategory';
import HeaderShoppingList from './HeaderShoppingList';
import CategoriesList from './CategoriesList';

// const CategoriesList = styled.ul`
//   padding: 0px 5px;
//   @media (min-width: ${({ theme }) => theme.smallScreen}) {
//     width: 600px;
//     margin: 0 auto;
//   }
// `;

const ShoppingList = ({ products }) => {
  // const shoppingProducts = products => products.filter(product => product.onShoppingList);

  const shoppingProducts = products.filter(product => product.onShoppingList);
  console.log('shopping porudcta z SJIOPOGIN LISTL:', shoppingProducts);

  // const shoppingCategories = products => {
  //   const productsOnShoppingList = products.filter(product => product.onShoppingList);
  //   console.log('PRZEFILTORWANE PRODKUTY NA LISCIE ZAKUPOW:', productsOnShoppingList);
  //   const categoriesWithProducts = [];

  //   productsOnShoppingList.forEach(product => {
  //     if (!categoriesWithProducts.includes(product.category)) {
  //       categoriesWithProducts.push(product.category);
  //     }
  //   });
  //   return categoriesWithProducts;
  // };

  return (
    <div>
      {!products.length ? (
        <img src={loadingGif} alt="Loading gif" />
      ) : (
        <>
          {!!shoppingProducts.length && <HeaderShoppingList />}
          <CategoriesList shoppingProducts={shoppingProducts} />
          {/* <CategoriesList>
            {shoppingCategories(products).map(currentCategory => {
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
          </CategoriesList> */}
        </>
      )}
    </div>
  );
};

export default ShoppingList;
