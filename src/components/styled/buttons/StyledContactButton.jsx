import styled, { css } from 'styled-components';

const StyledContactButton = styled.button`
  position: fixed;
  z-index: 99999999;
  bottom: 25px;
  left: 25px;
  font-family: inherit;
  font-size: 18px;
    width: 200px;
    height: 50px;
    line-height: 50px;
 
  /* background-color: ${({ theme }) => theme.primary}; */
  background-color: #fff9f2;

  font-weight: ${({ theme }) => theme.medium};
  color: ${({ theme }) => theme.primary};
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 8px;
  letter-spacing: 1px;
  transition: transform 0.1s;

  &:hover {
    transform: scale(1.1);
  }

  ${({ auth }) =>
    auth &&
    css`
      width: 200px;
      height: 60px;
      line-height: 60px;
      font-size: 24px;
      color: #fff;
      border: 2px solid #fff;
      border-radius: 0;
      background-color: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(50px);
    `}


  /* @media (min-width: ${({ theme }) => theme.mediumScreen}) {
    font-size: 18px;
    width: 200px;
    height: 50px;
    line-height: 50px;
  } */
`;

export default StyledContactButton;
