import React from 'react';
import styled from 'styled-components';

import H2 from '../../atoms/texts/H2';
import Button from '../../atoms/buttons/Button';

const HeaderSection = styled.div`
  @media (min-width: 1024px) {
    height: 100px;
    display: flex;
    align-items: center;
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

const ButtonWithGap = styled(Button)`
  margin: 8px 0;
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

const Categories = ({ toggleCategoriesModal }) => {
  return (
    <SectionCategories>
      <HeaderSection>
        <H2>Kategorie</H2>
      </HeaderSection>
      <WrapperCategoriesButtons>
        <ButtonWithGap type="button" onClick={toggleCategoriesModal}>
          Dodaj / usuń
        </ButtonWithGap>
      </WrapperCategoriesButtons>
    </SectionCategories>
  );
};

export default Categories;
