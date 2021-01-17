import styled, { css } from 'styled-components';

const Label = styled.label`
  font-size: 14px;
  font-weight: ${({ theme }) => theme.medium};
  color: #fff;

  ${({ left }) =>
    left &&
    css`
      width: 100%;
      text-align: left;
    `};
`;

export default Label;
