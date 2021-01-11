import React from 'react';
import styled from 'styled-components';

import H2 from '../../atoms/texts/H2';
import Button from '../../atoms/buttons/Button';
import ModalCategoriesManager from './modalCategoriesManager/ModalCategoriesManager';
import { AppContext } from '../../../context';

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0;
  @media (min-width: 1024px) {
    height: 100px;
  }
`;

const Section = styled.section`
  @media (min-width: 1024px) {
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 20px;
  }
`;

const WrapperButton = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 1024px) {
    height: 90px;
  }
`;

class CategoriesSection extends React.Component {
  state = {
    isCategoriesContainerVisible: false,
  };

  toggleCategoriesContainer = () => {
    this.setState(prevState => ({
      isCategoriesContainerVisible: !prevState.isCategoriesContainerVisible,
    }));
  };

  render() {
    const { isCategoriesContainerVisible } = this.state;
    return (
      <Section>
        <Header>
          <H2>Categories</H2>
        </Header>
        <WrapperButton>
          <Button type="button" onClick={this.toggleCategoriesContainer}>
            Add / Remove
          </Button>
        </WrapperButton>
        {isCategoriesContainerVisible && (
          <ModalCategoriesManager toggleCategoriesContainer={this.toggleCategoriesContainer} />
        )}
      </Section>
    );
  }
}

export default CategoriesSection;
