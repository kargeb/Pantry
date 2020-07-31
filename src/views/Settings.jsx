import React from 'react';
import styled from 'styled-components';

import DarkModeSection from '../components/settings/darkModeSection/DarkModeSection';
import CategoriesSection from '../components/settings/categoriesSection/CategoriesSection';
import Divider from '../components/atoms/divider/Divider';
import InsertSampleData from '../components/settings/sampleDataSection/SampleDataSection';
import CategoriesContainer from '../components/settings/categoriesSection/container/CategoriesContainer';

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
      <Main>
        <Wrapper>
          <DarkModeSection />
          <Divider />
          <InsertSampleData />
          <Divider />
          <CategoriesSection toggleCategoriesModal={this.toggleCategoriesModal} />
        </Wrapper>

        {isCategoriesContainerVisible && (
          <CategoriesContainer toggleCategoriesModal={this.toggleCategoriesModal} />
        )}
      </Main>
    );
  }
}

export default Settings;
