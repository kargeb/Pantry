import styled, { css } from 'styled-components';

const StyledSelect = styled.select`
  width: 155px;
  height: 27px;
  margin-bottom: 20px;
  border: solid 1px #ada17e;
  border-radius: 8px;
  outline: none;
  color: ${props => props.theme.textPrimary};
  background-color: ${props => props.theme.background};

  ${({ short }) =>
    short &&
    css`
      margin-left: 10px;
      width: 55px;
    `} :focus {
    border: solid 1.5px rgba(251, 142, 1, 0.7);
    box-shadow: 0px 0px 2px #ffc52f;
  }

  ${({ noMarginBottom }) =>
    noMarginBottom &&
    css`
      margin-bottom: 0px;
    `}
`;

export default StyledSelect;
