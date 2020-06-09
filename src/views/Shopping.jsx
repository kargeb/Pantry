import React from 'react';
import styled from 'styled-components';
import loadingGif from '../images/loading_dots.gif';
import AppContext from '../context';
import ShoppingProduct from '../components/shopping/listShoppingProducts/ShoppingProduct';
import HeaderShoppingList from '../components/shopping/listShoppingProducts/HeaderShoppingList';

const StyledMain = styled.main`
  height: calc(100vh - 120px);
  color: ${props => props.theme.textPrimary};
  background-color: ${props => props.theme.background};
`;

const StyledListWrapper = styled.ul`
  /* margin-top: 10px; */
  /* background-color: #fff; */
`;

const Shopping = () => {
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
                <HeaderShoppingList />
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

export default Shopping;
