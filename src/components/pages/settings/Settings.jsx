import React from 'react';
import styled from 'styled-components';

import DarkModeSection from './darkModeSection/DarkModeSection';
import CategoriesSection from './categoriesSection/CategoriesSection';
import Divider from '../../styled/divider/Divider';
import InsertSampleData from './sampleDataSection/SampleDataSection';
import LogoutSection from './logoutSection/LogoutSection';

const StyledMain = styled.main`
  height: calc(100% - 70px);
  color: ${props => props.theme.textPrimary};
  background-color: ${props => props.theme.background};
`;

const Wrapper = styled.div`
  display: flex;
  padding: 0 10px;
  margin: 0 auto;
  padding-top: 15px;
  max-width: 350px;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  color: ${props => props.theme.textPrimary};
  background-color: ${props => props.theme.background};

  @media (min-width: 1024px) {
    padding-top: 25px;
  }
`;

const Settings = () => (
  <StyledMain>
    <Wrapper>
      <LogoutSection />
      <Divider />
      <CategoriesSection />
      <Divider />
      <InsertSampleData />
      <Divider />
      <DarkModeSection />
    </Wrapper>
  </StyledMain>
);
export default Settings;
