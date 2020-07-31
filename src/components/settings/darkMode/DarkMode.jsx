import React from 'react';
import styled from 'styled-components';

import { AppContext } from '../../../context';
import H2 from '../../atoms/texts/H2';
import Label from '../../atoms/formElements/Label';
import ButtonIconSwitch from '../../atoms/buttons/ButtonIconSwitch';

const SectionDarkMode = styled.section`
  @media (min-width: 1024px) {
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 20px;
  }
`;

const HeaderSection = styled.div`
  @media (min-width: 1024px) {
    height: 100px;
    display: flex;
    align-items: center;
  }
`;

const WrapperDarkModeToggle = styled.div`
  display: flex;
  justify-content: space-between;

  align-items: center;
  width: 120px;
  @media (min-width: 1024px) {
    height: 90px;
  }
`;

const DarkMode = () => {
  return (
    <AppContext.Consumer>
      {context => (
        <SectionDarkMode>
          <HeaderSection>
            <H2>Dark Mode</H2>
          </HeaderSection>
          <WrapperDarkModeToggle>
            <Label>Off</Label>
            <ButtonIconSwitch onClick={context.changeTheme} themeName={context.currentTheme.name} />
            <Label>On</Label>
          </WrapperDarkModeToggle>
        </SectionDarkMode>
      )}
    </AppContext.Consumer>
  );
};

export default DarkMode;
