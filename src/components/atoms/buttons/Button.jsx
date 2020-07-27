import styled from 'styled-components';

const Button = styled.button`
  font-family: inherit;
  width: 130px;
  height: 27px;
  background-color: ${({ theme }) => theme.primary};
  font-size: ${({ theme }) => theme.button};
  font-weight: ${({ theme }) => theme.medium};
  color: ${({ theme }) => theme.textSecondary};
  border: 1px solid #ada17e;
  line-height: 27px;
  border-radius: 8px;
  letter-spacing: 1px;
  transition: transform 0.1s;

  &:hover {
    transform: scale(1.1);
  }
`;

export default Button;
