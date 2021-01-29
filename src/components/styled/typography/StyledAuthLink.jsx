import styled from 'styled-components';

const StyledAuthLink = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;

  &:hover {
    color: #fff;
    font-weight: bold;
  }
`;

export default StyledAuthLink;
