import React from 'react';
import styled from 'styled-components';
import Product from '../product/Product';

const StyledCategoryLabel = styled.div`
  padding: 5px 0 5px 20px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
`;

const CategoriesList = styled.ul``;

const ProductsList = styled.ul``;

const PantryProductsList = ({ products }) => {
  const categoriesWithProducts = [];
  products.forEach(product => {
    if (!categoriesWithProducts.includes(product.category)) {
      categoriesWithProducts.push(product.category);
    }
  });

  // console.log('ACTIVE CATEGORIES: ', categoriesWithProducts);

  return (
    <CategoriesList>
      {categoriesWithProducts.map(currentCategory => {
        const productsInCurrentCategory = products.filter(
          product => product.category === currentCategory,
        );
        return (
          <li key={currentCategory}>
            <StyledCategoryLabel>{currentCategory}</StyledCategoryLabel>
            <ProductsList>
              {productsInCurrentCategory.map(currentProduct => (
                <li key={currentProduct.id}>
                  <Product product={currentProduct} />
                </li>
              ))}
            </ProductsList>
          </li>
        );
      })}
    </CategoriesList>
  );
};

export default PantryProductsList;
