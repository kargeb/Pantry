import styled, { css } from 'styled-components';

const StyledAuthInput = styled.input`
  width: 100%;
  height: 38px;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  border-bottom: solid 2px #fff;
  background-color: rgba(0, 0, 0, 0.2);
  color: #fff;
  outline: none;

  &:focus {
    border: solid 1.5px rgba(251, 142, 1, 0.7);
  }

  ${({ errorBorder }) =>
    errorBorder &&
    css`
      border: 1px solid #ff2e00;
    `}

    @media (min-width: ${({ theme }) => theme.mediumScreen}) {
height: 45px;
  }
`;

export default StyledAuthInput;
