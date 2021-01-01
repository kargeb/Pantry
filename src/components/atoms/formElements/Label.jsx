import styled, { css } from 'styled-components';

const Label = styled.label`
  margin-bottom: 4px;
  font-size: 13px;
  color: ${props => props.theme.textPrimary};

  ${({ alignLeft }) =>
    alignLeft &&
    css`
      width: 100%;
      text-align: left;
    `}
`;

export default Label;
