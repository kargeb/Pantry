import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StyledModal from '../../styledComponents/modal/StyledModal';

import WrapperButtonsConfirmAndCancel from '../../molecules/WrapperButtonsConfirmAndCancel';
import H1 from '../../styledComponents/typography/H1';
import H2 from '../../styledComponents/typography/H2';
import { uploadSampleProductsAndCategories } from '../../../data/handlers';
import { sampleProducts, sampleCategories } from '../../../data/sampleData';

const StyledUl = styled.ul`
  list-style-type: circle;
`;

const InsertSampleDataModal = ({ toggleInsertModal }) => {
  const uploadSampleData = () => {
    uploadSampleProductsAndCategories();
  };

  const insertDataAndCloseModal = () => {
    uploadSampleData();
    toggleInsertModal();
  };

  return (
    <StyledModal>
      <H1 marginBottomDouble>Will be downloaded:</H1>
      <H2 marginBottom>Products:</H2>
      <StyledUl>
        {sampleProducts.map(product => (
          <li key={product.id}>
            {product.name}
            {/* <H2 italic key={product.id}>
          {product.name}
        </H2> */}
          </li>
        ))}
      </StyledUl>
      <H2 marginBottom marginTop>
        Categories:
      </H2>
      <StyledUl>
        {sampleCategories.map(category => (
          <li key={category}>
            {category}
            {/* <H2 italic key={product.id}>
          {product.name}
        </H2> */}
          </li>
        ))}
      </StyledUl>
      <H1 marginTop>Continue ?</H1>
      <WrapperButtonsConfirmAndCancel
        cancelOnClick={toggleInsertModal}
        confirmOnClick={insertDataAndCloseModal}
      />
    </StyledModal>
  );
};

InsertSampleDataModal.propTypes = {
  toggleInsertModal: PropTypes.func.isRequired,
};

export default InsertSampleDataModal;
