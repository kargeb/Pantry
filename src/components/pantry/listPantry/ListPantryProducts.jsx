import React from 'react';
import styled, { css } from 'styled-components';
import PantryProduct from './PantryProduct';

const StyledCategoryLabel = styled.div`
  padding: 5px 0 5px 20px;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  color: ${({ theme }) => theme.primary};

  @media (min-width: 1024px) {
    /* background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.background}}; */
    /* transform: rotate(90deg) */
    text-align: center
  }
`;

const CategoriesList = styled.ul`
  @media (min-width: ${({ theme }) => theme.small}) {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  /* @media (min-width: ${({ theme }) => theme.laptop}) {
    margin: 0 10%;
  } */
`;

const CategoriesItem = styled.li`
  @media (min-width: ${({ theme }) => theme.small}) {
    margin-bottom: 10px;
    border: 1px solid ${({ theme }) => theme.primary};
    border-radius: 20px;
  }
`;

const ProductsList = styled.ul``;

const getCategoriesWithProducts = products => {
  const categoriesWithProducts = [];
  products.forEach(product => {
    if (!categoriesWithProducts.includes(product.category)) {
      categoriesWithProducts.push(product.category);
    }
  });

  return categoriesWithProducts;
};

const ListPantryProducts = ({ products }) => {
  const categoriesWithProducts = getCategoriesWithProducts(products);
  categoriesWithProducts.sort();

  return (
    <CategoriesList>
      {categoriesWithProducts.map(currentCategory => {
        const productsInCurrentCategory = products.filter(
          product => product.category === currentCategory,
        );
        return (
          <CategoriesItem key={currentCategory}>
            <StyledCategoryLabel>{currentCategory}</StyledCategoryLabel>
            <ProductsList>
              {productsInCurrentCategory.map(currentProduct => (
                <li key={currentProduct.id}>
                  <PantryProduct product={currentProduct} />
                </li>
              ))}
            </ProductsList>
          </CategoriesItem>
        );
      })}
    </CategoriesList>
  );
};

export default ListPantryProducts;
