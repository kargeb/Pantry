import styled, { css } from 'styled-components';

const TextHeader = styled.h1`
  font-size: 22px;
  font-weight: 500;

  ${({ marginBottom }) =>
    marginBottom &&
    css`
      margin-bottom: 30px;
    `}

  ${({ marginTop }) =>
    marginTop &&
    css`
      margin-top: 30px;
    `}
`;

export default TextHeader;
