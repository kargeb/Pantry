import React from 'react';
import styled from 'styled-components';
import PantryProductsList from '../components/productList/PantryProductsList';
import NewProductForm from '../components/newProductForm/NewProductForm';
import AppContext from '../context';
import Nav from '../components/Nav/Nav';
import loadingGif from '../images/loading_dots.gif';

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

const StyledMain = styled.main`
  height: calc(100vh - 70px);
  /* height: 500px;
  overflow: scroll; */
  /* height: 1000px; */
  /* background-color: green; */
`;

const ProductWrapper = styled.div`
  height: calc(100vh - 140px);
  overflow: auto;
  /* background-color: yellow; */
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
          <StyledMain>
            <ProductWrapper>
              {context.products.length ? (
                <PantryProductsList products={context.products} />
              ) : (
                <img src={loadingGif} alt="Loading gif" />
              )}
            </ProductWrapper>

            <StyledAddButtonWrapper>
              <StyledAddProductButton
                type="button"
                onClick={this.toggleFormVisibility}
              >
                Dodaj
              </StyledAddProductButton>
            </StyledAddButtonWrapper>
            {isFormVisible && (
              <NewProductForm
                toggleFormVisibility={this.toggleFormVisibility}
              />
            )}
          </StyledMain>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Pantry;
