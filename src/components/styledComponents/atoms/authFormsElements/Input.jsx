import styled, { css } from 'styled-components';

const Input = styled.input`
  width: 100%;
  height: 45px;
  padding-left: 5px;
  font-size: 14px;
  /* line-height: 45px; */
  border: none;
  border-bottom: solid 2px #fff;
  background-color: rgba(0, 0, 0, 0.2);
  color: #fff;
  outline: none;

  &:focus {
    border: solid 1.5px rgba(251, 142, 1, 0.7);
    /* box-shadow: 0px 0px 2px #ffc52f; */
  }

  ${({ errorBorder }) =>
    errorBorder &&
    css`
      border: 1px solid #ff2e00;
    `}
`;

export default Input;
