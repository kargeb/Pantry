import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import H2 from '../../atoms/texts/H2';
import Button from '../../atoms/buttons/Button';

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

const CategoriesSection = ({ toggleCategoriesModal }) => {
  return (
    <Section>
      <Header>
        <H2>Kategorie</H2>
      </Header>
      <WrapperButton>
        <Button type="button" onClick={toggleCategoriesModal}>
          Dodaj / usuń
        </Button>
      </WrapperButton>
    </Section>
  );
};

CategoriesSection.propTypes = {
  toggleCategoriesModal: PropTypes.func.isRequired,
};

export default CategoriesSection;
