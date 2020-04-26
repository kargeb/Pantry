import React from 'react';
import styled from 'styled-components';
import Product from '../product/Product';
// import db from '../../fbase';
import loadingGif from '../../images/loading_dots.gif';
import AppContext from '../../context';

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

const PantryProductsList = () => (
  <AppContext.Consumer>
    {context => (
      <>
        {!context.products.length && <img src={loadingGif} alt="Loading gif" />}

        <CategoriesList>
          {context.categories.map(currentCategory => {
            const productsInCurrentCategory = context.products.filter(
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
      </>
    )}
  </AppContext.Consumer>
);

export default PantryProductsList;
