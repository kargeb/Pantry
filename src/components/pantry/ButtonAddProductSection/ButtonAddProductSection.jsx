import React from 'react';
import styled from 'styled-components';
// import ButtonAddProduct from '../../atoms/buttons/ButtonAddProduct';
import NewProductForm from '../../forms/newProductForm/NewProductForm';
import ButtonAddProduct from '../../styledComponents/buttons/ButtonAddProduct';

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

class ButtonAddProductSection extends React.Component {
  state = {
    isFormVisible: false,
  };

  toggleFormVisibility = () => {
    this.setState(prevState => ({ isFormVisible: !prevState.isFormVisible }));
  };

  render() {
    const { isFormVisible } = this.state;
    return (
      <Wrapper>
        <ButtonAdd type="button" onClick={this.toggleFormVisibility}>
          +
        </ButtonAdd>
        {isFormVisible && (
          <NewProductForm toggleFormVisibility={this.toggleFormVisibility} />
        )}
      </Wrapper>
    );
  }
}

export default ButtonAddProductSection;
