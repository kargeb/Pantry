import React from 'react';
import HeaderShoppingList from './HeaderShoppingList';
import CategoriesList from './categoriesList/CategoriesList';

const ShoppingList = ({ products }) => {
  const productsOnShoppingList = products.filter(
    product => product.onShoppingList,
  );

  return (
    <div>
      {!!productsOnShoppingList.length && <HeaderShoppingList />}
      <CategoriesList productsOnShoppingList={productsOnShoppingList} />
    </div>
  );
};

export default ShoppingList;
