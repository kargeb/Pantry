import React from 'react';
import styled from 'styled-components';
// import { matchPath  } from 'react-router-dom';
import loadingGif from '../images/loading_dots.gif';

const StyledContainer = styled.div`
  /* position: relative; */
`;

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
    <StyledContainer>
      <StyledMain />
    </StyledContainer>
  );
};

export default Settings;
