import React from 'react';
import styled from 'styled-components';
import AppContext from '../../context';

const ShoppingList = () => (
  <AppContext.Consumer>
    {context => (
      <ul>
        {console.log('jestem w KOMPONENTCIE shopping list')}
        {context.shoppingList.map(product => (
          <li>
            <span>{product.name}</span>
            <span
              onClick={() => context.completeProductQuantityToMin(product.id)}
            >
              Kupiono minimalną ilość
            </span>
          </li>
        ))}
      </ul>
    )}
  </AppContext.Consumer>
);

export default ShoppingList;
