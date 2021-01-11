import React from 'react';
import styled from 'styled-components';
import ShoppingList from '../components/shopping/listShoppingProducts/ShoppingList';
import ShadowScrollbar from '../components/ShadowScrollbar/ShadowScrollbar';
import { AppContext } from '../context';

const StyledMain = styled.main`
  height: calc(100vh - 70px);
  color: ${props => props.theme.textPrimary};
  background-color: ${props => props.theme.background};
`;

const Shopping = () => {
  return (
    <AppContext.Consumer>
      {({ products }) => (
        <StyledMain>
          {/* <ShadowScrollbar style={{ height: 'calc(100vh - 70px)' }}> */}
          <ShadowScrollbar style={{ height: '100%' }}>
            <ShoppingList products={products} />
          </ShadowScrollbar>
        </StyledMain>
      )}
    </AppContext.Consumer>
  );
};

export default Shopping;
