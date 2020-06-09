import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  /* margin: 5px 0; */
  padding: 5px 5% 0 5%;
  min-height: 50px;
  line-height: 50px;
  display: flex;
  align-items: center;
  /* background-color: grey; */
  /* color: ${props => props.fontColor}; */
  justify-content: center;
/* word-wrap: break-word; */
`;

const StyledNameWrapper = styled.div`
  /* background-color: red; */
  width: 34%;
`;

const StyledLackWrapper = styled.div`
  /* background-color: green; */
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
  /* background-color: yellow; */
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
