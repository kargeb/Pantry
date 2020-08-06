import React from 'react';
import styled from 'styled-components';
import ShadowScrollbar from '../components/ShadowScrollbar/ShadowScrollbar';
import PantryList from '../components/pantry/listPantry/PantryList';
import FormPantryProductContainer from '../components/pantry/FormPantryProduct/container/FormPantryProductContainer';
import ButtonAddProduct from '../components/atoms/buttons/ButtonAddProduct';

const Main = styled.main`
  display: flex;
  padding-top: 10px;
  flex-direction: column;
  justify-content: space-between;
  color: ${props => props.theme.textPrimary};
  /* background-color: ${props => props.theme.background}; */
  background-color: ${props => props.theme.grey10};
`;

const ButtonAddWrapper = styled.div`
  box-sizing: border-box;
  text-align: center;
  padding: 15px 0;
  background-color: ${props => props.theme.background};
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

class Pantry extends React.Component {
  state = {
    isFormVisible: false,
  };

  toggleFormVisibility = () => {
    this.setState(prevState => ({ isFormVisible: !prevState.isFormVisible }));
  };

  render() {
    const { isFormVisible } = this.state;

    return (
      <Main>
        <ShadowScrollbar style={{ height: '100%' }}>
          <PantryList />
        </ShadowScrollbar>
        <ButtonAddWrapper>
          <ButtonAdd type="button" onClick={this.toggleFormVisibility}>
            +
          </ButtonAdd>
        </ButtonAddWrapper>
        {isFormVisible && (
          <FormPantryProductContainer toggleFormVisibility={this.toggleFormVisibility} />
        )}
      </Main>
    );
  }
}

export default Pantry;
