import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCogs,
  faToggleOn,
  faToggleOff,
} from '@fortawesome/free-solid-svg-icons';
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
  /* background-color: white; */
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding-top: 50px; */
  width: 100%;
  /* background-color: grey; */
`;

const StyledHeading = styled.div`
  margin-top: 10px;
  font-size: 20px;
  font-weight: 900;
`;

const StyledDarkModeWrapper = styled.div`
  margin-top: 10px;
  display: flex;
`;

const SettingsView = () => (
  <AppContext.Consumer>
    {context => (
      <div>
        <StyledHeader>
          <Link to="/settings">
            <StyledSettingsIconWrapper>
              <FontAwesomeIcon icon={faCogs} />
            </StyledSettingsIconWrapper>
          </Link>
        </StyledHeader>

        <StyledMenu>
          <StyledMenuItem>
            <div>
              <Link to="/">Products</Link>
            </div>
          </StyledMenuItem>
          <StyledMenuItem>
            <div>
              <Link to="/shoppinglist">Shopping List</Link>
            </div>
            <StyledShoppingListCounter>
              {context.shoppingList.length}
            </StyledShoppingListCounter>
          </StyledMenuItem>
        </StyledMenu>
        <StyledMain>
          <StyledWrapper>
            <StyledHeading>Settings</StyledHeading>
            <StyledDarkModeWrapper>
              <div>Toggle Dark Mode:</div>
              <div>
                <button onClick={context.toggleDarkmode}>
                  {console.log(`constextDarkMode: ${context.darkMode}`)}
                  {context.darkMode ? (
                    <FontAwesomeIcon icon={faToggleOn} />
                  ) : (
                    <FontAwesomeIcon icon={faToggleOff} />
                  )}
                </button>
              </div>
            </StyledDarkModeWrapper>
          </StyledWrapper>
        </StyledMain>
      </div>
    )}
  </AppContext.Consumer>
);

export default SettingsView;
