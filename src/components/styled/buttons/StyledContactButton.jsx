import styled, { css } from 'styled-components';

const StyledContactButton = styled.button`
  position: fixed;
  z-index: 99999999;
  bottom: 8px;
  left: 8px;
  font-family: inherit;
  font-size: 30px;
  
    width: 56px;
    height: 56px;
    line-height: 56px;
 
  /* background-color: ${({ theme }) => theme.primary}; */
  background-color: #fff;

  font-weight: ${({ theme }) => theme.medium};
  color: ${({ theme }) => theme.primary};
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 50%;
  /* letter-spacing: 1px; */
  transition: transform 0.1s;

  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: ${({ theme }) => theme.mediumScreen}) {
    bottom: 25px;
    left: 15px;
    text-align: left;
    padding-left: 20px;
    border-radius: 50px;
    font-size: 26px;
    width: 200px;
    height: 64px;
    line-height: 64px;

    &:after{
      content: 'Contact me';
      position: absolute;
      top: 0;
      font-size: 20px;
      left: 64px;
    }

  }

  ${({ auth }) =>
    auth &&
    css`
      font-size: 30px;

      width: 56px;
      height: 56px;
      line-height: 56px;

      color: #fff;
      border: 2px solid #fff;
      border-radius: 0;
      background-color: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(50px);

      @media (min-width: ${({ theme }) => theme.mediumScreen}) {
        bottom: 25px;
        left: 15px;
        text-align: left;
        padding-left: 20px;
        ${'' /* border-radius: 50px; */}
        border-radius: 0;
        font-size: 26px;
        width: 200px;
        height: 64px;
        line-height: 64px;

        &:after {
          content: 'Contact me';
          position: absolute;
          top: 0;
          font-size: 20px;
          left: 64px;
        }
      }
    `}


`;

export default StyledContactButton;
