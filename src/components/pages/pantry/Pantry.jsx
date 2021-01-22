import React from 'react';
import styled from 'styled-components';
import ShadowScrollbar from '../../../components/ShadowScrollbar/ShadowScrollbar';
import PantryList from './pantryList/PantryList';
import ButtonAddProductSection from '../../../components/pantry/ButtonAddProductSection/ButtonAddProductSection';

const Main = styled.main`
  display: flex;
  /* height: calc(100vh-70px); */
  position: relative;
  padding-top: 5px;
  flex-direction: column;
  justify-content: space-between;
  color: ${props => props.theme.textPrimary};
  background-color: ${props => props.theme.wideScreenBackground};

  @media (min-width: ${({ theme }) => theme.mediumScreen}) {
    padding-top: 10px;
  }
`;

const ScrollContainer = styled.div`
  height: calc(100% - 71px);
`;

const Pantry = () => (
  <Main>
    <ScrollContainer>
      <ShadowScrollbar style={{ height: '100%' }}>
        <PantryList />
      </ShadowScrollbar>
    </ScrollContainer>
    <ButtonAddProductSection />
  </Main>
);
export default Pantry;
