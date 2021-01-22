import React from 'react';
import styled from 'styled-components';
import ShoppingCategory from '../shoppingCategory/ShoppingCategory';

const Categories = styled.ul`
  padding: 0px 5px;
  @media (min-width: ${({ theme }) => theme.smallScreen}) {
    width: 500px;
    margin: 0 auto;
  }
`;

const CategoriesList = ({ productsOnShoppingList }) => {
  const findCategoriesInProducts = () => {
    const foundedCategories = [];

    productsOnShoppingList.forEach(product => {
      if (!foundedCategories.includes(product.category)) {
        foundedCategories.push(product.category);
      }
    });
    return foundedCategories;
  };

  const shoppingCategories = findCategoriesInProducts();

  const findProductsInCategory = searchedCategory => {
    const productsInCurrentCategory = productsOnShoppingList.filter(
      product => product.category === searchedCategory,
    );

    return productsInCurrentCategory;
  };

  return (
    <Categories>
      {shoppingCategories.map(currentCategory => {
        const productsInCurrentCategory = findProductsInCategory(
          currentCategory,
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
    </Categories>
  );
};

export default CategoriesList;
