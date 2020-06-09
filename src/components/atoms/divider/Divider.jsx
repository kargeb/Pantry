import styled from 'styled-components';

const Divider = styled.hr`
  width: 70%;
  border-top: 1px solid ${({ theme }) => theme.primary};
  border-bottom: 1px solid ${props => props.theme.background};
  margin: 10px 0;
`;

export default Divider;
