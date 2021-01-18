import styled from 'styled-components';

const Input = styled.input`
  /* width: 250px; */
  width: 100%;
  height: 55px;
  /* padding-top: 20px; */
  padding-left: 5px;
  /* margin-top: ${props => props.top || '0px'}; */
  font-size: 18px;
  line-height: 55px;
  border: none;
  border-bottom: solid 2px #fff;
  background-color: rgba(0, 0, 0, 0.2);
  color: #fff;
  outline: none;

  &:focus {
    border: solid 1.5px rgba(251, 142, 1, 0.7);
    /* box-shadow: 0px 0px 2px #ffc52f; */
  }
`;

export default Input;
