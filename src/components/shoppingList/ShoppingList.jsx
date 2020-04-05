import React from 'react';
import styled from 'styled-components';
import AppContext from '../../context';

const ShoppingList = () => (
  <AppContext.Consumer>
    {context => (
      <div>
        <h3>Shopping list</h3>
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

export default ShoppingList;
