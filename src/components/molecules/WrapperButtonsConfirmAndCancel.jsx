import React from 'react';
import styled from 'styled-components';

import ButtonIconConfirm from '../atoms/buttons/ButtonIconConfirm';
import ButtonIconCancel from '../atoms/buttons/ButtonIconCancel';

const StyledButtonsWrapper = styled.div`
  display: flex;
  width: 130px;
  justify-content: space-between;
  margin-top: 20px;
`;

const WrapperButtonsConfirmAndCancel = ({ cancelOnClick, confirmOnClick }) => {
  return (
    <StyledButtonsWrapper>
      <ButtonIconCancel type="button" onClick={cancelOnClick} />
      <ButtonIconConfirm type="button" onClick={confirmOnClick} />
    </StyledButtonsWrapper>
  );
};

export default WrapperButtonsConfirmAndCancel;
