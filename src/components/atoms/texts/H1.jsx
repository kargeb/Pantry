import styled, { css } from 'styled-components';

const H1 = styled.h1`
text-transform: capitalize;
  font-size: ${({ theme }) => theme.heading1};
  font-weight: ${({ theme }) => theme.medium};

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
`;

export default H1;
