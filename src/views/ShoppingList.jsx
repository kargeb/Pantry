import React from 'react';
import styled from 'styled-components';
import loadingGif from '../images/loading_dots.gif';
import AppContext from '../context';
import ShoppingProduct from '../components/product/ShoppingProduct';
import ShoppingListHeader from '../components/molecules/shoppingListHeader/ShoppingListHeader';

const StyledListWrapper = styled.ul`
  margin-top: 10px;
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
          <StyledMain>
            {context.products.length ? (
              <StyledListWrapper>
                <ShoppingListHeader />
                {productsOnShoppingList.map(product => (
                  <li key={product.id}>
                    <ShoppingProduct
                      name={product.name}
                      id={product.id}
                      quantity={product.quantity}
                      min={product.min}
                    />
                  </li>
                ))}
              </StyledListWrapper>
            ) : (
              <img src={loadingGif} alt="Loading gif" />
            )}
          </StyledMain>
        );
      }}
    </AppContext.Consumer>
  );
};

export default ShoppingList;
