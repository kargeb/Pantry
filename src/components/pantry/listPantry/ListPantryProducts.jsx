import React from 'react';
import styled from 'styled-components';
import PantryProduct from './PantryProduct';
import loadingGif from '../../../images/loading_dots.gif';
import withProductsAndCategories from '../../../hoc/withProductsAndCategories';

const StyledCategoryLabel = styled.div`
  padding: 5px 0 5px 20px;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  color: ${({ theme }) => theme.primary};

  @media (min-width: ${({ theme }) => theme.small}) {
    text-align: center;
  }
`;

const CategoriesList = styled.ul`
  @media (min-width: ${({ theme }) => theme.small}) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 3%;
  }
`;

const CategoriesItem = styled.li`
  @media (min-width: ${({ theme }) => theme.small}) {
    margin-bottom: 10px;
    margin: 0 5px 10px 5px;
    border: 1px solid ${({ theme }) => theme.primary};
    border-radius: 20px;
  }
`;

const ProductsList = styled.ul``;

const ListPantryProducts = ({ products, pantryCategories }) => {
  pantryCategories.sort();

  return (
    <div>
      {products.length ? (
        <CategoriesList>
          {pantryCategories.map(currentCategory => {
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
      ) : (
        <img src={loadingGif} alt="Loading gif" />
      )}
    </div>
  );
};

export default withProductsAndCategories(ListPantryProducts);
