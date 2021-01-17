import styled, { css } from 'styled-components';

export const P = styled.p`
  font-size: 14px;
  color: #fff;

  ${({ center }) =>
    center &&
    css`
      text-align: center;
    `};
`;

export const H1 = styled.h1``;

export const A = styled.a`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;
