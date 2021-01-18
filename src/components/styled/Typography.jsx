import styled, { css } from 'styled-components';

export const P = styled.p`
  font-size: 14px;
  color: #fff;
  padding: ${props => props.padding || '5px'};
  /* padding: ${({ padding }) => padding} || 5px; */

  ${({ center }) =>
    center &&
    css`
      text-align: center;
    `};

  ${({ error }) =>
    error &&
    css`
      width: 100%;
      text-align: left;
      padding: 0px;
      color: #ff2e00;
    `};
`;

export const H1 = styled.h1``;

export const A = styled.a`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;
