import React from 'react';
import styled from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';
import ListPantryProducts from '../components/pantry/listPantry/ListPantryProducts';
import ProductPropertiesForm from '../components/pantry/ProductPropertiesForm';
import AppContext from '../context';
import loadingGif from '../images/loading_dots.gif';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ButtonAddWrapper = styled.div`
  box-sizing: border-box;
  background-color: #fff;
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
  color: #fff;
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
      <AppContext.Consumer>
        {context => (
          <Main>
            <Scrollbars style={{ height: 'calc(100vh - 140px)' }}>
              {context.products.length ? (
                <ListPantryProducts products={context.products} />
              ) : (
                <img src={loadingGif} alt="Loading gif" />
              )}
            </Scrollbars>
            <ButtonAddWrapper>
              <ButtonAdd type="button" onClick={this.toggleFormVisibility}>
                +
              </ButtonAdd>
            </ButtonAddWrapper>
            {isFormVisible && (
              <ProductPropertiesForm
                toggleFormVisibility={this.toggleFormVisibility}
              />
            )}
          </Main>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Pantry;
