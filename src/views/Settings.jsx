import React from 'react';
import styled from 'styled-components';

import DarkModeSection from '../components/settings/darkModeSection/DarkModeSection';
import CategoriesSection from '../components/settings/categoriesSection/CategoriesSection';
import Divider from '../components/atoms/divider/Divider';
import InsertSampleData from '../components/settings/sampleDataSection/SampleDataSection';

const Main = styled.main`
  color: ${props => props.theme.textPrimary};
  background-color: ${props => props.theme.background};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-top: 30px;

  @media (min-width: 1024px) {
    height: 250px;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
  }
`;

const Settings = () => (
  <Main>
    <Wrapper>
      <DarkModeSection />
      <Divider />
      <InsertSampleData />
      <Divider />
      <CategoriesSection />
    </Wrapper>
  </Main>
);
export default Settings;
