import React from 'react';
import styled from 'styled-components';

import { AppContext } from '../../../context';
import H2 from '../../atoms/texts/H2';
import Label from '../../atoms/formElements/Label';
import ButtonIconSwitch from '../../atoms/buttons/ButtonIconSwitch';

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  /* display: flex;
  align-items: center;
  flex-direction: column; */

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    /* height: 100%;
    margin: 0 20px; */
  }
`;

const Header = styled.div`
  @media (min-width: 1024px) {
    height: 100px;
    display: flex;
    align-items: center;
  }
`;

const WrapperToggleButton = styled.div`
  align-self: flex-end;

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 120px;
  padding: 10px 0;
  @media (min-width: 1024px) {
    height: 90px;
  }
`;

const DarkModeSection = () => {
  return (
    <AppContext.Consumer>
      {context => (
        <Section>
          <Header>
            <H2>Dark mode</H2>
          </Header>
          <WrapperToggleButton>
            <Label>Off</Label>
            <ButtonIconSwitch
              onClick={context.changeTheme}
              themeName={context.currentTheme.name}
            />
            <Label>On</Label>
          </WrapperToggleButton>
        </Section>
      )}
    </AppContext.Consumer>
  );
};

export default DarkModeSection;
