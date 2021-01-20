import styled, { css } from 'styled-components';

const Divider = styled.div`
  height: 1px;
  width: 300px;
  margin: 10px 0;
  background-color: ${({ theme }) => theme.primary};
  /* overflow: hidden; */

  @media (min-width: 1024px) {
    height: 100%;
    width: 1px;
  }

  ${({ horizontal }) =>
    horizontal &&
    css`
      height: 1px;
      width: 200px;
      margin-bottom: 20px;

      @media (min-width: 1024px) {
        height: 1px;
        width: 200px;
      }
    `}
`;

export default Divider;
