import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from '../../../atoms/buttons/Button';

const WrapperEditDeleteButtons = styled.div`
  margin-top: 30px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const EditDeleteButtonsSection = ({ toggleDeleteModal, toggleEditProductForm }) => {
  return (
    <WrapperEditDeleteButtons>
      <Button
        type="button"
        onClick={() => {
          toggleEditProductForm();
        }}
      >
        Edit
      </Button>
      <Button type="button" onClick={toggleDeleteModal}>
        Remove
      </Button>
    </WrapperEditDeleteButtons>
  );
};

EditDeleteButtonsSection.propTypes = {
  toggleDeleteModal: PropTypes.func.isRequired,
  toggleEditProductForm: PropTypes.func.isRequired,
};

export default EditDeleteButtonsSection;
