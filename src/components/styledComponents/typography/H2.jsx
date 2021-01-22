import styled, { css } from 'styled-components';

const H2 = styled.h2`
  font-size: ${({ theme }) => theme.heading2};
  font-weight: ${({ theme }) => theme.medium};
  margin: 0 auto;

  :first-letter {
    text-transform: uppercase;
  }



  ${({ lowercase }) =>
    lowercase &&
    css`
      :first-letter {
        text-transform: lowercase;
      }
    `}

  ${({ italic }) =>
    italic &&
    css`
      font-style: italic;
    `}
  ${({ marginBottom }) =>
    marginBottom &&
    css`
      margin-bottom: 15px;
    `};
  ${({ marginTop }) =>
    marginTop &&
    css`
      margin-top: 15px;
    `};
`;

export default H2;
