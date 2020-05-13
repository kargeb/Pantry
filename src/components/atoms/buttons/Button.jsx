import styled from 'styled-components';

const Button = styled.button`
  font-family: inherit;
  width: 130px;
  height: 27px;
  line-height: 27px;
  background-color: ${({ theme }) => theme.primary};
  border: 1px solid #ada17e;
  border-radius: 8px;
  color: ${({ theme }) => theme.fontPrimary};
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 1px;
`;

export default Button;