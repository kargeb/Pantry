import React from 'react';
import styled from 'styled-components';

const ShoppingList = ({ shoppingList }) => (
  <div>
    <h3>Shopping list</h3>
    <ul>
      {console.log('jestem w KOMPONENTCIE shopping list')}
      {shoppingList.map(product => (
        <li>{product.name}</li>
      ))}
    </ul>
  </div>
);

export default ShoppingList;
