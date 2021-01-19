import styled from 'styled-components';

const ButtonRectangle = styled.button`
/* display: flex; */
height: 50px;
width: 100%;
border: none;
/* width: 250px; */
background-color: ${({ theme }) => theme.primary};
font-size: 16px;
margin-top: ${props => props.marginTop || '0px'};
/* font-weight: ${({ theme }) => theme.bold}; */
/* letter-spacing: 0.15px; */
color: ${({ theme }) => theme.textSecondary};
`;

export default ButtonRectangle;
