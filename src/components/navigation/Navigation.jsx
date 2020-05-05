import React from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import AppContext from '../../context';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.fontPrimary};
`;

const StyledShoppingListCounter = styled.div`
  background-color: #fff;
  color: #6202ee;
  background-color: 
  width: 30px;
  height: 30px;
  border-radius: 50px;
  margin-left: 2px;
  font-weight: 900;
`;

const Icon = styled(FontAwesomeIcon)`
  cursor: pointer;
  user-select: none;
  /* line-height: 40px; */
  font-size: 30px;
  margin-bottom: 5px;
  /* margin: 0 10px; */
  color: ${({ theme }) => theme.inactiveNavColor};
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  font-size: 14px;
  /* line-height: 30px; */
  color: ${({ theme }) => theme.inactiveNavColor};
  text-align: center;
  background-color: ${({ theme }) => theme.primary};

  &.active {
    color: #333;
    background-color: #fff;
    font-weight: 900 ${'' /* text-transform: uppercase; */};
    letter-spacing: 0.15px;
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
            <p> Settings</p>
          </StyledNavLink>
          <StyledNavLink to="/" exact>
            Products
          </StyledNavLink>
          <StyledNavLink to="/shoppinglist">
            Shopping List
            <StyledShoppingListCounter>
              {numberOfProductsOnShoppingList(context.products)}
            </StyledShoppingListCounter>
          </StyledNavLink>
        </Nav>
      )}
    </AppContext.Consumer>
  );
};

export default Navigation;
