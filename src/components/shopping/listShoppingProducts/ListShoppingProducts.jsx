import React from 'react';
import styled from 'styled-components';
import ShoppingProduct from './ShoppingProduct';

const CategoriesList = styled.ul`
  padding-top: 10px;
  @media (min-width: ${({ theme }) => theme.small}) {
    width: 600px;
    margin: 0 auto;
    /* text-align: center; */
  }
`;

const StyledCategoryLabel = styled.div`
  padding: 5px 0 5px 20px;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  color: ${({ theme }) => theme.primary};

  @media (min-width: 1024px) {
    /* width: 600px; */
    /* text-align: center */
  }
`;

const CategoriesItem = styled.li`
  /* @media (min-width: 1024px) {
    margin-bottom: 10px;
    border: 1px solid ${({ theme }) => theme.primary};
    border-radius: 20px;
  } */
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

const ListShoppingProducts = ({ products }) => {
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
                  <ShoppingProduct
                    name={currentProduct.name}
                    id={currentProduct.id}
                    quantity={currentProduct.quantity}
                    min={currentProduct.min}
                  />
                </li>
              ))}
            </ProductsList>
          </CategoriesItem>
        );
      })}
    </CategoriesList>
  );
};

export default ListShoppingProducts;
