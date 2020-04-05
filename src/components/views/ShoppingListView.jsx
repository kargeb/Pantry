import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import ShoppingList from '../shoppingList/ShoppingList';
import AppContext from '../../context';

const StyledMenu = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ShoppingListView = () => (
  <AppContext.Consumer>
    {context => (
      <div>
        <h4>Settings {context.czosz}</h4>
        <StyledMenu>
          <Link to="/">
            <h3>Pantry</h3>
          </Link>
          <h3>Shopping List {context.shoppingList.length}</h3>{' '}
        </StyledMenu>
        <ul>
          {console.log('jestem w KOMPONENTCIE shopping list')}
          {context.shoppingList.map(product => (
            <li>{product.name}</li>
          ))}
        </ul>
      </div>
    )}
  </AppContext.Consumer>
);

export default ShoppingListView;
