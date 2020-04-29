import React from 'react';
import styled from 'styled-components';
import loadingGif from '../images/loading_dots.gif';
import AppContext from '../context';

const StyledListWrapper = styled.ul`
  background-color: #fff;
`;

const StyledMain = styled.main`
  height: calc(100vh - 120px);
  /* height: 1000px; */
  background-color: white;
`;

const Settings = () => {
  return (
    <AppContext.Consumer>
      {context => (
        <StyledMain>
          <button onClick={context.changeTheme} type="button">
            zmień Them
          </button>
        </StyledMain>
      )}
    </AppContext.Consumer>
  );
};

export default Settings;
