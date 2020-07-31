import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../context';
import H2 from '../components/atoms/texts/H2';
import Label from '../components/atoms/formElements/Label';
import ButtonIconSwitch from '../components/atoms/buttons/ButtonIconSwitch';
import Button from '../components/atoms/buttons/Button';
import Divider from '../components/atoms/divider/Divider';
import InsertSampleData from '../components/settings/sampleData/SampleData';
import CategoriesContainer from '../components/settings/categories/container/CategoriesContainer';

const Main = styled.main`
  color: ${props => props.theme.textPrimary};
  background-color: ${props => props.theme.background};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-top: 15px;

  @media (min-width: 1024px) {
    height: 250px;
    padding-top: 30px;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
  }
`;

const SectionDarkMode = styled.section`
  @media (min-width: 1024px) {
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 20px;
  }
`;

const SectionCategories = styled.section`
  @media (min-width: 1024px) {
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 20px;
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

const HeaderSection = styled.div`
  @media (min-width: 1024px) {
    height: 100px;
    display: flex;
    align-items: center;
  }
`;

const WrapperCategoriesButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 1024px) {
    height: 90px;
  }
`;

const ButtonWithGap = styled(Button)`
  margin: 8px 0;
`;

class Settings extends React.Component {
  state = {
    isCategoriesContainerVisible: false,
  };

  toggleCategoriesModal = () => {
    this.setState(prevState => ({
      isCategoriesContainerVisible: !prevState.isCategoriesContainerVisible,
    }));
  };

  render() {
    const { isCategoriesContainerVisible } = this.state;
    return (
      <AppContext.Consumer>
        {context => (
          <Main>
            <Wrapper>
              <SectionDarkMode>
                <HeaderSection>
                  <H2>Dark Mode</H2>
                </HeaderSection>
                <WrapperDarkModeToggle>
                  <Label>Off</Label>
                  <ButtonIconSwitch
                    onClick={context.changeTheme}
                    themeName={context.currentTheme.name}
                  />
                  <Label>On</Label>
                </WrapperDarkModeToggle>
              </SectionDarkMode>
              <Divider />
              <InsertSampleData />
              <Divider />
              <SectionCategories>
                <HeaderSection>
                  <H2>Kategorie</H2>
                </HeaderSection>
                <WrapperCategoriesButtons>
                  <ButtonWithGap type="button" onClick={this.toggleCategoriesModal}>
                    Dodaj / usuń
                  </ButtonWithGap>
                </WrapperCategoriesButtons>
              </SectionCategories>
            </Wrapper>

            {isCategoriesContainerVisible && (
              <CategoriesContainer toggleCategoriesModal={this.toggleCategoriesModal} />
            )}
          </Main>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Settings;
