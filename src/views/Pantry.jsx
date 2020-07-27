import React from 'react';
import styled from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';
import PantryList from '../components/pantry/listPantry/PantryList';
import ProductPropertiesForm from '../components/pantry/ProductPropertiesForm';

const Main = styled.main`
  display: flex;
  padding-top: 10px;
  flex-direction: column;
  justify-content: space-between;
  color: ${props => props.theme.textPrimary};
  background-color: ${props => props.theme.background};
`;

const ButtonAddWrapper = styled.div`
  box-sizing: border-box;
  text-align: center;
  padding: 15px 0;
`;

const ButtonAdd = styled.button`
  border: none;
  width: 55px;
  height: 55px;
  line-height: 55px;
  background: ${({ theme }) => theme.primary};
  border-radius: 50%;
  color: ${({ theme }) => theme.textSecondary};
  font-size: 40px;
  text-transform: uppercase;
  transition: all 0.1s;
  outline: none;

  &:hover {
    font-size: 55px;
    transform: scale(1.1);
    cursor: pointer;
    font-weight: bold;
  }

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
        <Scrollbars style={{ height: 'calc(100vh - 140px)' }}>
          <PantryList />
        </Scrollbars>
        <ButtonAddWrapper>
          <ButtonAdd type="button" onClick={this.toggleFormVisibility}>
            +
          </ButtonAdd>
        </ButtonAddWrapper>
        {isFormVisible && (
          <ProductPropertiesForm toggleFormVisibility={this.toggleFormVisibility} />
        )}
      </Main>
    );
  }
}

export default Pantry;
