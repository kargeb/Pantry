import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import ShoppingList from '../shoppingList/ShoppingList';
import AppContext from '../../context';
import ShoppingList from '../productList/ShoppingList';

const StyledMenu = styled.div`
  height: 80px;
  background-color: #6202ee;
  display: flex;
  justify-content: space-between;
`;

const StyledHeader = styled.div`
  height: 50px;
  background-color: #202020;
`;

const ShoppingListView = () => (
  <AppContext.Consumer>
    {context => (
      <div>
        <StyledHeader>Settings</StyledHeader>
        <StyledMenu>
          <Link to="/">
            <h3>Pantry</h3>
          </Link>
          <h3>Shopping List {context.shoppingList.length}</h3>
        </StyledMenu>
        <ShoppingList />
      </div>
    )}
  </AppContext.Consumer>
);

export default ShoppingListView;
