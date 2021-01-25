import styled from 'styled-components';

const H1 = styled.h1`
  font-weight: bold;
  padding: 10px 0;
  color: #fff;
  text-align: center;
  font-size: 24px;

  @media (min-width: ${({ theme }) => theme.mediumScreen}) {
    font-size: 40px;
  }
`;

export default H1;
