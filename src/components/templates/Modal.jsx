import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(1px);
  z-index: 9999999;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* width: 300px; */

  padding: 2% 4%;
  background-color: white;
  z-index: 10;
`;

const Modal = ({ children }) => (
  <Background>
    <Wrapper>{children}</Wrapper>
  </Background>
);

export default Modal;
