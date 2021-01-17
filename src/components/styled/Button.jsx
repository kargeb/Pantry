import styled from 'styled-components';

const Button = styled.button`
  height: 50px;
  width: 270px;
  background-color: ${({ theme }) => theme.primary};
  font-size: 16px;
  color: ${({ theme }) => theme.textSecondary};
`;

export default Button;
