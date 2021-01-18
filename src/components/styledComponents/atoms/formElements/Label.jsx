import styled, { css } from 'styled-components';

const Label = styled.label`
  font-size: 14px;
  font-weight: ${({ theme }) => theme.bold};
  color: #fff;
  margin-top: ${props => props.top || '0px'};

  ${({ left }) =>
    left &&
    css`
      width: 100%;
      text-align: left;
    `};
`;

export default Label;
