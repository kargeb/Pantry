import React from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.li`
  display: flex;
  height: 16px;
`;

const AboveCartIcon = styled.div`
  margin-left: 2px;
  width: 40px;
`;

const AboveName = styled.div`
  flex: 3;
  display: flex;
`;

const Description = styled.div`
  font-size: 13px;
  flex: 1;
  font-style: italic;
  text-align: center;

  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
    `}
`;

const AboveButtonEditProduct = styled.div`
  width: 45px;
  margin: 0 10px;
`;

const HeaderPantryCategory = () => {
  return (
    <Wrapper>
      <AboveCartIcon />
      <AboveName />
      <Description bold>Stan</Description>
      <Description>Min</Description>
      <AboveButtonEditProduct />
    </Wrapper>
  );
};

export default HeaderPantryCategory;
