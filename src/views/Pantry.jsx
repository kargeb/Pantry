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

  render() {
    const { isFormVisible } = this.state;
    console.log('useparams z pantry:', this.props.match.path);

    return (
      <AppContext.Consumer>
        {context => (
          <StyledContainer>
            {/* <Nav current="pantry" {...this.props} /> */}
            <StyledMain>
              {context.products.length ? (
                <PantryProductsList products={context.products} />
              ) : (
                <img src={loadingGif} alt="Loading gif" />
              )}

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
              />
            )}
          </StyledContainer>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Pantry;
