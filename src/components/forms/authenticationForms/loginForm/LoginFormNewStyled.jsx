import styled from 'styled-components';
import {
  Form as StyledForm,
  Button,
  Modal,
  Label,
  Input,
  P as StyledP,
  A,
} from '../../../styled';

const P = styled(StyledP)`
  margin-bottom: 20px;
`;

const Form = styled(StyledForm)`
  padding-top: 70px;
`;

const GuestLoginButton = styled(Button)`
  margin-bottom: 20px;
`;
export { Form, Button, Modal, Label, Input, P, A, GuestLoginButton };
