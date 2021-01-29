import styled from 'styled-components';

const StyledAuthButton = styled.button`
  height: 35px;
  width: 100%;
  border: none;
  background-color: ${({ theme }) => theme.primary};
  font-size: 16px;
  margin-top: ${props => props.marginTop || '0px'};
  color: ${({ theme }) => theme.textSecondary};

  @media (min-width: ${({ theme }) => theme.mediumScreen}) {
    height: 50px;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
    border: 2px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
  }
`;

export default StyledAuthButton;
