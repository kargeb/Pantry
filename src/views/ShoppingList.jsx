import React from 'react';
import styled from 'styled-components';
import AppContext from '../context';
import ShoppingProductsList from '../components/productList/ShoppingProductsList';
import Nav from '../components/Nav/Nav';

const StyledShoppingListCounter = styled.div`
  background-color: #6202ee;
  color: #fff;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  margin-left: 2px;
  font-weight: 900;
`;

const StyledMain = styled.main`
  height: calc(100vh - 120px);
  /* height: 1000px; */
  background-color: white;
`;

class ShoppingList extends React.Component {
  state = {
    products: [],
  };

  numberOfProductsOnShoppingList = products => {
    console.log('ODPALAM< SIE!!');

    // if (products.length) {
    //   const productsOnShoppingList = products.filter(
    //     product => product.onShoppingList,
    //   );

    //   console.log(productsOnShoppingList);

    //   this.setState({ products: productsOnShoppingList });
    // }
  };

  render() {
    return (
      <div>
        <Nav current="shoppingList" />
        <StyledMain>
          <ShoppingProductsList />
        </StyledMain>
      </div>
    );
  }
}

export default ShoppingList;
