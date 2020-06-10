import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  padding: 5px 5% 0 5%;
  min-height: 50px;
  line-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledNameWrapper = styled.div`
  width: 34%;
`;

const StyledLackWrapper = styled.div`
  width: 23%;
  text-align: center;
`;

const Lack = styled.div`
  width: 23%;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
`;

const IconWrapper = styled.div`
  width: 55px;
`;

const HeaderShoppingList = () => {
  return (
    <StyledWrapper>
      <StyledNameWrapper> </StyledNameWrapper>
      <StyledLackWrapper>Obecnie</StyledLackWrapper>
      <Lack>Brakuje</Lack>
      <IconWrapper />
    </StyledWrapper>
  );
};

export default HeaderShoppingList;
