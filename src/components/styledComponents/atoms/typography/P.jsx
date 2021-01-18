import styled, { css } from 'styled-components';

const P = styled.p`
  font-size: 14px;
  color: #fff;
  padding: ${props => props.padding || '5px'};

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
      padding: 5px 0px;
      color: #ff2e00;
    `};
`;

export default P;
