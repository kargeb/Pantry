import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import ButtonAddProduct from '../../atoms/buttons/ButtonAddProduct';
import NewProductForm from '../../forms/newProductForm/NewProductForm';
import Stepper from '../../stepper/Stepper';

const Wrapper = styled.div`
  height: 71px;
  box-sizing: border-box;
  text-align: center;
  padding: 8px 0;
  background-color: ${props => props.theme.background};

  @media (min-width: ${({ theme }) => theme.smallScreen}) {
    height: 110px;
    padding: 15px 0;
  }
`;

const ButtonAdd = styled(ButtonAddProduct)`
  @media (min-width: ${({ theme }) => theme.smallScreen}) {
    width: 80px;
    height: 80px;
    line-height: 80px;
    font-size: 65px;

    &:hover {
      font-size: 80px;
      transform: scale(1.1);
      cursor: pointer;
      font-weight: bold;
    }
  }
`;

const HelpWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 55px;
  z-index: 999999;
  width: 80px;
  height: 80px;
  color: ${props => props.theme.primary};
  left: 8px;
  bottom: 8px;
  background-color: #fff;
  border: 2px solid #aaa;
  cursor: pointer;
  transform: scale(1);
  transition: transform 0.1s ease;
  border-radius: 50%;

  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: ${({ theme }) => theme.smallScreen}) {
    font-size: 120px;
    left: 8px;
    bottom: 8px;
    width: 150px;
    height: 150px;
  }
`;

class ButtonAddProductSection extends React.Component {
  state = {
    isFormVisible: false,
    isHelpVisible: false,
  };

  toggleFormVisibility = () => {
    this.setState(prevState => ({ isFormVisible: !prevState.isFormVisible }));
  };

  toggleHelp = () => {
    this.setState(prevState => ({ isHelpVisible: !prevState.isHelpVisible }));
  };

  render() {
    const { isFormVisible, isHelpVisible } = this.state;
    return (
      <Wrapper>
        <HelpWrapper onClick={this.toggleHelp}>
          <FontAwesomeIcon icon={faQuestionCircle} />
        </HelpWrapper>
        <ButtonAdd type="button" onClick={this.toggleFormVisibility}>
          +
        </ButtonAdd>
        {isFormVisible && (
          <NewProductForm toggleFormVisibility={this.toggleFormVisibility} />
        )}
        {isHelpVisible && <Stepper toggleHelp={this.toggleHelp} />}
      </Wrapper>
    );
  }
}

export default ButtonAddProductSection;
