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
  @media (min-width: ${({ theme }) => theme.mediumScreen}) {
    flex: none;
    display: block;
    width: 184px;
  }
`;

const AboveMin = styled.div`
  font-size: 13px;
  flex: 1;
  font-style: italic;
  text-align: center;
  color: #808080;
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

  ${({ left }) =>
    left &&
    css`
      text-align: left;
      padding-left: 35px;
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
      <AboveMin>Min</AboveMin>
      <Description bold>Now</Description>
      <AboveButtonEditProduct />
    </Wrapper>
  );
};

export default HeaderPantryCategory;
