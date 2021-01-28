import styled from 'styled-components';

const StyledAuthForm = styled.form`
  position: relative;
  overflow: auto;
  margin: 0 10px;
  padding: 2% 30px;
  color: ${props => props.theme.textPrimary};
  background-color: rgba(0, 0, 0, 0.7);

  @media (min-width: ${({ theme }) => theme.mediumScreen}) {
    width: 350px;
    margin: 0;
  }

  /* hiding scrollbar */
  /* &::-webkit-scrollbar {
    display: none
  }

  --ms-overflow-style: none;
  scrollbar-width: none; */
`;

export default StyledAuthForm;
