import styled, { css } from 'styled-components';

const H2 = styled.h2`
  font-size: ${({ theme }) => theme.heading2};
  font-weight: ${({ theme }) => theme.medium};
  margin: 0 auto;

  ${({ italic }) =>
    italic &&
    css`
      font-style: italic;
    `}

  ${({ marginBottom }) =>
    marginBottom &&
    css`
      margin-bottom: 15px;
    `}
`;

export default H2;
