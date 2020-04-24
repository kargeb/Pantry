import React from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import AppContext from '../../context';

const StyledHeader = styled.header`
  display: flex;
  height: 50px;
  background-color: #202020;
  color: white;
  /* font-size: 20px; */
`;

const StyledMenu = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: #6202ee;

  height: 70px;
  color: white;
`;

const StyledSettingsIconWrapper = styled.div`
  height: 100%;
  padding: 5px;
  font-size: 30px;
  line-height: 40px;
  /* background-color: green; */
`;

const StyledMenuItem = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  width: 50%;
  font-size: 20px;
  line-height: 30px;
  padding: 20px 0;
  text-align: center;
  background-color: #6202ee;

  ${({ active }) =>
    active &&
    css`
      color: #333;
      background-color: #fff;
      font-weight: 900 ${'' /* text-transform: uppercase; */};
      letter-spacing: 0.15px;
    `};
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

const Nav = ({ active }) => (
  <nav>
    <StyledHeader>
      <Link to="/settings">
        <StyledSettingsIconWrapper>
          <FontAwesomeIcon icon={faCogs} />
        </StyledSettingsIconWrapper>
      </Link>
    </StyledHeader>
    {active === 'pantry' && (
      <StyledMenu>
        <StyledMenuItem active>Products</StyledMenuItem>
        <StyledMenuItem>
          <Link to="/shoppinglist">Shopping List</Link>
          <StyledShoppingListCounter>
            {/* {this.numberOfProductsOnShoppingList()} */}
          </StyledShoppingListCounter>
        </StyledMenuItem>
      </StyledMenu>
    )}
    {active === 'shoppingList' && (
      <StyledMenu>
        <StyledMenuItem>
          <Link to="/">Products</Link>
        </StyledMenuItem>
        <StyledMenuItem active>
          <Link to="/shoppinglist">Shopping List</Link>
          <StyledShoppingListCounter>
            {/* {this.numberOfProductsOnShoppingList()} */}
          </StyledShoppingListCounter>
        </StyledMenuItem>
      </StyledMenu>
    )}
  </nav>
);

export default Nav;
