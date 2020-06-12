import React from 'react';
import styled from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';
import loadingGif from '../images/loading_dots.gif';
import AppContext from '../context';
import ShoppingProduct from '../components/shopping/listShoppingProducts/ShoppingProduct';
import HeaderShoppingList from '../components/shopping/listShoppingProducts/HeaderShoppingList';
import ListShoppingProducts from '../components/shopping/listShoppingProducts/ListShoppingProducts';

const StyledMain = styled.main`
  height: calc(100vh - 70px);
  color: ${props => props.theme.textPrimary};
  background-color: ${props => props.theme.background};
`;

const StyledListWrapper = styled.ul`
  /* margin-top: 10px; */
  /* background-color: #fff; */
`;

const getCategoriesWithProducts = products => {
  const categoriesWithProducts = [];
  products.forEach(product => {
    if (!categoriesWithProducts.includes(product.category)) {
      categoriesWithProducts.push(product.category);
    }
  });

  return categoriesWithProducts;
};

const Shopping = () => {
  return (
    <AppContext.Consumer>
      {context => {
        const productsOnShoppingList = context.products.filter(
          product => product.onShoppingList,
        );

        return (
          <StyledMain>
            <Scrollbars style={{ height: 'calc(100vh - 70px)' }}>
              {context.products.length ? (
                <ListShoppingProducts products={productsOnShoppingList} />
              ) : (
                <img src={loadingGif} alt="Loading gif" />
              )}
            </Scrollbars>
          </StyledMain>
        );
      }}
    </AppContext.Consumer>
  );
};

export default Shopping;
