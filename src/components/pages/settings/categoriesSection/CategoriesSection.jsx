import React from 'react';
import styled from 'styled-components';

import H2 from '../../../styled/typography/H2';
import Button from '../../../styled/buttons/Button';
import ModalCategoriesManager from './modalCategoriesManager/ModalCategoriesManager';

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const StyledH2 = styled(H2)`
  padding: 5px 0;
  text-align: left;
  margin-bottom: 5px;
  margin: 0;
`;

const WrapperButton = styled.div`
  align-self: flex-end;
  padding: 10px 0;

  @media (min-width: 1024px) {
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
        <StyledH2>Categories</StyledH2>
        <WrapperButton>
          <Button type="button" onClick={this.toggleCategoriesContainer}>
            Add / Remove
          </Button>
        </WrapperButton>
        {isCategoriesContainerVisible && (
          <ModalCategoriesManager
            toggleCategoriesContainer={this.toggleCategoriesContainer}
          />
        )}
      </Section>
    );
  }
}

export default CategoriesSection;
