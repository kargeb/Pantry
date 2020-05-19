import React from 'react';
import styled from 'styled-components';
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
  color: ${({ theme }) => theme.fontPrimary};
  background-color: ${({ theme }) => theme.primary};
`;

const IconWithCounterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ShoppingListCounter = styled.div`
  width: 30px;
  height: 34px;
  font-size: 24px;
  line-height: 34px;
  text-align: center;
  font-weight: 900;
  border-radius: 50px;
  margin-left: 10px;

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

const NavLinkWrapper = styled(NavLink)`
  padding-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  flex: 1;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.inactiveNavColor};
  /* background-color: ${({ theme }) => theme.primary}; */
  transition: font-size 0.2s;

  &.active {
    color: #fff;
    letter-spacing: 0.15px;
    font-size: 18px;

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
          <NavLinkWrapper to="/settings">
            <Icon icon={faCogs} />
            <p>Settings</p>
          </NavLinkWrapper>
          <NavLinkWrapper to="/" exact>
            <Icon icon={faList} />
            <p>Pantry</p>
          </NavLinkWrapper>
          <NavLinkWrapper to="/shoppinglist">
            <IconWithCounterWrapper>
              <Icon icon={faShoppingCart} />
              <ShoppingListCounter>
                <span> {numberOfProductsOnShoppingList(context.products)}</span>
              </ShoppingListCounter>
            </IconWithCounterWrapper>
            <p>Shopping</p>
          </NavLinkWrapper>
        </Nav>
      )}
    </AppContext.Consumer>
  );
};

export default Navigation;
