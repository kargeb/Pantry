import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 350px;
  padding: 2% 30px;
  padding-top: ${props => props.paddingTop || '0px'};

  color: ${props => props.theme.textPrimary};
  background-color: rgba(0,0,0,0.5);
  /* background-color: ${props => props.theme.background}; */
  /* border: solid 3px #999; */
`;

export default Form;
