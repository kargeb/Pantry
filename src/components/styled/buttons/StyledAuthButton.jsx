import styled from 'styled-components';

const StyledAuthButton = styled.button`
/* display: flex; */
height: 35px;
width: 100%;
border: none;
/* width: 250px; */
background-color: ${({ theme }) => theme.primary};
font-size: 16px;
margin-top: ${props => props.marginTop || '0px'};
/* font-weight: ${({ theme }) => theme.bold}; */
/* letter-spacing: 0.15px; */
color: ${({ theme }) => theme.textSecondary};

@media (min-width: ${({ theme }) => theme.mediumScreen}) {
height: 50px;
  }
`;

export default StyledAuthButton;
