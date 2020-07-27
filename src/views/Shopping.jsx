import React from 'react';
import styled from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';
import ShoppingList from '../components/shopping/listShoppingProducts/ShoppingList';

const StyledMain = styled.main`
  height: calc(100vh - 70px);
  color: ${props => props.theme.textPrimary};
  background-color: ${props => props.theme.background};
`;

const Shopping = () => {
  return (
    <StyledMain>
      <Scrollbars style={{ height: 'calc(100vh - 70px)' }}>
        <ShoppingList />
      </Scrollbars>
    </StyledMain>
  );
};

export default Shopping;
