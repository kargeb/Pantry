import React from 'react';
import styled from 'styled-components';
import ShoppingCategory from './ShoppingCategory';

const Categories = styled.ul`
  padding: 0px 5px;
  @media (min-width: ${({ theme }) => theme.smallScreen}) {
    width: 600px;
    margin: 0 auto;
  }
`;

const CategoriesList = ({ shoppingProducts }) => {
  //   console.log('JESTEM W CATEGORIES LIST z propsem:', shoppingProducts);
  //   console.log('jest tablica shopping porcuts', Array.isArray(shoppingProducts));
  const shoppingCategories = () => {
    const categoriesWithProducts = [];

    shoppingProducts.forEach(product => {
      if (!categoriesWithProducts.includes(product.category)) {
        categoriesWithProducts.push(product.category);
      }
    });
    return categoriesWithProducts;
  };

  return (
    <Categories>
      {console.log('shopping categoires co to:', shoppingCategories)}
      {shoppingCategories().map(currentCategory => {
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
    </Categories>
  );
};

export default CategoriesList;
