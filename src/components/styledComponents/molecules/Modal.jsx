import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Modal = styled.div`
  position: fixed;
  display: flex;
  /* text-align: center; */
  /* flex: 1 1 auto; */
  /* height: 0px; */
  /* flex: 1; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* overflow: auto; */

  /* background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(1px); */
  z-index: 9999;
`;

export default Modal;
