import React from 'react';
import styled from 'styled-components';
import loadingGif from '../images/loading_dots.gif';
import Nav from '../components/Nav/Nav';
import AppContext from '../context';
import ShoppingProduct from '../components/product/ShoppingProduct';

const StyledListWrapper = styled.ul`
  background-color: #fff;
`;

const StyledMain = styled.main`
  height: calc(100vh - 120px);
  /* height: 1000px; */
  background-color: white;
`;

const ShoppingList = () => {
  return (
    <AppContext.Consumer>
      {context => {
        const productsOnShoppingList = context.products.filter(
          product => product.onShoppingList,
        );

        return (
          <div>
            <Nav current="shoppingList" />
            <StyledMain>
              {context.products.length ? (
                <StyledListWrapper>
                  {productsOnShoppingList.map(product => (
                    <li key={product.id}>
                      <ShoppingProduct product={product} />
                    </li>
                  ))}
                </StyledListWrapper>
              ) : (
                <img src={loadingGif} alt="Loading gif" />
              )}
            </StyledMain>
          </div>
        );
      }}
    </AppContext.Consumer>
  );
};

export default ShoppingList;
