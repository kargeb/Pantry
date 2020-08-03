import styled from 'styled-components';

const ButtonQuantity = styled.button`
  font-family: inherit;
  width: 40px;
  height: 28px;
  line-height: 28px;
  color: ${({ theme }) => theme.textPrimary};
  background-color: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.textPrimary};
  border-radius: 4px;
  font-size: 28px;
  font-weight: 500;
`;

export default ButtonQuantity;
