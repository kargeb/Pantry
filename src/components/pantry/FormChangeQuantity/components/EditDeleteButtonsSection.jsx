import React from 'react';
import styled from 'styled-components';
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
        Edytuj
      </Button>
      <Button type="button" onClick={toggleDeleteModal}>
        Usuń
      </Button>
    </WrapperEditDeleteButtons>
  );
};

export default EditDeleteButtonsSection;
