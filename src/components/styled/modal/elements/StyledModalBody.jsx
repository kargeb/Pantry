import styled, { css } from 'styled-components';

const StyledModalBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;

  padding: 30px 30px;
  color: ${props => props.theme.textPrimary};
  background-color: ${props => props.theme.background};
  border: solid 2px #999;

  @media (min-width: ${({ theme }) => theme.mediumScreen}) {
    padding: 30px 60px;
  }

  ${({ auth }) =>
    auth &&
    css`
      background-color: rgba(0, 0, 0, 0.9);
      color: ${props => props.theme.textSecondary};
      border: solid 2px #999;
    `}
`;

export default StyledModalBody;
