import styled from 'styled-components';
import {
  Form as StyledForm,
  Button as StyledButton,
  Modal,
  Label,
  Input as StyledInput,
  P as StyledP,
  A,
} from '../../../styled';

const P = styled(StyledP)`
  /* margin-bottom: 20px; */
`;

const Form = styled(StyledForm)`
  padding-top: 70px;
`;

const Button = styled(StyledButton)`
  margin-bottom: 20px;
`;

const Input = styled(StyledInput)`
  padding-left: 5px;
  /* margin-bottom: 26px; */
`;

export { Form, Button, Modal, Label, Input, P, A };
