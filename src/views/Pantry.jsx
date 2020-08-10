import React from 'react';
import styled from 'styled-components';
import ShadowScrollbar from '../components/ShadowScrollbar/ShadowScrollbar';
import PantryList from '../components/pantry/listPantry/PantryList';
import ButtonAddProductSection from '../components/pantry/ButtonAddProductSection/ButtonAddProductSection';

const Main = styled.main`
  display: flex;
  padding-top: 10px;
  flex-direction: column;
  justify-content: space-between;
  color: ${props => props.theme.textPrimary};
  /* background-color: ${props => props.theme.background}; */
  background-color: ${props => props.theme.wideScreenBackground};
`;

const Pantry = () => (
  <Main>
    <ShadowScrollbar style={{ height: '100%' }}>
      <PantryList />
    </ShadowScrollbar>
    <ButtonAddProductSection />
  </Main>
);
export default Pantry;
