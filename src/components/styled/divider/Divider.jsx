import styled, { css } from 'styled-components';

const Divider = styled.div`
  height: 1px;
  width: 100%;
  max-width: 350px;
  margin: 10px 0;
  background-color: ${({ theme }) => theme.primary};

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
