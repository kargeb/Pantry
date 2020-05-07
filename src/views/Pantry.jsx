import React from 'react';
import styled from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';
import PantryProductsList from '../components/productList/PantryProductsList';
import NewProductForm from '../components/newProductForm/NewProductForm';
import AppContext from '../context';
import loadingGif from '../images/loading_dots.gif';

const StyledAddButtonWrapper = styled.div`
  background-color: #fff;
  text-align: center;
  padding: 15px 0;
`;

const StyledAddProductButton = styled.button`
  border: none;
  width: 55px;
  height: 55px;
  background: ${({ theme }) => theme.primary};
  border-radius: 50%;
  color: #fff;
  font-size: 40px;
  text-transform: uppercase;
`;

class Pantry extends React.Component {
  state = {
    isFormVisible: true,
  };

  toggleFormVisibility = () => {
    this.setState(prevState => ({ isFormVisible: !prevState.isFormVisible }));
  };

  render() {
    const { isFormVisible } = this.state;

    return (
      <AppContext.Consumer>
        {context => (
          <main>
            {/* <ProductWrapper> */}
            {/* <Scrollbars style={{ height: 'calc(100vh - 140px)' }}> */}
            <Scrollbars style={{ height: 'calc(100vh - 140px)' }}>
              {context.products.length ? (
                <PantryProductsList products={context.products} />
              ) : (
                <img src={loadingGif} alt="Loading gif" />
              )}
            </Scrollbars>
            {/* </ProductWrapper> */}

            <StyledAddButtonWrapper>
              <StyledAddProductButton
                type="button"
                onClick={this.toggleFormVisibility}
              >
                +
              </StyledAddProductButton>
            </StyledAddButtonWrapper>
            {isFormVisible && (
              <NewProductForm
                toggleFormVisibility={this.toggleFormVisibility}
              />
            )}
          </main>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Pantry;
