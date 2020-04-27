import React from 'react';
import styled from 'styled-components';
// import { matchPath  } from 'react-router-dom';
import loadingGif from '../images/loading_dots.gif';
import Nav from '../components/Nav/Nav';
import AppContext from '../context';
import ShoppingProduct from '../components/product/ShoppingProduct';

const StyledContainer = styled.div`
  position: relative;
`;

const StyledListWrapper = styled.ul`
  background-color: #fff;
`;

const StyledMain = styled.main`
  height: calc(100vh - 120px);
  /* height: 1000px; */
  background-color: white;
`;

const ShoppingList = ({ match }) => {
  console.log('useparams z shoppinglist:', match.path);
  return (
    <AppContext.Consumer>
      {context => {
        const productsOnShoppingList = context.products.filter(
          product => product.onShoppingList,
        );

        return (
          <StyledContainer>
            {/* <Nav current="shoppingList" /> */}
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
          </StyledContainer>
        );
      }}
    </AppContext.Consumer>
  );
};

export default ShoppingList;
