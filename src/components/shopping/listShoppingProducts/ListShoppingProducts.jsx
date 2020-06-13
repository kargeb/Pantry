import React from 'react';
import styled from 'styled-components';
import ShoppingProduct from './ShoppingProduct';
import loadingGif from '../../../images/loading_dots.gif';
import withProductsAndCategories from '../../../hoc/withProductsAndCategories';

const CategoriesList = styled.ul`
  padding-top: 10px;
  @media (min-width: ${({ theme }) => theme.small}) {
    width: 600px;
    margin: 0 auto;
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
  }
`;

const CategoriesItem = styled.li``;

const ProductsList = styled.ul``;

const ListShoppingProducts = ({ shoppingProducts, shoppingCategories }) => {
  shoppingCategories.sort();

  return (
    <div>
      {shoppingProducts.length ? (
        <CategoriesList>
          {shoppingCategories.map(currentCategory => {
            const productsInCurrentCategory = shoppingProducts.filter(
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
      ) : (
        <img src={loadingGif} alt="Loading gif" />
      )}
    </div>
  );
};

export default withProductsAndCategories(ListShoppingProducts);
