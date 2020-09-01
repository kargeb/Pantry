import React from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  padding: 10px 10px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.smallScreen}) {
    width: 600px;
    margin: 0 auto;
  }
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

const AboveCartIcon = styled.div`
  width: 55px;
`;

const HeaderShoppingList = () => {
  return (
    <Wrapper>
      <AboveName />
      <Description>Qty</Description>
      <Description bold>Lack</Description>
      <AboveCartIcon />
    </Wrapper>
  );
};

export default HeaderShoppingList;
