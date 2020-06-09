import styled from 'styled-components';

const ButtonQuantity = styled.button`
  font-family: inherit;
  width: 40px;
  height: 28px;
  line-height: 28px;
  color: ${props => props.theme.textPrimary};
  background-color: ${props => props.theme.background};
  border: 1px solid ${props => props.theme.textPrimary};
  border-radius: 4px;
  /* color: #8e5f23; */
  font-size: 28px;
  font-weight: 500;
`;

export default ButtonQuantity;
