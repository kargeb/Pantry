import React from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import AppContext from '../../context';

const StyledMenu = styled.nav`
  display: flex;
  justify-content: space-between;
  /* background-color: #6202ee; */
  background-color: 'blue';

  /* height: ${({ theme }) => theme.navheigth}; */
  color: white;
`;

const StyledSettingsIconWrapper = styled.div`
  height: 100%;
  padding: 5px;
  font-size: 30px;
  line-height: 40px;
  /* background-color: green; */
`;

const StyledShoppingListCounter = styled.div`
  background-color: #fff;
  color: #6202ee;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  margin-left: 2px;
  font-weight: 900;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: baseline;
  justify-content: center;
  width: 50%;
  font-size: 20px;
  line-height: 30px;
  padding: 20px 0;
  text-align: center;
  /* background-color:  #6202ee; */
  background-color: ${({ theme }) => theme.primary};

  &.active {
    color: #333;
    background-color: #fff;
    font-weight: 900 ${'' /* text-transform: uppercase; */};
    letter-spacing: 0.15px;
  }

  @media (min-width: 1024px) {
    background-color: red;
    /* font-size: 50px; */
  }
`;

const Nav = () => {
  const numberOfProductsOnShoppingList = products => {
    const productsOnShoppingList = products.filter(
      product => product.onShoppingList,
    );
    return productsOnShoppingList.length;
  };

  return (
    <AppContext.Consumer>
      {context => (
        <nav>
          {/* prettier-ignore */}
          <StyledMenu>
            <StyledNavLink to="/" exact>
              Products
            </StyledNavLink>
            <StyledNavLink to="/settings">
              Settings
            </StyledNavLink>
            <StyledNavLink to="/shoppinglist">
              Shopping List
              <StyledShoppingListCounter>
                {numberOfProductsOnShoppingList(context.products)}
              </StyledShoppingListCounter>
            </StyledNavLink>
          </StyledMenu>
        </nav>
      )}
    </AppContext.Consumer>
  );
};

export default Nav;
