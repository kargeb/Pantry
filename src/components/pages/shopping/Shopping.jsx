import React from 'react';
import styled from 'styled-components';
import ShoppingList from './shoppingList/ShoppingList';
import ShadowScrollbar from '../../ShadowScrollbar/ShadowScrollbar';
import { AppContext } from '../../../context';

const StyledMain = styled.main`
  height: calc(100vh - 70px);
  color: ${props => props.theme.textPrimary};
  background-color: ${props => props.theme.background};
`;

const Spinner = styled.div`
  margin: 0 auto;
  width: 100px;
  height: 100px;
  /* background-color: blue; */
`;

const Loader = styled.div`
  .loader,
  .loader:after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }
  .loader {
    margin: 60px auto;
    font-size: 10px;
    position: relative;
    text-indent: -9999em;
    border-top: 1.1em solid rgba(255, 255, 255, 0.2);
    border-right: 1.1em solid #ffbc66;
    border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
    /* border-bottom: 1.1em solid #ffffff; */
    border-left: 1.1em solid #ffbc66;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: load8 1.4s infinite linear;
    animation: load8 1.4s infinite linear;
  }
  @-webkit-keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

const Shopping = () => {
  return (
    <AppContext.Consumer>
      {({ products, downloadInProgress }) => (
        <StyledMain>
          {downloadInProgress ? (
            <Spinner>
              <Loader>
                <div className="loader" />
              </Loader>
            </Spinner>
          ) : (
            <ShadowScrollbar style={{ height: '100%' }}>
              <ShoppingList products={products} />
            </ShadowScrollbar>
          )}
        </StyledMain>
      )}
    </AppContext.Consumer>
  );
};

export default Shopping;
