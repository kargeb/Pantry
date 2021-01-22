import styled, { css } from 'styled-components';

const H1 = styled.h1`
  /* text-transform: uppercase; */

  font-size: ${({ theme }) => theme.heading1};
  font-weight: ${({ theme }) => theme.medium};

  :first-letter {text-transform: uppercase}

  ${({ marginBottomDouble }) =>
    marginBottomDouble &&
    css`
      margin-bottom: 30px;
    `}

    ${({ marginBottom }) =>
      marginBottom &&
      css`
        margin-bottom: 15px;
      `}

  ${({ marginTop }) =>
    marginTop &&
    css`
      margin-top: 30px;
    `}

    /* ${({ capitalize }) =>
      capitalize &&
      css`
        text-transform: capitalize;
      `} */
`;

export default H1;
