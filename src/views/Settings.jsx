import React from 'react';
import styled from 'styled-components';

import DarkModeSection from '../components/settings/darkModeSection/DarkModeSection';
import CategoriesSection from '../components/settings/categoriesSection/CategoriesSection';
import Divider from '../components/atoms/divider/Divider';
import InsertSampleData from '../components/settings/sampleDataSection/SampleDataSection';
import LogoutSection from '../components/settings/logoutSection/LogoutSection';

const Wrapper = styled.div`
  display: flex;
  padding: 0 10px;
  margin: 0 auto;
  width: 100%;
  max-width: 350px;
  flex-direction: column;
  /* justify-content: space-around; */
  align-items: center;
  padding-top: 30px;
  overflow: auto;

  @media (min-width: 1024px) {
    /* height: 250px; */
    /* max-width: 400px; */
    /* width: 100%; */
    /* max-width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row; */
  }
`;

const Settings = () => (
  <Wrapper>
    <LogoutSection />
    <Divider />
    <CategoriesSection />
    <Divider />
    <InsertSampleData />
    <Divider />
    <DarkModeSection />
  </Wrapper>
);
export default Settings;
