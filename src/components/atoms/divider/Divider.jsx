import styled from 'styled-components';

const Divider = styled.hr`
  width: 70%;
  border-top: 1px solid ${({ theme }) => theme.primary};
  margin: 10px 0;
`;

export default Divider;
