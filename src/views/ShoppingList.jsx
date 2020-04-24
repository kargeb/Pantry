import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs } from '@fortawesome/free-solid-svg-icons';
// import ShoppingList from '../shoppingList/ShoppingList';
import AppContext from '../context';
import ShoppingProductsList from '../components/productList/ShoppingProductsList';
import Nav from '../components/Nav/Nav';

const StyledShoppingListCounter = styled.div`
  background-color: #6202ee;
  color: #fff;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  margin-left: 2px;
  font-weight: 900;
`;

const StyledMain = styled.main`
  height: calc(100vh - 120px);
  /* height: 1000px; */
  background-color: white;
`;

const ShoppingList = () => (
  <AppContext.Consumer>
    {context => (
      <div>
        <Nav active="shoppingList" />
        <StyledMain>{/* <ShoppingProductsList /> */}</StyledMain>
      </div>
    )}
  </AppContext.Consumer>
);

export default ShoppingList;
