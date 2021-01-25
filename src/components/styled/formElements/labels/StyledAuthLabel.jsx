import styled from 'styled-components';

const StyledAuthLabel = styled.label`
  font-size: 14px;
  font-weight: ${({ theme }) => theme.bold};
  color: #fff;
  margin-top: ${props => props.top || '0px'};
`;

export default StyledAuthLabel;
