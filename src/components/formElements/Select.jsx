import styled, { css } from 'styled-components';

const Select = styled.select`
  width: 155px;
  height: 27px;
  margin-bottom: 20px;
  border: solid 1px #ada17e;
  border-radius: 8px;
  outline: none;

  ${({ short }) =>
    short &&
    css`
      margin-left: 10px;
      width: 45px;
    `} :focus {
    border: solid 1.5px rgba(251, 142, 1, 0.7);
    box-shadow: 0px 0px 2px #ffc52f;
  }
`;

export default Select;
