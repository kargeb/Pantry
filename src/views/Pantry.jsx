import React from 'react';
import styled from 'styled-components';
import PantryProductsList from '../components/productList/PantryProductsList';
import NewProductForm from '../components/newProductForm/NewProductForm';
import AppContext from '../context';
import Nav from '../components/Nav/Nav';

const StyledAddButtonWrapper = styled.div`
  background-color: #fff;
  text-align: center;
  padding: 15px 0;
`;

const StyledAddProductButton = styled.button`
  border: none;
  width: 100px;
  height: 40px;
  background: #6202ee;
  border-radius: 200px;
  color: #fff;
  text-transform: uppercase;
`;

const StyledShoppingListCounter = styled.div`
  background-color: #fff;
  color: #6202ee;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  margin-left: 2px;
  font-weight: 900;
`;

const StyledMain = styled.main`
  height: calc(100vh - 120px);
  /* height: 1000px; */
  /* background-color: white; */
`;

const StyledContainer = styled.div`
  position: relative;
`;

class Pantry extends React.Component {
  state = {
    isFormVisible: false,
  };

  toggleFormVisibility = () => {
    this.setState(prevState => ({ isFormVisible: !prevState.isFormVisible }));
  };

  numberOfProductsOnShoppingList = () => {
    // const { products } = this.state;
    // const productsOnShoppingList = products.filter(
    //   product => product.onShoppingList,
    // );
    // return productsOnShoppingList.length;
  };

  render() {
    const { isFormVisible } = this.state;

    return (
      <AppContext.Consumer>
        {context => (
          <StyledContainer>
            <Nav active="pantry" />
            <StyledMain>
              <PantryProductsList />

              <StyledAddButtonWrapper>
                <StyledAddProductButton
                  type="button"
                  onClick={this.toggleFormVisibility}
                >
                  Dodaj
                </StyledAddProductButton>
              </StyledAddButtonWrapper>
            </StyledMain>
            {isFormVisible && (
              <NewProductForm
                toggleFormVisibility={this.toggleFormVisibility}
                addNewProduct={context.addNewProduct}
                categories={context.categories}
              />
            )}
          </StyledContainer>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Pantry;
