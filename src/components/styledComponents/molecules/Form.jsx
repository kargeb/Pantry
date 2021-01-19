import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Form = styled.form`
  position: relative;
  margin: 0;
  /* top: 0; */
  /* left: 50%; */
  /* -ms-transform: translateY(-50%); */
  /* transform: translate(-50%, -50%); */
  /* top: 0; */
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: center; */
  /* align-items: center; */
  width: 350px;
  /* height: 700px; */
  /* min-height: 500px; */
  overflow: auto;
  /* border: 3px solid green; */
  padding: 2% 30px;
  /* padding-top: ${props => props.paddingTop || '0px'}; */
  /* overflow: auto; */
  color: ${props => props.theme.textPrimary};
  background-color: rgba(0,0,0,0.5);
  /* background-color: ${props => props.theme.background}; */
  /* border: solid 3px #999; */


  /* hiding scrollbar */
  /* &::-webkit-scrollbar {
    display: none
  }

  --ms-overflow-style: none;
  scrollbar-width: none; */

`;

export default Form;
