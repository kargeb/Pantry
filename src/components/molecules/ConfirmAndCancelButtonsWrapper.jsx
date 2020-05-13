import React from 'react';
import styled from 'styled-components';

import ButtonConfirm from '../atoms/buttons/ButtonConfirm';
import ButtonCancel from '../atoms/buttons/ButtonCancel';

const ConfirmAndCancelButtonsWrapper = ({ cancelOnClick, confirmOnClick }) => {
  const StyledButtonsWrapper = styled.div`
    display: flex;
    width: 130px;
    justify-content: space-between;
    margin-top: 20px;
  `;

  return (
    <StyledButtonsWrapper>
      <ButtonCancel type="button" onClick={cancelOnClick} />
      <ButtonConfirm type="button" onClick={confirmOnClick} />
    </StyledButtonsWrapper>
  );
};

export default ConfirmAndCancelButtonsWrapper;
