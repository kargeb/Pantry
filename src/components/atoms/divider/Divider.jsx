import styled from 'styled-components';

const Divider = styled.div`
  width: 300px;
  margin: 10px 0;
  background-color: ${({ theme }) => theme.primary};
  height: 1px;

  @media (min-width: 1024px) {
    height: 100%;
    width: 1px;
  }
`;

export default Divider;
