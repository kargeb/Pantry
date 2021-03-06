import styled from 'styled-components';

const ButtonAddProduct = styled.button`
  border: none;
  width: 56px;
  height: 56px;
  line-height: 56px;
  background: ${({ theme }) => theme.primary};
  border-radius: 50%;
  color: ${({ theme }) => theme.textSecondary};
  font-size: 40px;
  text-transform: uppercase;
  transition: all 0.1s;
  outline: none;

  &:hover {
    font-size: 55px;
    transform: scale(1.1);
    cursor: pointer;
    font-weight: bold;
  }
`;

export default ButtonAddProduct;
