import React from 'react';
import PropTypes from 'prop-types';
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
  height: 100%;

  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(1px);
  z-index: 9999;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;

  /* padding: 2% 4%; */
  padding: 30px 30px;
  color: ${props => props.theme.textPrimary};
  background-color: ${props => props.theme.background};
  border: solid 2px #999;

  @media (min-width: ${({ theme }) => theme.mediumScreen}) {
    padding: 30px 60px;
  }
`;

const Modal = ({ children }) => (
  <Background>
    <Wrapper>{children}</Wrapper>
  </Background>
);

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;
