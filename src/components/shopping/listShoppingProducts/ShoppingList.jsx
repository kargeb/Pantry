import React from 'react';
import styled from 'styled-components';
import loadingGif from '../../../images/loading_dots.gif';
import ShoppingCategory from './ShoppingCategory';
import HeaderShoppingList from './HeaderShoppingList';
import CategoriesList from './CategoriesList';

const ShoppingList = ({ products }) => {
  const productsOnShoppingList = products.filter(product => product.onShoppingList);
  console.log('shopping porudcta z SJIOPOGIN LISTL:', productsOnShoppingList);

  return (
    <div>
      {!products.length ? (
        <img src={loadingGif} alt="Loading gif" />
      ) : (
        <>
          {!!productsOnShoppingList.length && <HeaderShoppingList />}
          <CategoriesList productsOnShoppingList={productsOnShoppingList} />
        </>
      )}
    </div>
  );
};

export default ShoppingList;
