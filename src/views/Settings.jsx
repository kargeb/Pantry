import React from 'react';
import styled from 'styled-components';
// import { matchPath  } from 'react-router-dom';
import loadingGif from '../images/loading_dots.gif';
import Nav from '../components/Nav/Nav';

const StyledContainer = styled.div`
  position: relative;
`;

const StyledListWrapper = styled.ul`
  background-color: #fff;
`;

const StyledMain = styled.main`
  height: calc(100vh - 120px);
  /* height: 1000px; */
  background-color: white;
`;

const Settings = ({ match }) => {
  return (
    <StyledContainer>
      {/* <Nav current="settings" /> */}
      <StyledMain />

      {/* </StyledMain> */}
    </StyledContainer>
  );
};

export default Settings;
