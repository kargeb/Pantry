import styled from 'styled-components';

const Divider = styled.div`
  width: 300px;
  /* border-top: 1px solid ${({ theme }) => theme.primary};
  border-bottom: 1px solid ${props => props.theme.background}; */
  margin: 10px 0;
  background-color: ${({ theme }) => theme.primary};
  height: 1px;

  @media (min-width: 1024px) {
    height: 100%;
    width: 1px;
    /* transform: rotate(90deg) */
  }
`;

export default Divider;
