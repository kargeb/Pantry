import React from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCogs,
  faList,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import AppContext from '../../context';

const Nav = styled.nav`
  display: flex;
  /* justify-content: space-between; */
  color: ${({ theme }) => theme.fontPrimary};
`;

const IconWithCounter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledShoppingListCounter = styled.div`
  /* background-color: ${({ theme }) => theme.inactiveNavColor}; */
  /* color: ${({ theme }) => theme.primary}; */
  width: 30px;
  height: 30px;
  border-radius: 50px;
  margin-left: 10px;
  font-weight: 900;
  text-align: center;
  font-size: 20px;
  line-height: 30px;

  &.active {
    color: #fff;
    letter-spacing: 0.15px;
  }

`;

const Icon = styled(FontAwesomeIcon)`
  cursor: pointer;
  user-select: none;
  font-size: 30px;
  margin-bottom: 5px;
`;

const StyledNavLink = styled(NavLink)`
  padding-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.inactiveNavColor};
  background-color: ${({ theme }) => theme.primary};

  &.active {
    color: #fff;
    letter-spacing: 0.15px;

    /* &::after {
      content: '';
      width: 80%;
      height: 3px;
      margin-top: 3px;
      text-align: center;
      border-radius: 50px;
      background-color: #fff;
    } */
  }

  @media (min-width: 1024px) {
    /* background-color: red; */
    /* font-size: 50px; */
  }
`;

const Navigation = () => {
  const numberOfProductsOnShoppingList = products => {
    const productsOnShoppingList = products.filter(
      product => product.onShoppingList,
    );
    return productsOnShoppingList.length;
  };

  return (
    <AppContext.Consumer>
      {context => (
        <Nav>
          <StyledNavLink to="/settings">
            <Icon icon={faCogs} />
            <p>Settings</p>
          </StyledNavLink>
          <StyledNavLink to="/" exact>
            <Icon icon={faList} />
            <p>Pantry</p>
          </StyledNavLink>
          <StyledNavLink to="/shoppinglist">
            <IconWithCounter>
              <Icon icon={faShoppingCart} />
              <StyledShoppingListCounter>
                <span> {numberOfProductsOnShoppingList(context.products)}</span>
              </StyledShoppingListCounter>
            </IconWithCounter>
            <p>Shopping</p>
          </StyledNavLink>
        </Nav>
      )}
    </AppContext.Consumer>
  );
};

export default Navigation;
